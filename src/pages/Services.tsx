
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowRight, Home, Building, Utensils, Stethoscope, ShoppingBag, Palette, Phone, Mail } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Luxury Residential Design',
      description: 'Bespoke home transformations with uncompromising attention to every luxurious detail.',
      features: [
        'Master Suite Sanctuaries',
        'Gourmet Kitchen Design',
        'Private Home Theaters',
        'Spa-inspired Bathrooms',
        'Wine Cellar & Bar Areas',
        'Outdoor Living Spaces'
      ],
      pricing: 'Starting from ₹3,500/sq ft',
      duration: '3-8 months',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=400&fit=crop&q=80'
    },
    {
      icon: Building,
      title: 'Executive Commercial Spaces',
      description: 'Prestigious corporate environments that inspire excellence and reflect sophisticated brand identity.',
      features: [
        'C-Suite Executive Offices',
        'Premium Reception Areas',
        'Boardroom Excellence',
        'Collaborative Workspaces',
        'Executive Lounges',
        'Brand Identity Integration'
      ],
      pricing: 'Starting from ₹2,800/sq ft',
      duration: '2-6 months',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&q=80'
    },
    {
      icon: Utensils,
      title: 'Fine Dining & Hospitality',
      description: 'Creating extraordinary dining experiences through sophisticated ambiance and impeccable design.',
      features: [
        'Michelin-Star Restaurant Design',
        'Luxury Hotel Suites',
        'Premium Bar & Lounge',
        'Private Dining Rooms',
        'Chef\'s Table Experience',
        'Rooftop Dining Spaces'
      ],
      pricing: 'Starting from ₹3,200/sq ft',
      duration: '3-7 months',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop&q=80'
    },
    {
      icon: Stethoscope,
      title: 'Wellness & Healthcare',
      description: 'Healing-focused luxury environments that promote wellness, comfort, and premium patient care.',
      features: [
        'Luxury Medical Clinics',
        'Wellness Spa Design',
        'Premium Dental Offices',
        'Therapy & Meditation Centers',
        'VIP Patient Suites',
        'Healing Garden Spaces'
      ],
      pricing: 'Starting from ₹2,500/sq ft',
      duration: '2-5 months',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&q=80'
    },
    {
      icon: ShoppingBag,
      title: 'Luxury Retail Experiences',
      description: 'Premium retail spaces that elevate shopping into an extraordinary luxury experience.',
      features: [
        'High-End Boutique Design',
        'Luxury Brand Showrooms',
        'VIP Shopping Lounges',
        'Premium Display Systems',
        'Exclusive Fitting Rooms',
        'Personalized Service Areas'
      ],
      pricing: 'Starting from ₹2,200/sq ft',
      duration: '2-4 months',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&q=80'
    },
    {
      icon: Palette,
      title: 'Heritage Restoration & Luxury Makeovers',
      description: 'Preserving architectural heritage while infusing contemporary luxury and modern sophistication.',
      features: [
        'Heritage Property Restoration',
        'Complete Luxury Makeovers',
        'Antique Integration Design',
        'Modern Luxury Upgrades',
        'Period-Accurate Renovations',
        'Smart Home Integration'
      ],
      pricing: 'Starting from ₹2,000/sq ft',
      duration: '4-12 months',
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&h=400&fit=crop&q=80'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Private Consultation',
      description: 'Intimate discussion of your luxury vision, lifestyle requirements, and investment parameters with our design director.'
    },
    {
      step: '02',
      title: 'Bespoke Concept Creation',
      description: 'Our master designers craft exclusive concepts, luxury mood boards, and preliminary sketches for your approval.'
    },
    {
      step: '03',
      title: 'Detailed Design Development',
      description: 'Comprehensive luxury plans, photorealistic 3D renderings, and premium material specifications are meticulously developed.'
    },
    {
      step: '04',
      title: 'Premium Execution',
      description: 'Our master craftsmen and luxury specialists bring your vision to life with uncompromising quality and precision.'
    },
    {
      step: '05',
      title: 'White-Glove Completion',
      description: 'Final luxury walkthrough ensuring every detail meets our exceptional standards and your refined expectations.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900"></div>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&h=1080&fit=crop&q=80"
            alt="Luxury Services Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl lg:text-7xl font-light mb-6 tracking-tight">
            LUXURY
            <span className="block bg-gradient-to-r from-amber-200 to-yellow-200 bg-clip-text text-transparent">
              SERVICES
            </span>
          </h1>
          <p className="text-xl lg:text-2xl opacity-90 max-w-4xl mx-auto font-light leading-relaxed">
            From opulent residential sanctuaries to prestigious commercial environments, 
            we deliver unparalleled luxury interior design solutions tailored to your distinguished taste.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" className="px-12 py-6 text-xl bg-white text-gray-900 hover:bg-gray-100 rounded-full font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300">
              <Phone className="mr-3 w-6 h-6" />
              CALL: +91 8908843333
            </Button>
            <Button size="lg" variant="outline" className="px-12 py-6 text-xl border-2 border-white/50 text-white hover:bg-white/10 backdrop-blur-sm rounded-full font-light tracking-wide transform hover:scale-105 transition-all duration-300">
              <Mail className="mr-3 w-6 h-6" />
              SCHEDULE CONSULTATION
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-light text-gray-900 mb-6 tracking-tight">
              SIGNATURE
              <span className="block bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                OFFERINGS
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
              Each service is meticulously crafted to deliver extraordinary luxury experiences that transcend expectations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 group bg-white rounded-3xl">
                <div className="aspect-[3/2] overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-600 via-yellow-600 to-amber-600 rounded-2xl flex items-center justify-center shadow-xl">
                      <service.icon className="w-8 h-8 text-black" />
                    </div>
                    <CardTitle className="text-2xl lg:text-3xl font-light text-gray-900 group-hover:text-amber-600 transition-colors duration-300 tracking-wide">
                      {service.title}
                    </CardTitle>
                  </div>
                  <p className="text-gray-600 font-light leading-relaxed text-lg">{service.description}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4 text-lg tracking-wide">EXCLUSIVE SERVICES:</h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-700 font-light">
                            <CheckCircle className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-6">
                      <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-2xl">
                        <h5 className="font-semibold text-gray-900 mb-2 text-lg">INVESTMENT</h5>
                        <p className="text-amber-700 font-semibold text-xl">{service.pricing}</p>
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl">
                        <h5 className="font-semibold text-gray-900 mb-2 text-lg">TIMELINE</h5>
                        <p className="text-blue-700 font-semibold text-xl">{service.duration}</p>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 hover:from-amber-700 hover:via-yellow-700 hover:to-amber-700 text-black font-semibold py-4 text-lg rounded-full shadow-xl transform hover:scale-105 transition-all duration-300">
                        REQUEST QUOTE
                        <ArrowRight className="ml-2 w-5 h-5" />
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-light text-gray-900 mb-6 tracking-tight">
              OUR SIGNATURE
              <span className="block bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                PROCESS
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
              A refined methodology ensuring exceptional results and unparalleled client satisfaction at every luxurious step.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 relative">
            {process.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-600 via-yellow-600 to-amber-600 rounded-full flex items-center justify-center text-black font-bold text-2xl mx-auto mb-6 shadow-2xl transform hover:scale-110 transition-all duration-300">
                  {step.step}
                </div>
                <h3 className="text-xl font-light text-gray-900 mb-4 tracking-wide">{step.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{step.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-1 bg-gradient-to-r from-amber-600 to-yellow-600 transform translate-x-4 rounded-full opacity-30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 bg-gradient-to-br from-amber-600 via-yellow-600 to-amber-600 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-light mb-6 tracking-tight">
            READY TO CREATE
            <span className="block font-normal">YOUR LUXURY SANCTUARY?</span>
          </h2>
          <p className="text-xl lg:text-2xl mb-12 opacity-90 max-w-4xl mx-auto font-light leading-relaxed">
            Connect with Vikram Manchineella and our master design team to begin your extraordinary transformation journey.
          </p>
          <div className="flex flex-col lg:flex-row gap-6 justify-center mb-12">
            <Button size="lg" variant="secondary" className="px-12 py-6 text-xl bg-white text-gray-900 hover:bg-gray-100 rounded-full font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300">
              <Phone className="mr-3 w-6 h-6" />
              CALL: +91 8908843333
            </Button>
            <Button size="lg" variant="secondary" className="px-12 py-6 text-xl bg-white text-gray-900 hover:bg-gray-100 rounded-full font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300">
              <Phone className="mr-3 w-6 h-6" />
              CALL: +91 7382312692
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="outline" className="px-12 py-6 text-xl border-2 border-black/30 text-black hover:bg-black/10 rounded-full font-light tracking-wide transform hover:scale-105 transition-all duration-300">
              SCHEDULE PRIVATE CONSULTATION
            </Button>
            <Button size="lg" variant="outline" className="px-12 py-6 text-xl border-2 border-black/30 text-black hover:bg-black/10 rounded-full font-light tracking-wide transform hover:scale-105 transition-all duration-300">
              REQUEST PORTFOLIO
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
