
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const PRDDocument = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Product Requirements Document
          </h1>
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">MVL Interio Website</h2>
          <p className="text-lg text-gray-600">Premium UI/UX Development & Deployment Strategy</p>
          <div className="flex justify-center gap-4 mt-6">
            <Badge variant="secondary" className="px-4 py-2">Version 1.0</Badge>
            <Badge variant="outline" className="px-4 py-2">High Priority</Badge>
            <Badge className="px-4 py-2">Deployment Ready</Badge>
          </div>
        </div>

        {/* Executive Summary */}
        <Card className="mb-8 shadow-lg border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-700">Executive Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              MVL Interio requires a premium website that positions the brand as a leader in luxury interior design 
              within the Vishakhapatnam market. The solution must deliver exceptional UI/UX that reflects the 
              sophistication of high-end interior design services while maintaining optimal performance and accessibility.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800">Brand Position</h4>
                <p className="text-sm text-blue-600">Premium Interior Design</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800">Target Market</h4>
                <p className="text-sm text-purple-600">Vishakhapatnam & Region</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800">Timeline</h4>
                <p className="text-sm text-green-600">Deployment Ready</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Project Objectives */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-green-700">Project Objectives</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Primary Goals</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    Establish premium digital presence reflecting luxury positioning
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    Create intuitive portfolio showcase with advanced filtering
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    Implement seamless consultation booking experience
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    Optimize for local SEO and Vishakhapatnam market visibility
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Success Metrics</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    Page load speed &lt; 3 seconds across all devices
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    WCAG 2.1 AA accessibility compliance
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    95+ Google PageSpeed Insights score
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    Mobile-first responsive design excellence
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* User Personas & Journey Mapping */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-700">User Personas & Journey Mapping</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Primary Persona */}
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-3">Primary: Luxury Homeowner</h4>
                <div className="space-y-2 text-sm">
                  <p><strong>Age:</strong> 35-55</p>
                  <p><strong>Income:</strong> ₹15L+ annually</p>
                  <p><strong>Goals:</strong> Premium interior transformation</p>
                  <p><strong>Pain Points:</strong> Finding trusted, sophisticated designers</p>
                </div>
                <div className="mt-4">
                  <h5 className="font-medium text-purple-700 mb-2">User Journey:</h5>
                  <ol className="text-xs space-y-1">
                    <li>1. Discovers via search/referral</li>
                    <li>2. Explores portfolio extensively</li>
                    <li>3. Reviews testimonials & credentials</li>
                    <li>4. Books consultation</li>
                  </ol>
                </div>
              </div>

              {/* Secondary Persona */}
              <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-3">Secondary: Commercial Client</h4>
                <div className="space-y-2 text-sm">
                  <p><strong>Type:</strong> Office/Retail/Hospitality</p>
                  <p><strong>Budget:</strong> ₹5L-50L projects</p>
                  <p><strong>Goals:</strong> Professional space design</p>
                  <p><strong>Pain Points:</strong> Timeline & budget certainty</p>
                </div>
                <div className="mt-4">
                  <h5 className="font-medium text-green-700 mb-2">User Journey:</h5>
                  <ol className="text-xs space-y-1">
                    <li>1. Searches for commercial expertise</li>
                    <li>2. Reviews commercial portfolio</li>
                    <li>3. Evaluates process & timeline</li>
                    <li>4. Requests detailed proposal</li>
                  </ol>
                </div>
              </div>

              {/* Tertiary Persona */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-3">Tertiary: Design Enthusiast</h4>
                <div className="space-y-2 text-sm">
                  <p><strong>Age:</strong> 25-40</p>
                  <p><strong>Intent:</strong> Inspiration & future planning</p>
                  <p><strong>Goals:</strong> Design ideas & trend awareness</p>
                  <p><strong>Pain Points:</strong> Information accessibility</p>
                </div>
                <div className="mt-4">
                  <h5 className="font-medium text-orange-700 mb-2">User Journey:</h5>
                  <ol className="text-xs space-y-1">
                    <li>1. Discovers via social/content</li>
                    <li>2. Browses design inspiration</li>
                    <li>3. Engages with content</li>
                    <li>4. Subscribes for updates</li>
                  </ol>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Functional Requirements */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-indigo-700">Functional Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Core Features</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-l-indigo-500 pl-4">
                    <h5 className="font-medium text-indigo-700">Premium Portfolio Showcase</h5>
                    <ul className="text-sm text-gray-600 mt-1 space-y-1">
                      <li>• Advanced filtering (Residential/Commercial/Style/Budget)</li>
                      <li>• High-resolution image galleries with zoom</li>
                      <li>• Before/after project comparisons</li>
                      <li>• Project timeline & cost range display</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-l-purple-500 pl-4">
                    <h5 className="font-medium text-purple-700">Consultation Booking System</h5>
                    <ul className="text-sm text-gray-600 mt-1 space-y-1">
                      <li>• Multi-step booking wizard with progress indicator</li>
                      <li>• Calendar integration with available slots</li>
                      <li>• Project requirement collection form</li>
                      <li>• Automated confirmation & reminder system</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-l-green-500 pl-4">
                    <h5 className="font-medium text-green-700">Service Pages</h5>
                    <ul className="text-sm text-gray-600 mt-1 space-y-1">
                      <li>• Detailed service descriptions with visual examples</li>
                      <li>• Process walkthrough with timeline</li>
                      <li>• Pricing transparency with package options</li>
                      <li>• FAQ sections for each service category</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Advanced Features</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-l-blue-500 pl-4">
                    <h5 className="font-medium text-blue-700">Content Management</h5>
                    <ul className="text-sm text-gray-600 mt-1 space-y-1">
                      <li>• Custom WordPress admin with brand styling</li>
                      <li>• Drag-and-drop portfolio management</li>
                      <li>• SEO optimization tools integration</li>
                      <li>• Real-time preview functionality</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-l-orange-500 pl-4">
                    <h5 className="font-medium text-orange-700">User Experience Enhancement</h5>
                    <ul className="text-sm text-gray-600 mt-1 space-y-1">
                      <li>• Intelligent search with predictive suggestions</li>
                      <li>• Breadcrumb navigation for complex sections</li>
                      <li>• Related project recommendations</li>
                      <li>• Progressive image loading optimization</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-l-teal-500 pl-4">
                    <h5 className="font-medium text-teal-700">Brand Integration</h5>
                    <ul className="text-sm text-gray-600 mt-1 space-y-1">
                      <li>• MVL brand family cross-linking</li>
                      <li>• Consistent visual identity system</li>
                      <li>• Custom iconography library</li>
                      <li>• Brand story & heritage showcase</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technical Requirements */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-red-700">Technical Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-3">Performance Standards</h4>
                <ul className="text-sm space-y-2">
                  <li>• Page load speed &lt; 3 seconds</li>
                  <li>• Google PageSpeed Score 95+</li>
                  <li>• Lighthouse Performance 95+</li>
                  <li>• Core Web Vitals optimization</li>
                  <li>• Image optimization & lazy loading</li>
                  <li>• CDN implementation</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-3">Responsive Design</h4>
                <ul className="text-sm space-y-2">
                  <li>• Mobile-first approach</li>
                  <li>• Breakpoints: 320px, 768px, 1024px, 1440px</li>
                  <li>• Touch-optimized interactions</li>
                  <li>• Retina display support</li>
                  <li>• Flexible grid system (8px/16px)</li>
                  <li>• Device-specific UI adaptations</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-3">SEO & Accessibility</h4>
                <ul className="text-sm space-y-2">
                  <li>• WCAG 2.1 AA compliance</li>
                  <li>• Semantic HTML structure</li>
                  <li>• Schema markup implementation</li>
                  <li>• Local SEO optimization</li>
                  <li>• OpenGraph & Twitter Cards</li>
                  <li>• Sitemap & robots.txt</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Design System Specifications */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-yellow-700">Design System Specifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Visual Design Standards</h4>
                <div className="space-y-4">
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h5 className="font-medium text-yellow-800 mb-2">Color Palette</h5>
                    <div className="grid grid-cols-4 gap-2 mb-2">
                      <div className="h-8 bg-blue-600 rounded"></div>
                      <div className="h-8 bg-blue-100 rounded"></div>
                      <div className="h-8 bg-gray-800 rounded"></div>
                      <div className="h-8 bg-gray-100 rounded"></div>
                    </div>
                    <p className="text-xs text-yellow-700">Primary: Blue shades, Neutral: Gray scale, Accent: Gold/Bronze</p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-medium text-purple-800 mb-2">Typography</h5>
                    <p className="text-xs text-purple-700 mb-1">Primary: Inter/Poppins (Modern, Clean)</p>
                    <p className="text-xs text-purple-700">Secondary: Playfair Display (Elegant, Headlines)</p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-medium text-green-800 mb-2">Spacing System</h5>
                    <p className="text-xs text-green-700">Base unit: 8px, Scale: 8, 16, 24, 32, 48, 64, 96px</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Interactive Elements</h4>
                <div className="space-y-4">
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h5 className="font-medium text-indigo-800 mb-2">Micro-interactions</h5>
                    <ul className="text-xs text-indigo-700 space-y-1">
                      <li>• Hover states with 0.3s easing transitions</li>
                      <li>• Loading states with skeleton screens</li>
                      <li>• Form validation with inline feedback</li>
                      <li>• Progress indicators for multi-step processes</li>
                    </ul>
                  </div>

                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h5 className="font-medium text-teal-800 mb-2">Animation Guidelines</h5>
                    <ul className="text-xs text-teal-700 space-y-1">
                      <li>• Subtle parallax on hero sections</li>
                      <li>• Fade-in animations on scroll</li>
                      <li>• Smooth page transitions</li>
                      <li>• Respect prefers-reduced-motion</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h5 className="font-medium text-orange-800 mb-2">Component Library</h5>
                    <ul className="text-xs text-orange-700 space-y-1">
                      <li>• Custom buttons with multiple variants</li>
                      <li>• Form components with validation states</li>
                      <li>• Card layouts for portfolio items</li>
                      <li>• Navigation components with active states</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Content Strategy */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-cyan-700">Content Strategy & Information Architecture</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="bg-cyan-50 p-6 rounded-lg">
                <h4 className="font-semibold text-cyan-800 mb-4">Site Structure</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-700 mb-3">Primary Navigation</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Home (Hero + Featured Projects)</li>
                      <li>• Portfolio (Advanced Filtering)</li>
                      <li>• Services (Detailed Offerings)</li>
                      <li>• About (Brand Story + Team)</li>
                      <li>• Process (Design Journey)</li>
                      <li>• Contact (Consultation Booking)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-700 mb-3">Secondary Pages</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Individual Project Case Studies</li>
                      <li>• Service Category Deep Dives</li>
                      <li>• Design Blog/Insights</li>
                      <li>• Client Testimonials</li>
                      <li>• MVL Brand Family Links</li>
                      <li>• Privacy Policy & Terms</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg">
                  <h5 className="font-medium text-blue-800 mb-2">SEO Content Strategy</h5>
                  <ul className="text-xs text-blue-700 space-y-1">
                    <li>• Target: "Interior Designer Vishakhapatnam"</li>
                    <li>• Long-tail: "Luxury home interiors AP"</li>
                    <li>• Local: "Best interior design Vizag"</li>
                    <li>• Service-based: "Modular kitchen design"</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg">
                  <h5 className="font-medium text-purple-800 mb-2">Content Pillars</h5>
                  <ul className="text-xs text-purple-700 space-y-1">
                    <li>• Design Excellence & Innovation</li>
                    <li>• Local Market Expertise</li>
                    <li>• Premium Quality & Materials</li>
                    <li>• Client Success Stories</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-teal-50 p-4 rounded-lg">
                  <h5 className="font-medium text-green-800 mb-2">Brand Messaging</h5>
                  <ul className="text-xs text-green-700 space-y-1">
                    <li>• "Transforming Spaces, Elevating Lives"</li>
                    <li>• Heritage of MVL brand trust</li>
                    <li>• Local expertise, global standards</li>
                    <li>• Bespoke solutions for every client</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Implementation Timeline */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-pink-700">Implementation Timeline & Deliverables</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid lg:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-pink-800 mb-2">Phase 1: Foundation</h5>
                  <p className="text-xs text-pink-700 mb-2">Week 1-2</p>
                  <ul className="text-xs text-pink-600 space-y-1">
                    <li>• Design system creation</li>
                    <li>• WordPress setup & configuration</li>
                    <li>• Basic page structure</li>
                    <li>• Responsive framework</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-800 mb-2">Phase 2: Core Features</h5>
                  <p className="text-xs text-blue-700 mb-2">Week 3-4</p>
                  <ul className="text-xs text-blue-600 space-y-1">
                    <li>• Portfolio showcase development</li>
                    <li>• Booking system integration</li>
                    <li>• Service pages creation</li>
                    <li>• Custom admin interface</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-purple-800 mb-2">Phase 3: Enhancement</h5>
                  <p className="text-xs text-purple-700 mb-2">Week 5-6</p>
                  <ul className="text-xs text-purple-600 space-y-1">
                    <li>• Advanced interactions</li>
                    <li>• SEO optimization</li>
                    <li>• Performance tuning</li>
                    <li>• Content migration</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-green-800 mb-2">Phase 4: Deployment</h5>
                  <p className="text-xs text-green-700 mb-2">Week 7-8</p>
                  <ul className="text-xs text-green-600 space-y-1">
                    <li>• Final testing & QA</li>
                    <li>• Performance validation</li>
                    <li>• Go-live preparation</li>
                    <li>• Documentation delivery</li>
                  </ul>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Final Deliverables Package</h4>
                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h5 className="font-medium text-gray-700">Technical Deliverables</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>✓ Complete WordPress installation with custom theme</li>
                      <li>✓ Custom admin dashboard with brand styling</li>
                      <li>✓ All source files (PSD/Sketch/Figma)</li>
                      <li>✓ Component library documentation</li>
                      <li>✓ Deployment scripts and instructions</li>
                      <li>✓ Performance optimization report</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h5 className="font-medium text-gray-700">Documentation Package</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>✓ User journey maps and wireframes</li>
                      <li>✓ Design system style guide</li>
                      <li>✓ Content management guidelines</li>
                      <li>✓ SEO optimization checklist</li>
                      <li>✓ Maintenance and update procedures</li>
                      <li>✓ Analytics and tracking setup guide</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Risk Assessment */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-amber-700">Risk Assessment & Mitigation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Potential Risks</h4>
                <div className="space-y-3">
                  <div className="border border-red-200 bg-red-50 p-3 rounded-lg">
                    <h5 className="font-medium text-red-800 text-sm">High: Performance Impact</h5>
                    <p className="text-xs text-red-700">Premium visuals may impact load times</p>
                  </div>
                  <div className="border border-orange-200 bg-orange-50 p-3 rounded-lg">
                    <h5 className="font-medium text-orange-800 text-sm">Medium: Content Migration</h5>
                    <p className="text-xs text-orange-700">Existing content formatting challenges</p>
                  </div>
                  <div className="border border-yellow-200 bg-yellow-50 p-3 rounded-lg">
                    <h5 className="font-medium text-yellow-800 text-sm">Low: Browser Compatibility</h5>
                    <p className="text-xs text-yellow-700">Advanced CSS features support</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Mitigation Strategies</h4>
                <div className="space-y-3">
                  <div className="border border-green-200 bg-green-50 p-3 rounded-lg">
                    <h5 className="font-medium text-green-800 text-sm">Performance Optimization</h5>
                    <p className="text-xs text-green-700">Progressive loading, CDN, image optimization</p>
                  </div>
                  <div className="border border-blue-200 bg-blue-50 p-3 rounded-lg">
                    <h5 className="font-medium text-blue-800 text-sm">Content Strategy</h5>
                    <p className="text-xs text-blue-700">Structured migration plan with testing phases</p>
                  </div>
                  <div className="border border-purple-200 bg-purple-50 p-3 rounded-lg">
                    <h5 className="font-medium text-purple-800 text-sm">Progressive Enhancement</h5>
                    <p className="text-xs text-purple-700">Graceful degradation for older browsers</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Success Criteria */}
        <Card className="shadow-lg border-t-4 border-t-green-500">
          <CardHeader>
            <CardTitle className="text-2xl text-green-700">Success Criteria & KPIs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-3">Technical Metrics</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex justify-between">
                    <span>Page Load Speed</span>
                    <Badge variant="outline">&lt; 3s</Badge>
                  </li>
                  <li className="flex justify-between">
                    <span>Lighthouse Score</span>
                    <Badge variant="outline">95+</Badge>
                  </li>
                  <li className="flex justify-between">
                    <span>Accessibility</span>
                    <Badge variant="outline">WCAG AA</Badge>
                  </li>
                  <li className="flex justify-between">
                    <span>Mobile Responsiveness</span>
                    <Badge variant="outline">100%</Badge>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-3">Business Metrics</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex justify-between">
                    <span>Consultation Bookings</span>
                    <Badge variant="outline">+150%</Badge>
                  </li>
                  <li className="flex justify-between">
                    <span>Time on Site</span>
                    <Badge variant="outline">+200%</Badge>
                  </li>
                  <li className="flex justify-between">
                    <span>Portfolio Engagement</span>
                    <Badge variant="outline">+300%</Badge>
                  </li>
                  <li className="flex justify-between">
                    <span>Local Search Ranking</span>
                    <Badge variant="outline">Top 3</Badge>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-3">User Experience</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex justify-between">
                    <span>User Satisfaction</span>
                    <Badge variant="outline">95%+</Badge>
                  </li>
                  <li className="flex justify-between">
                    <span>Task Completion</span>
                    <Badge variant="outline">90%+</Badge>
                  </li>
                  <li className="flex justify-between">
                    <span>Return Visitors</span>
                    <Badge variant="outline">+100%</Badge>
                  </li>
                  <li className="flex justify-between">
                    <span>Brand Perception</span>
                    <Badge variant="outline">Premium</Badge>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600">
            This PRD serves as the comprehensive blueprint for MVL Interio's premium website development,
            ensuring all stakeholders align on requirements, expectations, and success criteria.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <Badge variant="secondary">Document Version 1.0</Badge>
            <Badge variant="outline">Ready for Implementation</Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PRDDocument;
