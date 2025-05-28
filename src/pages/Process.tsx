
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, Users, Palette, Hammer, Star } from 'lucide-react';

const Process = () => {
  const phases = [
    {
      phase: 'Phase 1',
      title: 'Discovery & Consultation',
      duration: '1-2 weeks',
      description: 'Understanding your vision, lifestyle, and requirements',
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      steps: [
        'Initial consultation meeting',
        'Site visit and measurements',
        'Lifestyle and preference analysis',
        'Budget discussion and planning',
        'Project timeline establishment',
        'Design brief finalization'
      ],
      deliverables: [
        'Detailed project brief',
        'Site survey report',
        'Preliminary timeline',
        'Cost estimation range'
      ]
    },
    {
      phase: 'Phase 2',
      title: 'Concept Development',
      duration: '2-3 weeks',
      description: 'Creating initial concepts and mood boards',
      icon: Palette,
      color: 'from-purple-500 to-purple-600',
      steps: [
        'Space planning and layout options',
        'Mood board development',
        'Color palette selection',
        'Style and theme finalization',
        'Initial material selection',
        'Concept presentation'
      ],
      deliverables: [
        'Concept presentation',
        'Mood boards',
        'Floor plan options',
        'Material samples'
      ]
    },
    {
      phase: 'Phase 3',
      title: 'Design Development',
      duration: '3-4 weeks',
      description: 'Detailed design plans and 3D visualizations',
      icon: Palette,
      color: 'from-green-500 to-green-600',
      steps: [
        'Detailed floor plans',
        '3D modeling and rendering',
        'Material and finish selection',
        'Furniture and fixture specification',
        'Lighting design planning',
        'Technical drawings preparation'
      ],
      deliverables: [
        '3D renders and walkthroughs',
        'Detailed drawings',
        'Material specification sheets',
        'Furniture selection catalog'
      ]
    },
    {
      phase: 'Phase 4',
      title: 'Project Execution',
      duration: '4-12 weeks',
      description: 'Bringing the design to life with skilled craftsmanship',
      icon: Hammer,
      color: 'from-orange-500 to-orange-600',
      steps: [
        'Project kickoff meeting',
        'Material procurement',
        'Construction and installation',
        'Quality control checkpoints',
        'Progress updates and coordination',
        'Problem-solving and adjustments'
      ],
      deliverables: [
        'Regular progress reports',
        'Quality checkpoints',
        'Installation coordination',
        'Change order management'
      ]
    },
    {
      phase: 'Phase 5',
      title: 'Completion & Handover',
      duration: '1 week',
      description: 'Final touches and project delivery',
      icon: Star,
      color: 'from-yellow-500 to-yellow-600',
      steps: [
        'Final installation and styling',
        'Quality inspection',
        'Client walkthrough',
        'Touch-up and adjustments',
        'Documentation handover',
        'Maintenance guidelines'
      ],
      deliverables: [
        'Final walkthrough',
        'Maintenance guide',
        'Warranty documentation',
        'Professional photography'
      ]
    }
  ];

  const timeline = [
    { milestone: 'Project Start', week: 0 },
    { milestone: 'Concept Approval', week: 3 },
    { milestone: 'Design Approval', week: 7 },
    { milestone: 'Construction Start', week: 8 },
    { milestone: 'Mid-point Review', week: 14 },
    { milestone: 'Final Completion', week: 20 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Our Design Process
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            A proven methodology that ensures exceptional results through careful planning, 
            collaborative design, and meticulous execution.
          </p>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              From Vision to Reality
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our 5-phase process ensures your project is delivered on time, within budget, 
              and exceeds your expectations at every step.
            </p>
          </div>

          <div className="space-y-16">
            {phases.map((phase, index) => (
              <div key={index} className="relative">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <div className={`order-${index % 2 === 0 ? '1' : '2'}`}>
                    <Card className="p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-r ${phase.color} rounded-full flex items-center justify-center`}>
                          <phase.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <Badge variant="secondary" className="mb-2">{phase.phase}</Badge>
                          <h3 className="text-2xl font-bold text-gray-900">{phase.title}</h3>
                          <p className="text-gray-600 flex items-center mt-1">
                            <Clock className="w-4 h-4 mr-2" />
                            {phase.duration}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-6">{phase.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Key Activities</h4>
                          <ul className="space-y-2">
                            {phase.steps.map((step, stepIndex) => (
                              <li key={stepIndex} className="flex items-start text-sm text-gray-600">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                {step}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Deliverables</h4>
                          <ul className="space-y-2">
                            {phase.deliverables.map((deliverable, delIndex) => (
                              <li key={delIndex} className="flex items-start text-sm text-gray-600">
                                <Star className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                                {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Card>
                  </div>
                  
                  <div className={`order-${index % 2 === 0 ? '2' : '1'}`}>
                    <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                      <img
                        src={`https://images.unsplash.com/photo-${index % 2 === 0 ? '1721322800607-8c38375eef04' : '1649972904349-6e44c42644a7'}?w=600&h=450&fit=crop`}
                        alt={phase.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                {index < phases.length - 1 && (
                  <div className="flex justify-center mt-8">
                    <div className="w-0.5 h-16 bg-gradient-to-b from-gray-300 to-gray-100"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Project Timeline
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A typical residential project timeline showing key milestones and checkpoints
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-8 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></div>
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
              {timeline.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white border-4 border-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                    <span className="text-blue-600 font-bold text-sm">W{item.week}</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">{item.milestone}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Quality Assurance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We maintain the highest standards through rigorous quality control at every stage
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center border-0 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Regular Inspections</h3>
              <p className="text-gray-600">
                Weekly quality checks and progress reviews to ensure standards are maintained throughout the project.
              </p>
            </Card>

            <Card className="p-6 text-center border-0 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Supervision</h3>
              <p className="text-gray-600">
                Experienced project managers and designers oversee every aspect of construction and installation.
              </p>
            </Card>

            <Card className="p-6 text-center border-0 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Client Approval</h3>
              <p className="text-gray-600">
                Regular client reviews and approvals at key milestones ensure your vision is being realized perfectly.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's begin with a consultation to understand your vision and show you how our proven process can transform your space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Book Consultation
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Download Process Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;
