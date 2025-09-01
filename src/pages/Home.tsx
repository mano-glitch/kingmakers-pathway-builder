import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Users, 
  Award, 
  TrendingUp, 
  CheckCircle, 
  Star,
  Download,
  Play,
  ArrowRight,
  Target,
  Clock,
  Trophy,
  Lightbulb
} from "lucide-react";
import heroImage from "@/assets/hero-banking.jpg";

const Home = () => {
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
      icon: TrendingUp,
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 hero-gradient opacity-90"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              Kingmakers School of Banking
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-banking-light">
              Your Gateway to Banking Careers
            </p>
            <p className="text-lg md:text-xl mb-8 text-banking-light max-w-2xl mx-auto">
              Expert Coaching for IBPS, SBI, RBI & NABARD Exams with Proven Results and Personalized Mentorship
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="accent-gradient font-semibold text-lg px-8 py-3 hover:shadow-accent">
                <Play className="mr-2 h-5 w-5" />
                Book a Free Demo Class
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary font-semibold text-lg px-8 py-3">
                <Download className="mr-2 h-5 w-5" />
                Download Syllabus PDF
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center text-white">
                <div className="text-2xl md:text-3xl font-bold text-banking-gold">{stat.number}</div>
                <div className="text-sm text-banking-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight Exams Section */}
      <section className="py-20 bg-banking-light/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-primary">
              Banking Exams We Cover
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive coaching programs for all major banking examinations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {examCards.map((exam, index) => (
              <Card key={index} className="group hover-lift shadow-card hover:shadow-hover transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{exam.icon}</div>
                  <h3 className="text-xl font-heading font-semibold mb-2 text-primary">{exam.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{exam.subtitle}</p>
                  <ul className="space-y-1 mb-6">
                    {exam.exams.map((examName, idx) => (
                      <li key={idx} className="text-sm text-foreground">{examName}</li>
                    ))}
                  </ul>
                  <Link to={exam.path}>
                    <Button className="w-full group-hover:accent-gradient transition-smooth">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-primary">
              Why Choose Kingmakers?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide everything you need to succeed in your banking career
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-smooth">
                  <feature.icon className="h-8 w-8 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-banking-light/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-primary">
              Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from our successful students who achieved their banking dreams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-banking-gold fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {testimonial.image}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-banking-gold">{testimonial.position}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-primary">
                Our Coaching Features
              </h2>
              <div className="space-y-4">
                {[
                  "Daily Classes (2-3 hours) with expert faculty",
                  "Weekly Mock Tests with detailed analysis",
                  "Monthly Current Affairs Magazine",
                  "Personalized Mentorship and doubt solving",
                  "Comprehensive Study Material & E-books",
                  "Video Lectures for revision and practice",
                  "Sectional Tests & Full-Length Tests",
                  "24/7 Online Doubt-Solving Forums"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-banking-gold flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-primary/10 p-6 rounded-lg text-center">
                  <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-primary">90% Syllabus</h3>
                  <p className="text-sm text-muted-foreground">Coverage in 2 months</p>
                </div>
                <div className="bg-banking-gold/10 p-6 rounded-lg text-center">
                  <Clock className="h-8 w-8 text-banking-gold mx-auto mb-2" />
                  <h3 className="font-semibold text-banking-gold">Flexible Timing</h3>
                  <p className="text-sm text-muted-foreground">Online + Offline</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-banking-gold/10 p-6 rounded-lg text-center">
                  <Trophy className="h-8 w-8 text-banking-gold mx-auto mb-2" />
                  <h3 className="font-semibold text-banking-gold">Top Experts</h3>
                  <p className="text-sm text-muted-foreground">India's best faculty</p>
                </div>
                <div className="bg-primary/10 p-6 rounded-lg text-center">
                  <Lightbulb className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-primary">Bilingual</h3>
                  <p className="text-sm text-muted-foreground">English & Hindi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Start Your Banking Career?
          </h2>
          <p className="text-xl mb-8 text-banking-light max-w-2xl mx-auto">
            Join thousands of successful students who cracked their dream banking exams with Kingmakers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="accent-gradient font-semibold text-lg px-8 py-3 hover:shadow-accent">
              Enroll Now & Crack Your Dream Banking Exam!
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary font-semibold text-lg px-8 py-3">
              Download Free Study Material
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;