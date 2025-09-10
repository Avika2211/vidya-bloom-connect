import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Users, KeyRound, ArrowLeft } from "lucide-react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const userType = searchParams.get('type') || 'student';
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation for demo
    if (!formData.email || !formData.password) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Login Successful",
      description: `Welcome to your ${userType} dashboard!`,
    });

    // Navigate to appropriate dashboard
    if (userType === 'admin') {
      navigate('/admin-dashboard');
    } else {
      navigate('/student-dashboard');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Back to Home */}
        <Link 
          to="/" 
          className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <Card className="shadow-warm animate-scale-in">
          <CardHeader className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto">
              {userType === 'admin' ? (
                <KeyRound className="w-8 h-8 text-white" />
              ) : (
                <Users className="w-8 h-8 text-white" />
              )}
            </div>
            <div>
              <CardTitle className="text-2xl">
                {userType === 'admin' ? 'Admin Login' : 'Student Login'}
              </CardTitle>
              <CardDescription className="text-base">
                {userType === 'admin' 
                  ? 'Access your administrative dashboard' 
                  : 'Welcome back! Sign in to track your progress'
                }
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="transition-all focus:shadow-soft"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="transition-all focus:shadow-soft"
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <Link 
                  to="/forgot-password" 
                  className="text-primary hover:underline"
                >
                  Forgot your password?
                </Link>
                {userType === 'student' && (
                  <Link 
                    to="/register" 
                    className="text-primary hover:underline"
                  >
                    Create account
                  </Link>
                )}
              </div>

              <Button 
                type="submit" 
                variant={userType === 'admin' ? 'admin' : 'student'} 
                className="w-full" 
                size="lg"
              >
                Sign In
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-border text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Looking for a different login?
              </p>
              <div className="flex gap-2">
                <Link to="/login?type=student" className="flex-1">
                  <Button 
                    variant={userType === 'student' ? 'default' : 'outline'} 
                    className="w-full"
                  >
                    Student
                  </Button>
                </Link>
                <Link to="/login?type=admin" className="flex-1">
                  <Button 
                    variant={userType === 'admin' ? 'default' : 'outline'} 
                    className="w-full"
                  >
                    Admin
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Demo Info */}
        <Card className="mt-6 shadow-card">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground text-center">
              <strong>Demo Mode:</strong> Use any email and password to explore the platform
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;