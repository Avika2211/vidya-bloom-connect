import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  User, 
  BookOpen, 
  Calendar, 
  MessageCircle,
  TrendingUp,
  Award,
  LogOut,
  Target,
  Heart,
  Lightbulb
} from "lucide-react";
import { Link } from "react-router-dom";

const StudentDashboard = () => {
  const attendanceData = [
    { subject: "Mathematics", attendance: 92, grade: "A-" },
    { subject: "Science", attendance: 88, grade: "B+" },
    { subject: "English", attendance: 95, grade: "A" },
    { subject: "History", attendance: 85, grade: "B" },
  ];

  const counselingSuggestions = [
    {
      title: "Time Management Workshop",
      description: "Learn effective study techniques and scheduling",
      type: "workshop",
      urgency: "recommended"
    },
    {
      title: "Stress Management Resources",
      description: "Helpful techniques for managing academic pressure",
      type: "resource",
      urgency: "important"
    },
    {
      title: "Career Guidance Session",
      description: "Explore your interests and future career paths",
      type: "session",
      urgency: "optional"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-soft">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Welcome back, Alex!</h1>
                <p className="text-sm text-muted-foreground">Your Learning Journey</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <MessageCircle className="w-4 h-4 mr-2" />
                Help
              </Button>
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Progress Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Overall Progress</p>
                  <p className="text-3xl font-bold text-success">89%</p>
                </div>
                <TrendingUp className="w-8 h-8 text-success" />
              </div>
              <Progress value={89} className="mt-3" />
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Attendance</p>
                  <p className="text-3xl font-bold text-foreground">92%</p>
                </div>
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <Progress value={92} className="mt-3" />
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Grade Average</p>
                  <p className="text-3xl font-bold text-foreground">B+</p>
                </div>
                <Award className="w-8 h-8 text-accent" />
              </div>
              <div className="mt-3">
                <span className="text-sm text-success">+0.3 GPA</span>
                <span className="text-sm text-muted-foreground ml-1">this month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Risk Level</p>
                  <Badge variant="default" className="mt-1">Low Risk</Badge>
                </div>
                <Heart className="w-8 h-8 text-success" />
              </div>
              <p className="text-sm text-muted-foreground mt-2">Great job staying on track!</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Subject Performance */}
          <div className="lg:col-span-2">
            <Card className="shadow-card mb-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Subject Performance
                </CardTitle>
                <CardDescription>Your progress across all subjects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {attendanceData.map((subject, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-foreground">{subject.subject}</h4>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline">{subject.grade}</Badge>
                          <span className="text-sm text-muted-foreground">{subject.attendance}%</span>
                        </div>
                      </div>
                      <Progress value={subject.attendance} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Motivational Section */}
            <Card className="shadow-card bg-gradient-subtle">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2" />
                  Your Goals This Month
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-card">
                    <h4 className="font-medium text-foreground mb-2">Attendance Goal</h4>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-success">95%</span>
                      <span className="text-sm text-muted-foreground">3% to go</span>
                    </div>
                    <Progress value={92} className="mt-2" />
                  </div>
                  <div className="p-4 rounded-lg bg-card">
                    <h4 className="font-medium text-foreground mb-2">Grade Target</h4>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">A-</span>
                      <span className="text-sm text-muted-foreground">Almost there!</span>
                    </div>
                    <Progress value={85} className="mt-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Counseling & Support */}
          <div>
            <Card className="shadow-card mb-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lightbulb className="w-5 h-5 mr-2" />
                  Personalized Suggestions
                </CardTitle>
                <CardDescription>Resources tailored just for you</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {counselingSuggestions.map((suggestion, index) => (
                    <div key={index} className="p-4 rounded-lg bg-muted/30 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-medium text-foreground text-sm">{suggestion.title}</h4>
                        <Badge 
                          variant={
                            suggestion.urgency === 'important' ? 'destructive' : 
                            suggestion.urgency === 'recommended' ? 'default' : 'secondary'
                          }
                          className="text-xs"
                        >
                          {suggestion.urgency}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{suggestion.description}</p>
                      <Button size="sm" variant="outline" className="w-full">
                        Learn More
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* AI Chatbot */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  AI Support Assistant
                </CardTitle>
                <CardDescription>Get instant help and guidance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-lg bg-gradient-warm/10 border border-primary/20">
                  <p className="text-sm text-foreground mb-2">
                    <strong>AI Assistant:</strong> Hi Alex! I noticed you've been doing great in English. 
                    Would you like some tips to improve your Math performance?
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">Yes, help me</Button>
                    <Button size="sm" variant="ghost">Maybe later</Button>
                  </div>
                </div>
                
                <Button className="w-full" variant="student">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Start New Conversation
                </Button>
                
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">
                    Available 24/7 • Confidential & Supportive
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;