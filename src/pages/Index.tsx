
import { useState } from 'react';
import RegistrationForm from '../components/RegistrationForm';
import LoginForm from '../components/LoginForm';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white p-4">
      <div className="w-full max-w-4xl">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">Medical Nexus Portal</h1>
          <p className="text-gray-600">The professional network for healthcare providers</p>
        </div>
        
        <Tabs defaultValue="login" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
            <TabsTrigger value="features">EHR Features</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login" className="flex justify-center">
            <LoginForm />
          </TabsContent>
          
          <TabsContent value="register" className="flex justify-center">
            <RegistrationForm />
          </TabsContent>
          
          <TabsContent value="features">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">Electronic Health Record Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FeatureCard 
                  title="Patient Records" 
                  description="Secure electronic storage for patient medical histories, diagnoses, and treatment plans."
                  icon="📋"
                />
                <FeatureCard 
                  title="Prescription Management" 
                  description="Digital prescription writing and medication tracking system."
                  icon="💊"
                />
                <FeatureCard 
                  title="Appointment Scheduling" 
                  description="Calendar integration for patient appointments and reminders."
                  icon="📅"
                />
                <FeatureCard 
                  title="Lab Results" 
                  description="Integration with laboratory systems for test result reporting."
                  icon="🔬"
                />
                <FeatureCard 
                  title="Billing & Insurance" 
                  description="Streamlined medical billing and insurance claim processing."
                  icon="💰"
                />
                <FeatureCard 
                  title="Secure Messaging" 
                  description="HIPAA-compliant communication between healthcare providers."
                  icon="✉️"
                />
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">Join our network to access these features and more</p>
                <div className="flex justify-center space-x-4">
                  <button 
                    onClick={() => setActiveTab("login")}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Login
                  </button>
                  <button 
                    onClick={() => setActiveTab("register")}
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>This platform connects to a secure ASP.NET Core backend for electronic health records management.</p>
          <p className="mt-2">© {new Date().getFullYear()} Medical Nexus Portal. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

// Feature card component for displaying EHR features
const FeatureCard = ({ title, description, icon }: { title: string; description: string; icon: string }) => {
  return (
    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 hover:shadow-md transition-shadow">
      <div className="text-3xl mb-2">{icon}</div>
      <h3 className="font-bold text-blue-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default Index;
