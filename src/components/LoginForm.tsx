
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from 'sonner';

const LoginForm = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    email: '',
    password: '',
    loading: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setFormState(prev => ({ ...prev, loading: true }));

    try {
      // Simulate login success for demo purposes
      // In a real implementation, you would make an API call here
      setTimeout(() => {
        toast.success("Login successful!");
        navigate("/dashboard");
      }, 1000);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Login failed");
    } finally {
      setFormState(prev => ({ ...prev, loading: false }));
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
        <CardDescription className="text-center">
          Enter your credentials to access the Medical Nexus Portal
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email"
              name="email"
              type="email"
              placeholder="doctor@example.com"
              required
              value={formState.email}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input 
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              required
              value={formState.password}
              onChange={handleChange}
            />
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full" 
          type="submit" 
          disabled={formState.loading}
          onClick={handleSubmit}
        >
          {formState.loading ? "Logging in..." : "Login"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
