import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { Loader2, Upload, Trash2, LogOut, Image as ImageIcon } from 'lucide-react';

interface PortfolioImage {
  id: string;
  title: string;
  description: string | null;
  category: string;
  image_url: string;
  storage_path: string;
  display_order: number;
}

const Admin = () => {
  const [user, setUser] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState<PortfolioImage[]>([]);
  const [uploading, setUploading] = useState(false);
  
  // Form state
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [file, setFile] = useState<File | null>(null);
  
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
    fetchImages();
  }, []);

  const checkAuth = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate('/auth');
        return;
      }

      setUser(session.user);

      // Check if user is admin
      const { data: roleData } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', session.user.id)
        .eq('role', 'admin')
        .single();

      if (!roleData) {
        toast.error('Access denied. Admin privileges required.');
        navigate('/');
        return;
      }

      setIsAdmin(true);
    } catch (error) {
      console.error('Auth check failed:', error);
      navigate('/auth');
    } finally {
      setLoading(false);
    }
  };

  const fetchImages = async () => {
    const { data, error } = await supabase
      .from('portfolio_images')
      .select('*')
      .order('display_order', { ascending: true });

    if (error) {
      toast.error('Failed to load images');
      return;
    }

    setImages(data || []);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      
      // Validate file type
      if (!selectedFile.type.startsWith('image/')) {
        toast.error('Please select an image file');
        return;
      }

      // Validate file size (10MB)
      if (selectedFile.size > 10485760) {
        toast.error('Image size must be less than 10MB');
        return;
      }

      setFile(selectedFile);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!file || !title || !category) {
      toast.error('Please fill all required fields');
      return;
    }

    setUploading(true);

    try {
      // Upload to storage
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `${category}/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('portfolio-images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('portfolio-images')
        .getPublicUrl(filePath);

      // Save to database
      const { error: dbError } = await supabase
        .from('portfolio_images')
        .insert({
          title,
          description,
          category,
          image_url: publicUrl,
          storage_path: filePath,
          display_order: images.length,
        });

      if (dbError) throw dbError;

      toast.success('Image uploaded successfully!');
      
      // Reset form
      setTitle('');
      setDescription('');
      setCategory('');
      setFile(null);
      
      // Refresh images
      fetchImages();
    } catch (error: any) {
      toast.error(error.message || 'Failed to upload image');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (image: PortfolioImage) => {
    if (!confirm(`Delete "${image.title}"?`)) return;

    try {
      // Delete from storage
      const { error: storageError } = await supabase.storage
        .from('portfolio-images')
        .remove([image.storage_path]);

      if (storageError) throw storageError;

      // Delete from database
      const { error: dbError } = await supabase
        .from('portfolio_images')
        .delete()
        .eq('id', image.id);

      if (dbError) throw dbError;

      toast.success('Image deleted successfully');
      fetchImages();
    } catch (error: any) {
      toast.error(error.message || 'Failed to delete image');
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/auth');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
            <p className="text-gray-600 mt-1">Manage your portfolio images</p>
          </div>
          <Button onClick={handleLogout} variant="outline">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>

        {/* Upload Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Upload New Image</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleUpload} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Luxury Villa Design"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Select value={category} onValueChange={setCategory} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                      <SelectItem value="hospitality">Hospitality</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Brief description of the project..."
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="file">Image *</Label>
                <Input
                  id="file"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  required
                />
                {file && (
                  <p className="text-sm text-gray-500">
                    Selected: {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                  </p>
                )}
              </div>

              <Button type="submit" disabled={uploading}>
                {uploading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Uploading...
                  </>
                ) : (
                  <>
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Image
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Images Grid */}
        <Card>
          <CardHeader>
            <CardTitle>Portfolio Images ({images.length})</CardTitle>
          </CardHeader>
          <CardContent>
            {images.length === 0 ? (
              <div className="text-center py-12">
                <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-2 text-gray-500">No images uploaded yet</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((image) => (
                  <div key={image.id} className="group relative">
                    <div className="aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
                      <img
                        src={image.image_url}
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="mt-3">
                      <h3 className="font-semibold text-gray-900">{image.title}</h3>
                      <p className="text-sm text-gray-600 capitalize">{image.category}</p>
                      {image.description && (
                        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                          {image.description}
                        </p>
                      )}
                    </div>
                    <Button
                      variant="destructive"
                      size="sm"
                      className="mt-2 w-full"
                      onClick={() => handleDelete(image)}
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;
