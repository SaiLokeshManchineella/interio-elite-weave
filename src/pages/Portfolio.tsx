
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
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop&q=80',
      description: 'Opulent coastal estate featuring Italian marble, custom millwork, and panoramic ocean vistas',
      area: '4,500 sq ft',
      duration: '6 months',
      budget: '₹45-60L',
      year: '2024',
      tags: ['Luxury', 'Villa', 'Coastal', 'Italian Marble']
    },
    {
      id: 2,
      title: 'Executive Penthouse - IT Hub',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&q=80',
      description: 'Sophisticated C-suite office with bespoke furniture, smart automation, and premium finishes',
      area: '12,000 sq ft',
      duration: '4 months',
      budget: '₹80-100L',
      year: '2024',
      tags: ['Executive', 'Smart Office', 'Premium', 'Automation']
    },
    {
      id: 3,
      title: 'Fine Dining Restaurant - Beach Road',
      category: 'Hospitality',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop&q=80',
      description: 'Michelin-starred ambiance with artisanal lighting, imported fabrics, and coastal elegance',
      area: '2,800 sq ft',
      duration: '3 months',
      budget: '₹25-35L',
      year: '2023',
      tags: ['Fine Dining', 'Artisanal', 'Coastal', 'Premium']
    },
    {
      id: 4,
      title: 'Heritage Mansion - Siripuram',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop&q=80',
      description: 'Restored colonial mansion blending heritage architecture with contemporary luxury amenities',
      area: '3,200 sq ft',
      duration: '5 months',
      budget: '₹50-70L',
      year: '2023',
      tags: ['Heritage', 'Colonial', 'Restoration', 'Luxury']
    },
    {
      id: 5,
      title: 'Wellness Spa - Dwaraka Nagar',
      category: 'Healthcare',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&q=80',
      description: 'Tranquil healing sanctuary with natural materials, water features, and biophilic design',
      area: '1,800 sq ft',
      duration: '2 months',
      budget: '₹15-25L',
      year: '2023',
      tags: ['Wellness', 'Spa', 'Natural', 'Biophilic']
    },
    {
      id: 6,
      title: 'Luxury Boutique - Jagadamba',
      category: 'Retail',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&q=80',
      description: 'High-fashion retail space with custom displays, LED integration, and premium materials',
      area: '2,200 sq ft',
      duration: '3 months',
      budget: '₹30-40L',
      year: '2024',
      tags: ['Fashion', 'Boutique', 'LED', 'Custom Displays']
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
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <Button
                      size="lg"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-gray-900 hover:bg-gray-100 rounded-full px-8 py-4 font-semibold shadow-xl transform scale-95 group-hover:scale-100"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      VIEW PROJECT
                    </Button>
                  </div>
                  <Badge className="absolute top-6 left-6 bg-amber-600 text-black px-4 py-2 text-sm font-semibold rounded-full">
                    {project.category}
                  </Badge>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-light text-gray-900 mb-4 group-hover:text-amber-600 transition-colors duration-300 tracking-wide">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-2 font-light leading-relaxed">{project.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-500 mb-6 font-light">
                    <div>
                      <span className="font-medium text-gray-700">Area:</span> {project.area}
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Duration:</span> {project.duration}
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Investment:</span> {project.budget}
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Year:</span> {project.year}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs bg-amber-50 text-amber-700 px-3 py-1 rounded-full font-medium">
                        {tag}
                      </Badge>
                    ))}
                  </div>
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
