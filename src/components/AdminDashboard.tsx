import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  AlertTriangle, 
  TrendingUp, 
  Calendar,
  Bell,
  LogOut,
  BarChart3,
  MessageCircle,
  FileText,
  Settings
} from "lucide-react";
import { Link } from "react-router-dom";
import dashboardPreview from "@/assets/dashboard-preview.jpg";

const AdminDashboard = () => {
  const riskStudents = [
    { name: "Sarah Johnson", grade: "10th", risk: "High", lastActivity: "2 days ago" },
    { name: "Mike Chen", grade: "11th", risk: "Medium", lastActivity: "1 day ago" },
    { name: "Emma Davis", grade: "9th", risk: "High", lastActivity: "3 days ago" },
    { name: "James Wilson", grade: "12th", risk: "Low", lastActivity: "Today" },
  ];

  const notifications = [
    { type: "urgent", message: "3 students require immediate intervention", time: "5 min ago" },
    { type: "update", message: "Weekly progress report ready", time: "1 hour ago" },
    { type: "success", message: "Sarah J. attendance improved by 40%", time: "2 hours ago" },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-soft">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Admin Dashboard</h1>
                <p className="text-sm text-muted-foreground">Vidyagrid Management System</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4 mr-2" />
                3 Alerts
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
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
        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Students</p>
                  <p className="text-3xl font-bold text-foreground">1,247</p>
                </div>
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="mt-2">
                <span className="text-sm text-success">+2.5%</span>
                <span className="text-sm text-muted-foreground ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">At Risk</p>
                  <p className="text-3xl font-bold text-destructive">23</p>
                </div>
                <AlertTriangle className="w-8 h-8 text-destructive" />
              </div>
              <div className="mt-2">
                <span className="text-sm text-destructive">-8.2%</span>
                <span className="text-sm text-muted-foreground ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg Attendance</p>
                  <p className="text-3xl font-bold text-foreground">87.4%</p>
                </div>
                <TrendingUp className="w-8 h-8 text-success" />
              </div>
              <div className="mt-2">
                <span className="text-sm text-success">+5.1%</span>
                <span className="text-sm text-muted-foreground ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Success Rate</p>
                  <p className="text-3xl font-bold text-success">94.2%</p>
                </div>
                <Calendar className="w-8 h-8 text-success" />
              </div>
              <div className="mt-2">
                <span className="text-sm text-success">+1.8%</span>
                <span className="text-sm text-muted-foreground ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Priority Students */}
          <div className="lg:col-span-2">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-destructive" />
                  Priority Students
                </CardTitle>
                <CardDescription>Students requiring immediate attention</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {riskStudents.map((student, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-warm rounded-full flex items-center justify-center">
                          <Users className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{student.name}</h4>
                          <p className="text-sm text-muted-foreground">Grade {student.grade} • {student.lastActivity}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge variant={student.risk === 'High' ? 'destructive' : student.risk === 'Medium' ? 'secondary' : 'default'}>
                          {student.risk} Risk
                        </Badge>
                        <Button size="sm" variant="outline">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          Contact
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4" variant="outline">
                  View All Students
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Notifications */}
          <div>
            <Card className="shadow-card mb-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="w-5 h-5 mr-2" />
                  Recent Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notifications.map((notification, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/30">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        notification.type === 'urgent' ? 'bg-destructive' : 
                        notification.type === 'success' ? 'bg-success' : 'bg-primary'
                      }`} />
                      <div className="flex-1">
                        <p className="text-sm text-foreground">{notification.message}</p>
                        <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Generate Report
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <FileText className="w-4 h-4 mr-2" />
                  Export Data
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Send Bulk Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Analytics Preview */}
        <Card className="mt-8 shadow-card">
          <CardHeader>
            <CardTitle>Analytics Overview</CardTitle>
            <CardDescription>Comprehensive insights into student performance and trends</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <img 
                src={dashboardPreview} 
                alt="Dashboard Analytics Preview"
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-lg flex items-end">
                <Button className="m-6">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  View Detailed Analytics
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;