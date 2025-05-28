
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowRight, Home, Building, Utensils, Stethoscope, ShoppingBag, Palette } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Design',
      description: 'Complete home transformations with personalized luxury and attention to every detail.',
      features: [
        'Living Room Design',
        'Master Bedroom Suites',
        'Modular Kitchen Design',
        'Bathroom Renovations',
        'Home Theater Setup',
        'Outdoor Spaces'
      ],
      pricing: 'Starting from ₹2,500/sq ft',
      duration: '2-6 months',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop'
    },
    {
      icon: Building,
      title: 'Commercial Interiors',
      description: 'Professional spaces that inspire productivity and reflect your brand identity.',
      features: [
        'Office Space Planning',
        'Reception Area Design',
        'Conference Room Setup',
        'Workstation Design',
        'Break Area Planning',
        'Brand Integration'
      ],
      pricing: 'Starting from ₹1,800/sq ft',
      duration: '1-4 months',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop'
    },
    {
      icon: Utensils,
      title: 'Hospitality Design',
      description: 'Creating memorable experiences through thoughtful restaurant and hotel interiors.',
      features: [
        'Restaurant Design',
        'Hotel Lobbies',
        'Bar & Lounge Areas',
        'Guest Room Design',
        'Kitchen Planning',
        'Outdoor Dining'
      ],
      pricing: 'Starting from ₹2,200/sq ft',
      duration: '2-5 months',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop'
    },
    {
      icon: Stethoscope,
      title: 'Healthcare Spaces',
      description: 'Healing-focused environments that promote wellness and patient comfort.',
      features: [
        'Clinic Design',
        'Hospital Interiors',
        'Dental Office Setup',
        'Therapy Centers',
        'Waiting Areas',
        'Equipment Integration'
      ],
      pricing: 'Starting from ₹2,000/sq ft',
      duration: '1-3 months',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop'
    },
    {
      icon: ShoppingBag,
      title: 'Retail Spaces',
      description: 'Strategic retail design that enhances customer experience and drives sales.',
      features: [
        'Store Layout Planning',
        'Visual Merchandising',
        'Lighting Design',
        'Brand Experience',
        'Checkout Areas',
        'Storage Solutions'
      ],
      pricing: 'Starting from ₹1,500/sq ft',
      duration: '1-3 months',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop'
    },
    {
      icon: Palette,
      title: 'Renovation & Makeover',
      description: 'Complete space transformation with modern aesthetics and functional improvements.',
      features: [
        'Full Home Renovation',
        'Partial Makeovers',
        'Furniture Refresh',
        'Color Consultation',
        'Lighting Upgrade',
        'Space Optimization'
      ],
      pricing: 'Starting from ₹1,200/sq ft',
      duration: '2-8 months',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'We discuss your vision, requirements, and budget to understand your needs.'
    },
    {
      step: '02',
      title: 'Design Concept',
      description: 'Our team creates initial concepts and mood boards for your approval.'
    },
    {
      step: '03',
      title: 'Detailed Planning',
      description: 'We develop comprehensive plans, 3D renders, and material specifications.'
    },
    {
      step: '04',
      title: 'Execution',
      description: 'Our skilled craftsmen bring the design to life with precision and quality.'
    },
    {
      step: '05',
      title: 'Final Walkthrough',
      description: 'We ensure everything meets our high standards and your expectations.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Our Services
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            From luxury residential spaces to cutting-edge commercial environments, 
            we offer comprehensive interior design solutions tailored to your unique vision.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Services Include:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium text-gray-900">Pricing</h5>
                        <p className="text-sm text-gray-600">{service.pricing}</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900">Timeline</h5>
                        <p className="text-sm text-gray-600">{service.duration}</p>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        Get Quote
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Design Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology that ensures exceptional results and client satisfaction at every step.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform translate-x-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss your project and create a personalized design solution that exceeds your expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-6 text-lg">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-blue-600">
              Get Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
