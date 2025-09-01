import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Download, Play, BookOpen, Users, Award, Clock } from "lucide-react";

const IBPSPO = () => {
  const eligibilityItems = [
    "Age Limit: 20-30 years",
    "Educational Qualification: Graduate in any discipline",
    "Nationality: Indian citizen",
    "Computer Knowledge: Basic computer skills required"
  ];

  const examPattern = [
    { stage: "Prelims", subjects: "English, Quantitative Aptitude, Reasoning", duration: "1 hour", marks: "100" },
    { stage: "Mains", subjects: "Reasoning, Data Analysis, General Awareness, English, Computer Knowledge", duration: "3 hours", marks: "200" },
    { stage: "Interview", subjects: "Personal Interview", duration: "20-30 minutes", marks: "100" }
  ];

  const syllabusTopics = [
    { subject: "English Language", topics: ["Reading Comprehension", "Para Jumbles", "Error Detection", "Fill in the Blanks"] },
    { subject: "Quantitative Aptitude", topics: ["Data Interpretation", "Number Series", "Quadratic Equations", "Approximation"] },
    { subject: "Reasoning", topics: ["Seating Arrangement", "Puzzles", "Direction Sense", "Blood Relations"] },
    { subject: "General Awareness", topics: ["Banking Awareness", "Current Affairs", "Economy", "Financial Markets"] },
    { subject: "Computer Knowledge", topics: ["Computer Basics", "Software & Hardware", "Internet", "MS Office"] }
  ];

  const preparationTips = [
    "Focus on conceptual understanding for quantitative aptitude",
    "Practice high-level reasoning puzzles regularly",
    "Read newspapers daily for current affairs",
    "Develop strong analytical and problem-solving skills",
    "Practice English comprehension with challenging passages",
    "Prepare for interview with mock sessions"
  ];

  const examCards = [
    {
      title: "IBPS",
      subtitle: "Institute of Banking Personnel Selection",
      exams: ["IBPS Clerk", "IBPS PO", "IBPS RRB"],
      icon: "🏦",
      path: "/ibps-clerk"
    },
    {
      title: "SBI",
      subtitle: "State Bank of India",
      exams: ["SBI PO", "SBI Clerk"],
      icon: "🏛️",
      path: "/sbi-po"
    },
    {
      title: "RBI",
      subtitle: "Reserve Bank of India",
      exams: ["RBI Grade B", "RBI Assistant"],
      icon: "🎯",
      path: "/rbi-grade-b"
    },
    {
      title: "NABARD",
      subtitle: "National Bank for Agriculture",
      exams: ["NABARD Grade A", "NABARD Grade B"],
      icon: "🌾",
      path: "/nabard"
    }
  ];

  const features = [
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Learn from India's top banking exam experts with 10+ years of experience"
    },
    {
      icon: BookOpen,
      title: "Updated Study Material",
      description: "Comprehensive study material updated according to latest exam patterns"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "90% success rate with over 5,000 successful banking professionals"
    },
    {
      icon: Clock,
      title: "Mock Tests",
      description: "Regular mock tests and performance analysis for continuous improvement"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      position: "SBI PO 2023",
      image: "PS",
      content: "Kingmakers coaching helped me crack SBI PO in my first attempt. The faculty support and study material were exceptional.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      position: "IBPS Clerk 2023",
      image: "RK",
      content: "The mock tests and personalized guidance made all the difference. Highly recommend Kingmakers for banking exam preparation.",
      rating: 5
    },
    {
      name: "Anjali Patel",
      position: "RBI Grade B 2023",
      image: "AP",
      content: "The comprehensive curriculum and doubt-solving sessions helped me achieve my dream of working in RBI.",
      rating: 5
    }
  ];

  const stats = [
    { number: "5000+", label: "Students Placed" },
    { number: "90%", label: "Success Rate" },
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Expert Faculty" }
  ];

  const coachingFeatures = [
    { icon: BookOpen, title: "Comprehensive Study Material", description: "Updated syllabus coverage with practice questions" },
    { icon: Users, title: "Expert Faculty Guidance", description: "Learn from experienced banking exam specialists" },
    { icon: Award, title: "Regular Mock Tests", description: "Weekly tests with detailed performance analysis" },
    { icon: Clock, title: "Flexible Batch Timings", description: "Morning, evening, and weekend batches available" }
  ];

  const successStories = [
    { name: "Rohit Sharma", result: "IBPS PO 2023", testimonial: "The mock tests and faculty support helped me clear the exam in first attempt." },
    { name: "Priya Singh", result: "IBPS PO 2023", testimonial: "Kingmakers' structured approach made my preparation very effective." }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-primary">
            IBPS PO Coaching
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Comprehensive coaching program for IBPS Probationary Officer examination with expert faculty, 
            advanced study material, and interview preparation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="accent-gradient font-semibold hover:shadow-accent">
              <Play className="mr-2 h-5 w-5" />
              Book a Free Demo Class
            </Button>
            <Button size="lg" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
              <Download className="mr-2 h-5 w-5" />
              Download Syllabus PDF
            </Button>
          </div>
        </section>

        {/* Why Choose IBPS PO */}
        <section className="mb-16">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl font-heading text-primary">Why Choose IBPS PO Exam?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Leadership position in public sector banks",
                  "Excellent salary package and career growth",
                  "Management responsibilities and decision-making authority",
                  "Opportunity to work across different banking divisions",
                  "Fast track career progression to senior positions",
                  "Social status and job security in banking sector"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-banking-gold flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Eligibility Criteria */}
        <section className="mb-16">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl font-heading text-primary">Eligibility Criteria</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {eligibilityItems.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Exam Pattern */}
        <section className="mb-16">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl font-heading text-primary">Exam Pattern</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-3 font-semibold">Stage</th>
                      <th className="text-left p-3 font-semibold">Subjects</th>
                      <th className="text-left p-3 font-semibold">Duration</th>
                      <th className="text-left p-3 font-semibold">Total Marks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {examPattern.map((pattern, index) => (
                      <tr key={index} className="border-b border-border">
                        <td className="p-3 font-medium text-primary">{pattern.stage}</td>
                        <td className="p-3">{pattern.subjects}</td>
                        <td className="p-3">{pattern.duration}</td>
                        <td className="p-3 font-semibold">{pattern.marks}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Syllabus Overview */}
        <section className="mb-16">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl font-heading text-primary">Syllabus Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {syllabusTopics.map((subject, index) => (
                  <div key={index} className="border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-primary mb-3">{subject.subject}</h4>
                    <ul className="space-y-1">
                      {subject.topics.map((topic, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <CheckCircle className="h-3 w-3 text-banking-gold mr-2 flex-shrink-0" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Preparation Tips */}
        <section className="mb-16">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl font-heading text-primary">Preparation Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {preparationTips.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-banking-gold flex-shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Our Coaching Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-center mb-8 text-primary">Our Coaching Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coachingFeatures.map((feature, index) => (
              <Card key={index} className="shadow-card hover-lift transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Course Structure */}
        <section className="mb-16">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl font-heading text-primary">Course Structure</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Daily Classes (2-3 hours)</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Subject-wise detailed coverage</li>
                    <li>• Interactive doubt-solving sessions</li>
                    <li>• Regular assignments and homework</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Weekly Mock Tests</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Full-length practice tests</li>
                    <li>• Sectional tests for each subject</li>
                    <li>• Detailed performance analysis</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Study Material Provided</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• E-books and printed handouts</li>
                    <li>• Video lectures for revision</li>
                    <li>• Current affairs monthly magazine</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Personalized Mentorship</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• One-on-one doubt sessions</li>
                    <li>• Individual performance tracking</li>
                    <li>• 24/7 online support forum</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Success Stories */}
        <section className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-center mb-8 text-primary">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {successStories.map((story, index) => (
              <Card key={index} className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {story.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{story.name}</h4>
                      <p className="text-sm text-banking-gold">{story.result}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">"{story.testimonial}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center bg-banking-light/30 rounded-2xl p-8">
          <h2 className="text-3xl font-heading font-bold mb-4 text-primary">
            Ready to Start Your IBPS PO Preparation?
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join our comprehensive IBPS PO coaching program and step into a leadership role in banking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="accent-gradient font-semibold hover:shadow-accent">
              Join Coaching Batch Today
            </Button>
            <Button size="lg" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
              Book a Free Demo Class
            </Button>
            <Button size="lg" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
              Download Syllabus PDF
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default IBPSPO;
