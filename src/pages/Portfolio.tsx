
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Residential', 'Commercial', 'Hospitality', 'Healthcare', 'Retail'];

  const projects = [
    {
      id: 1,
      title: 'Luxury Villa - Rushikonda',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop',
      description: 'Modern luxury living with coastal charm and premium finishes',
      area: '4,500 sq ft',
      duration: '6 months',
      budget: '₹45-60L',
      year: '2024',
      tags: ['Luxury', 'Villa', 'Modern', 'Coastal']
    },
    {
      id: 2,
      title: 'Corporate Office - IT Hub',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      description: 'Contemporary workspace design promoting productivity and collaboration',
      area: '12,000 sq ft',
      duration: '4 months',
      budget: '₹80-100L',
      year: '2024',
      tags: ['Office', 'Corporate', 'Modern', 'Tech']
    },
    {
      id: 3,
      title: 'Boutique Restaurant - Beach Road',
      category: 'Hospitality',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
      description: 'Elegant dining experience with coastal-inspired interiors',
      area: '2,800 sq ft',
      duration: '3 months',
      budget: '₹25-35L',
      year: '2023',
      tags: ['Restaurant', 'Coastal', 'Elegant', 'Dining']
    },
    {
      id: 4,
      title: 'Penthouse Apartment - Siripuram',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop',
      description: 'Ultra-modern penthouse with panoramic city views',
      area: '3,200 sq ft',
      duration: '5 months',
      budget: '₹50-70L',
      year: '2023',
      tags: ['Penthouse', 'Modern', 'Luxury', 'Views']
    },
    {
      id: 5,
      title: 'Medical Clinic - Dwaraka Nagar',
      category: 'Healthcare',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop',
      description: 'Healing-focused design with calming aesthetics',
      area: '1,800 sq ft',
      duration: '2 months',
      budget: '₹15-25L',
      year: '2023',
      tags: ['Medical', 'Healing', 'Calm', 'Professional']
    },
    {
      id: 6,
      title: 'Luxury Retail Store - Jagadamba',
      category: 'Retail',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop',
      description: 'High-end retail space with premium brand positioning',
      area: '2,200 sq ft',
      duration: '3 months',
      budget: '₹30-40L',
      year: '2024',
      tags: ['Retail', 'Luxury', 'Brand', 'Shopping']
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Our Portfolio
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore our collection of award-winning interior design projects across 
            residential, commercial, and hospitality spaces in Vishakhapatnam and beyond.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? 
                    "bg-blue-600 hover:bg-blue-700" : 
                    "hover:bg-gray-50"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="mt-4 text-center text-gray-600">
            Showing {filteredProjects.length} of {projects.length} projects
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <Button
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-gray-900 hover:bg-gray-100"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-blue-600">
                    {project.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-500 mb-4">
                    <div>
                      <span className="font-medium">Area:</span> {project.area}
                    </div>
                    <div>
                      <span className="font-medium">Duration:</span> {project.duration}
                    </div>
                    <div>
                      <span className="font-medium">Budget:</span> {project.budget}
                    </div>
                    <div>
                      <span className="font-medium">Year:</span> {project.year}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No projects found matching your criteria.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchTerm('');
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss how we can transform your space with our award-winning design expertise.
          </p>
          <Button size="lg" variant="secondary" className="px-8 py-6 text-lg">
            Book a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
