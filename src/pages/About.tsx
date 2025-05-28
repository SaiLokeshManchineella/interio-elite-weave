
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Users, Clock, Heart, Target, Eye, Lightbulb } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, label: 'Awards Won', value: '25+', color: 'text-yellow-600' },
    { icon: Users, label: 'Happy Clients', value: '350+', color: 'text-blue-600' },
    { icon: Clock, label: 'Years Experience', value: '15+', color: 'text-green-600' },
    { icon: Heart, label: 'Projects Completed', value: '500+', color: 'text-purple-600' }
  ];

  const team = [
    {
      name: 'Rajesh Varma',
      role: 'Principal Designer & Founder',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=300&h=300&fit=crop',
      bio: '15+ years creating luxury interiors across India',
      specialization: 'Luxury Residential, Commercial Design'
    },
    {
      name: 'Priya Sharma',
      role: 'Senior Interior Designer',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop',
      bio: 'Expert in sustainable design and space optimization',
      specialization: 'Sustainable Design, Space Planning'
    },
    {
      name: 'Arjun Reddy',
      role: 'Project Manager',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=300&fit=crop',
      bio: 'Ensuring flawless execution and client satisfaction',
      specialization: 'Project Management, Quality Control'
    },
    {
      name: 'Kavitha Nair',
      role: 'Design Consultant',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop',
      bio: 'Specializing in color theory and material selection',
      specialization: 'Color Consultation, Material Design'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We pursue perfection in every detail, ensuring our designs exceed expectations and stand the test of time.'
    },
    {
      icon: Eye,
      title: 'Innovation',
      description: 'We embrace cutting-edge design trends while respecting timeless principles to create unique, future-ready spaces.'
    },
    {
      icon: Heart,
      title: 'Client-Centric',
      description: 'Your vision drives our creativity. We listen, understand, and translate your dreams into stunning reality.'
    },
    {
      icon: Lightbulb,
      title: 'Sustainability',
      description: 'We prioritize eco-friendly materials and practices, creating beautiful spaces that respect our environment.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                About MVL Interio
              </h1>
              <p className="text-xl opacity-90 leading-relaxed mb-8">
                Since 2009, MVL Interio has been transforming spaces across Vishakhapatnam, 
                creating luxury interiors that reflect our clients' personalities and enhance their lifestyles. 
                As part of the trusted MVL brand family, we bring heritage, excellence, and innovation to every project.
              </p>
              <div className="flex items-center space-x-6">
                <Badge variant="secondary" className="px-4 py-2">
                  Est. 2009
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  MVL Brand Family
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  Award Winning
                </Badge>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=750&fit=crop"
                  alt="MVL Interio Office"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Story
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming Vishakhapatnam's premier interior design destination
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Heritage of Excellence
              </h3>
              <p className="text-gray-600 leading-relaxed">
                MVL Interio was born from a vision to bring world-class interior design to Vishakhapatnam. 
                As part of the established MVL brand family, which includes MVL Builders and MVL Enterprises, 
                we carry forward a legacy of trust, quality, and innovation that spans over two decades.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our founder, Rajesh Varma, recognized the growing demand for sophisticated interior design 
                in the region and assembled a team of passionate designers committed to creating spaces that 
                tell stories, evoke emotions, and enhance lives.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we're proud to have transformed over 500 spaces, won 25+ design awards, and earned 
                the trust of 350+ satisfied clients who continue to recommend us to their friends and family.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop"
                alt="Our Journey"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every design decision and client interaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate designers and professionals dedicated to bringing your vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-3">{member.bio}</p>
                  <Badge variant="secondary" className="text-xs">
                    {member.specialization}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Let's Create Something Beautiful Together
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Ready to transform your space? Our team is excited to learn about your vision 
            and bring it to life with our expertise and passion for design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule a Meeting
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              View Our Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
