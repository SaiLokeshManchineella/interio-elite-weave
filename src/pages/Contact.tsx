
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Studio',
      details: ['123 Design Street, MVP Colony', 'Vishakhapatnam, AP 530017'],
      action: 'Get Directions'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 8908843333', '+91 7382312692'],
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['contact@mvlinterio.com', 'vikram@mvlinterio.com'],
      action: 'Send Email'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Sat: 9:00 AM - 7:00 PM', 'Sunday: 10:00 AM - 5:00 PM'],
      action: 'Schedule Visit'
    }
  ];

  const projectTypes = [
    'Residential Design',
    'Commercial Interior',
    'Hospitality Design',
    'Healthcare Space',
    'Retail Design',
    'Renovation'
  ];

  const budgetRanges = [
    'Under ₹5 Lakhs',
    '₹5 - 15 Lakhs',
    '₹15 - 30 Lakhs',
    '₹30 - 50 Lakhs',
    '₹50+ Lakhs'
  ];

  const timelines = [
    '1-2 Months',
    '3-4 Months',
    '5-6 Months',
    '6+ Months',
    'Flexible'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Let's Create Something Amazing
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Ready to transform your space? Get in touch with our design experts to discuss your project 
            and receive a personalized consultation.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-xl">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl text-gray-900">Book Your Consultation</CardTitle>
                <p className="text-gray-600">
                  Tell us about your project and we'll get back to you within 24 hours with a detailed proposal.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 XXXXX XXXXX"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type *
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select timeline</option>
                        {timelines.map((timeline) => (
                          <option key={timeline} value={timeline}>{timeline}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your vision, space requirements, specific needs, or any questions you have..."
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6"
                  >
                    Submit Consultation Request
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    We'll get back to you within 24 hours with a detailed proposal and next steps.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                <p className="text-gray-600 text-lg">
                  Visit our studio, call us, or send an email. We're here to help bring your vision to life.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-600">{detail}</p>
                          ))}
                          <Button variant="ghost" size="sm" className="mt-3 p-0 h-auto text-blue-600 hover:text-blue-700">
                            {info.action}
                            <ArrowRight className="ml-1 w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* What to Expect */}
              <Card className="p-6 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-purple-50">
                <CardHeader className="p-0 pb-4">
                  <CardTitle className="text-xl text-gray-900 flex items-center">
                    <Calendar className="w-6 h-6 mr-2 text-blue-600" />
                    What to Expect
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-3">
                    {[
                      'Free 60-minute consultation',
                      'Site visit and measurements',
                      'Preliminary design concepts',
                      'Detailed project proposal',
                      'Timeline and budget discussion'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Studio</h2>
            <p className="text-xl text-gray-600">
              Located in the heart of Vishakhapatnam, our studio showcases the latest in interior design trends.
            </p>
          </div>
          
          <div className="aspect-[16/9] bg-gray-200 rounded-lg overflow-hidden">
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">Interactive Map</p>
                <p className="text-gray-400">MVL Interio Studio Location</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about our services and process
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                question: 'How long does a typical project take?',
                answer: 'Project duration varies based on scope and complexity. Residential projects typically take 2-6 months, while commercial projects range from 1-4 months.'
              },
              {
                question: 'Do you provide 3D visualizations?',
                answer: 'Yes, we provide detailed 3D renders and virtual walkthroughs for all projects to help you visualize the final result before construction begins.'
              },
              {
                question: 'What is included in your design fee?',
                answer: 'Our design fee includes consultation, concept development, detailed drawings, 3D renders, material specifications, and project management.'
              },
              {
                question: 'Do you handle project execution?',
                answer: 'Yes, we manage the entire project from design to completion, including coordination with contractors, material procurement, and quality control.'
              },
              {
                question: 'Can you work within my budget?',
                answer: 'Absolutely! We work with various budgets and will provide solutions that maximize value while achieving your design goals.'
              },
              {
                question: 'Do you offer post-completion support?',
                answer: 'Yes, we provide maintenance guidelines, warranty support, and are available for any adjustments or questions after project completion.'
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6 border-0 shadow-lg">
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
