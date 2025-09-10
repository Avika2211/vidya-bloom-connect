import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, BarChart3, HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";
const heroImage = "/lovable-uploads/7bb9a39b-3e06-4024-9271-c5d6e618a802.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">VidyaGrid</h1>
              <p className="text-sm text-muted-foreground">Supporting Every Learner</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-5xl font-bold text-foreground leading-tight mb-6">
                Empowering Students,
                <span className="bg-gradient-hero bg-clip-text text-transparent"> Enabling Success</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                VidyaGrid helps schools and students stay connected, track academic progress, 
                and receive personalized counseling using AI-driven insights — for brighter 
                futures and stronger communities.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/login?type=admin">
                <Button variant="admin" size="lg" className="w-full sm:w-auto group">
                  Admin Login
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/login?type=student">
                <Button variant="student" size="lg" className="w-full sm:w-auto group">
                  Student Login
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-hero rounded-3xl blur-2xl opacity-20 animate-gentle-bounce"></div>
            <img 
              src={heroImage} 
              alt="Students learning together in a supportive environment"
              className="relative w-full h-auto rounded-3xl shadow-warm"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          <Card className="p-8 text-center shadow-card hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">AI-Driven Insights</h3>
            <p className="text-muted-foreground leading-relaxed">
              Advanced analytics help identify at-risk students early and provide 
              actionable recommendations for intervention.
            </p>
          </Card>

          <Card className="p-8 text-center shadow-card hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
              <HeartHandshake className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Personalized Counseling</h3>
            <p className="text-muted-foreground leading-relaxed">
              Every student receives tailored guidance and support resources 
              based on their unique needs and circumstances.
            </p>
          </Card>

          <Card className="p-8 text-center shadow-card hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Connected Communities</h3>
            <p className="text-muted-foreground leading-relaxed">
              Building stronger relationships between students, educators, 
              and families for comprehensive support networks.
            </p>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-24">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-foreground">VidyaGrid</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Transforming education through compassionate AI and data-driven insights.
              </p>
              <p className="text-sm text-muted-foreground">
                © 2024 VidyaGrid. All rights reserved.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/about" className="block text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
                <Link to="/privacy" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>support@vidyagrid.com</p>
                <p>+1 (555) 123-4567</p>
                <p>Available 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;