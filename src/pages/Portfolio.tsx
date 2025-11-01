
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, ExternalLink, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface PortfolioImage {
  id: string;
  title: string;
  description: string | null;
  category: string;
  image_url: string;
  storage_path: string;
  display_order: number;
}

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [projects, setProjects] = useState<PortfolioImage[]>([]);
  const [loading, setLoading] = useState(true);

  const categories = ['All', 'Residential', 'Commercial', 'Hospitality', 'Retail'];

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('portfolio_images')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) throw error;
      setProjects(data || []);
    } catch (error: any) {
      toast.error('Failed to load portfolio images');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (project.description?.toLowerCase() || '').includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-amber-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900"></div>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&h=1080&fit=crop&q=80"
            alt="Luxury Portfolio Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl lg:text-7xl font-light mb-6 tracking-tight">
            SIGNATURE
            <span className="block bg-gradient-to-r from-amber-200 to-yellow-200 bg-clip-text text-transparent">
              PORTFOLIO
            </span>
          </h1>
          <p className="text-xl lg:text-2xl opacity-90 max-w-4xl mx-auto font-light leading-relaxed">
            A curated collection of our most distinguished luxury interior projects, 
            each a testament to exceptional craftsmanship and visionary design.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search luxury projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 py-4 text-lg rounded-full border-2 border-gray-200 focus:border-amber-500 font-light"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="lg"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? 
                    "bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-black font-semibold px-8 py-3 rounded-full" : 
                    "hover:bg-gray-50 px-8 py-3 rounded-full font-light border-2 border-gray-200 hover:border-amber-500"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="mt-6 text-center text-gray-600 font-light text-lg">
            Showcasing {filteredProjects.length} of {projects.length} exceptional projects
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group cursor-pointer overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-white rounded-3xl">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={project.image_url}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <Badge className="absolute top-6 left-6 bg-amber-600 text-black px-4 py-2 text-sm font-semibold rounded-full capitalize">
                    {project.category}
                  </Badge>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-light text-gray-900 mb-4 group-hover:text-amber-600 transition-colors duration-300 tracking-wide">
                    {project.title}
                  </h3>
                  {project.description && (
                    <p className="text-gray-600 mb-6 line-clamp-3 font-light leading-relaxed">{project.description}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-24">
              <p className="text-gray-500 text-xl font-light mb-6">No projects found matching your refined criteria.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchTerm('');
                }}
                className="px-8 py-4 text-lg rounded-full border-2 border-gray-300 hover:border-amber-500 font-light"
              >
                RESET FILTERS
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-amber-600 via-yellow-600 to-amber-600 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-light mb-6 tracking-tight">
            ENVISION YOUR
            <span className="block font-normal">LUXURY PROJECT</span>
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto font-light leading-relaxed">
            Ready to create your own masterpiece? Let our design virtuosos transform 
            your space into an extraordinary testament to luxury and sophistication.
          </p>
          <Button size="lg" variant="secondary" className="px-12 py-6 text-xl bg-white text-gray-900 hover:bg-gray-100 rounded-full font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300">
            BEGIN YOUR JOURNEY
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
