
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Star, Award, CheckCircle, Phone, Mail } from 'lucide-react';

const Home = () => {
  const featuredProjects = [
    {
      id: 1,
      title: 'Luxury Villa - Rushikonda',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop&q=80',
      description: 'Opulent coastal villa with panoramic ocean views and bespoke furnishings',
      area: '4,500 sq ft',
      duration: '6 months'
    },
    {
      id: 2,
      title: 'Corporate Office - IT Hub',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&q=80',
      description: 'Sophisticated executive workspace with premium materials and cutting-edge design',
      area: '12,000 sq ft',
      duration: '4 months'
    },
    {
      id: 3,
      title: 'Boutique Restaurant - Beach Road',
      category: 'Hospitality',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop&q=80',
      description: 'Exquisite fine dining ambiance with artisanal details and coastal elegance',
      area: '2,800 sq ft',
      duration: '3 months'
    }
  ];

  const services = [
    {
      title: 'Residential Design',
      description: 'Bespoke luxury homes tailored to your lifestyle',
      features: ['Master Suites', 'Gourmet Kitchens', 'Wine Cellars', 'Home Theaters']
    },
    {
      title: 'Commercial Interiors',
      description: 'Prestigious corporate environments that inspire excellence',
      features: ['Executive Offices', 'Boardrooms', 'Reception Areas', 'Private Lounges']
    },
    {
      title: 'Luxury Hospitality',
      description: 'Memorable experiences through exceptional design',
      features: ['Fine Dining', 'Boutique Hotels', 'Spas & Wellness', 'Private Clubs']
    },
    {
      title: 'Heritage Restoration',
      description: 'Preserving elegance while embracing modernity',
      features: ['Historic Homes', 'Antique Integration', 'Period Accuracy', 'Modern Amenities']
    }
  ];

  const stats = [
    { label: 'Luxury Projects', value: '500+' },
    { label: 'Elite Clientele', value: '350+' },
    { label: 'Years of Excellence', value: '15+' },
    { label: 'Design Awards', value: '25+' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with luxury pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E")`
        }}></div>
        
        {/* Luxury interior background image */}
        <div className="absolute inset-0 bg-black/40">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&h=1080&fit=crop&q=80"
            alt="Luxury Interior Background"
            className="w-full h-full object-cover mix-blend-overlay opacity-30"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="space-y-8 animate-fade-in">
            <Badge variant="outline" className="border-white/30 text-white bg-white/10 backdrop-blur-sm px-6 py-2 text-lg font-light tracking-wide">
              ✨ Curated Luxury Living Experiences
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-light leading-tight tracking-tight">
              <span className="block bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 bg-clip-text text-transparent font-extralight">
                EXCEPTIONAL
              </span>
              <span className="block text-white font-thin mt-2">INTERIORS</span>
              <span className="block bg-gradient-to-r from-blue-200 via-purple-200 to-blue-200 bg-clip-text text-transparent font-extralight mt-2">
                EXTRAORDINARY LIVES
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto font-light tracking-wide">
              Where artistry meets luxury. Where vision becomes reality. 
              <br className="hidden md:block" />
              MVL Interio crafts bespoke environments that transcend the ordinary.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button 
                size="lg" 
                asChild
                className="bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 hover:from-amber-700 hover:via-yellow-700 hover:to-amber-700 text-black font-semibold px-12 py-6 text-xl rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 group border-0"
              >
                <Link to="/portfolio">
                  DISCOVER OUR PORTFOLIO
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild
                className="px-12 py-6 text-xl rounded-full border-2 border-white/50 text-white hover:bg-white/10 backdrop-blur-sm font-light tracking-wide transform hover:scale-105 transition-all duration-300"
              >
                <Link to="/contact">BOOK PRIVATE CONSULTATION</Link>
              </Button>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-16 pt-12">
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 border-3 border-white shadow-lg"
                    />
                  ))}
                </div>
                <span className="text-white/90 text-lg font-light">350+ Distinguished Clients</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-6 h-6 text-amber-400 fill-current" />
                  ))}
                </div>
                <span className="text-white/90 text-lg font-light">Exceptional 4.9★ Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-white to-slate-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl lg:text-6xl font-light bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-700 text-lg font-light tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-light text-gray-900 mb-6 tracking-tight">
              SIGNATURE
              <span className="block bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                CREATIONS
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
              Each project tells a unique story of luxury, craftsmanship, and uncompromising attention to detail.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {featuredProjects.map((project, index) => (
              <Card key={project.id} className="group cursor-pointer overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-white rounded-3xl">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-8">
                  <Badge variant="secondary" className="mb-4 bg-amber-100 text-amber-800 px-4 py-2 text-sm font-medium rounded-full">
                    {project.category}
                  </Badge>
                  <h3 className="text-2xl font-light text-gray-900 mb-4 group-hover:text-amber-600 transition-colors duration-300 tracking-wide">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed font-light">{project.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500 font-light">
                    <span>{project.area}</span>
                    <span>{project.duration}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button asChild size="lg" variant="outline" className="px-12 py-6 text-lg border-2 border-gray-300 hover:border-amber-500 hover:text-amber-600 rounded-full font-light tracking-wide transition-all duration-300">
              <Link to="/portfolio">
                EXPLORE COMPLETE PORTFOLIO
                <ArrowRight className="ml-3 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-light text-gray-900 mb-6 tracking-tight">
              BESPOKE
              <span className="block bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                SERVICES
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
              Tailored solutions for discerning clients who demand nothing but extraordinary.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group bg-gradient-to-b from-white to-slate-50 rounded-3xl">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-light text-gray-900 mb-4 group-hover:text-amber-600 transition-colors duration-300 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 font-light leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700 font-light">
                        <CheckCircle className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button asChild size="lg" className="bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 hover:from-amber-700 hover:via-yellow-700 hover:to-amber-700 text-black font-semibold px-12 py-6 text-lg rounded-full shadow-xl">
              <Link to="/services">
                DISCOVER ALL SERVICES
                <ArrowRight className="ml-3 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Luxury CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900"></div>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&h=1080&fit=crop&q=80"
            alt="Luxury Interior"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl lg:text-6xl font-light mb-6 tracking-tight">
            BEGIN YOUR
            <span className="block bg-gradient-to-r from-amber-200 to-yellow-200 bg-clip-text text-transparent">
              LUXURY JOURNEY
            </span>
          </h2>
          <p className="text-xl lg:text-2xl mb-12 opacity-90 max-w-4xl mx-auto font-light leading-relaxed">
            Transform your vision into an extraordinary reality. Our master craftsmen await to create 
            your personalized sanctuary of luxury and sophistication.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" asChild className="px-12 py-6 text-xl bg-white text-gray-900 hover:bg-gray-100 rounded-full font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300">
              <Link to="/contact">
                <Phone className="mr-3 w-6 h-6" />
                SCHEDULE CONSULTATION
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="px-12 py-6 text-xl border-2 border-white/50 text-white hover:bg-white/10 backdrop-blur-sm rounded-full font-light tracking-wide transform hover:scale-105 transition-all duration-300">
              <Link to="/portfolio">
                <Mail className="mr-3 w-6 h-6" />
                REQUEST PORTFOLIO
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
