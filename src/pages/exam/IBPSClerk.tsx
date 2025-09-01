import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Download, Play, BookOpen, Users, Award, Clock } from "lucide-react";

const IBPSClerk = () => {
  const eligibilityItems = [
    "Age Limit: 20-28 years",
    "Educational Qualification: Graduate in any discipline",
    "Nationality: Indian citizen",
    "Computer Knowledge: Basic computer skills required"
  ];

  const examPattern = [
    { stage: "Prelims", subjects: "English, Numerical Ability, Reasoning", duration: "1 hour", marks: "100" },
    { stage: "Mains", subjects: "Reasoning, Numerical Ability, English, General Awareness, Computer Knowledge", duration: "2 hours 40 minutes", marks: "200" }
  ];

  const syllabusTopics = [
    { subject: "English Language", topics: ["Reading Comprehension", "Grammar", "Vocabulary", "Sentence Completion"] },
    { subject: "Numerical Ability", topics: ["Number System", "Percentage", "Profit & Loss", "Data Interpretation"] },
    { subject: "Reasoning", topics: ["Logical Reasoning", "Seating Arrangement", "Coding-Decoding", "Puzzles"] },
    { subject: "General Awareness", topics: ["Current Affairs", "Banking Awareness", "Economy", "Government Schemes"] },
    { subject: "Computer Knowledge", topics: ["Basic Computer", "MS Office", "Internet", "Computer Abbreviations"] }
  ];

  const preparationTips = [
    "Create a structured study plan covering all subjects",
    "Practice mock tests regularly to improve speed and accuracy",
    "Focus on current affairs of last 6 months",
    "Strengthen basic mathematical concepts",
    "Practice English reading comprehension daily",
    "Stay updated with banking sector news"
  ];

  const coachingFeatures = [
    { icon: BookOpen, title: "Comprehensive Study Material", description: "Updated syllabus coverage with practice questions" },
    { icon: Users, title: "Expert Faculty Guidance", description: "Learn from experienced banking exam specialists" },
    { icon: Award, title: "Regular Mock Tests", description: "Weekly tests with detailed performance analysis" },
    { icon: Clock, title: "Flexible Batch Timings", description: "Morning, evening, and weekend batches available" }
  ];

  const successStories = [
    { name: "Rohit Sharma", result: "IBPS Clerk 2023", testimonial: "The mock tests and faculty support helped me clear the exam in first attempt." },
    { name: "Priya Singh", result: "IBPS Clerk 2023", testimonial: "Kingmakers' structured approach made my preparation very effective." }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-primary">
            IBPS Clerk Coaching
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Comprehensive coaching program for IBPS Clerk examination with expert faculty, 
            updated study material, and proven success strategies.
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

        {/* Why Choose IBPS Clerk */}
        <section className="mb-16">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl font-heading text-primary">Why Choose IBPS Clerk Exam?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Job security in public sector banks",
                  "Good salary and career growth opportunities",
                  "Various allowances and benefits",
                  "Opportunities in multiple banks across India",
                  "Work-life balance in banking sector",
                  "Prestigious career in financial services"
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
            Ready to Start Your IBPS Clerk Preparation?
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join our comprehensive IBPS Clerk coaching program and get closer to your banking career dream.
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

export default IBPSClerk;