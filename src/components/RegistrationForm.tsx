
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { toast } from 'sonner';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    specialty: '',
    licenseNumber: '',
    agreeToTerms: false,
    loading: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSpecialtyChange = (value: string) => {
    setFormState(prev => ({ ...prev, specialty: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormState(prev => ({ ...prev, agreeToTerms: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formState.agreeToTerms) {
      toast.error("Please agree to the terms and conditions");
      return;
    }

    if (formState.password !== formState.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setFormState(prev => ({ ...prev, loading: true }));

    try {
      // Simulate registration success and navigate to dashboard
      setTimeout(() => {
        toast.success("Registration successful!");
        navigate("/dashboard");
      }, 1000);
      
      // In a real implementation, you would make an API call here:
      /*
      const response = await fetch('https://your-asp-net-api-url/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formState.firstName,
          lastName: formState.lastName,
          email: formState.email,
          password: formState.password,
          specialty: formState.specialty,
          licenseNumber: formState.licenseNumber
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Registration failed');
      }

      const data = await response.json();
      toast.success("Registration successful!");
      navigate("/dashboard");
      */
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Registration failed");
    } finally {
      setFormState(prev => ({ ...prev, loading: false }));
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">Medical Professional Registration</CardTitle>
        <CardDescription className="text-center">
          Create an account to access the Medical Nexus Portal
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input 
                id="firstName"
                name="firstName"
                placeholder="John"
                required
                value={formState.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input 
                id="lastName"
                name="lastName"
                placeholder="Doe"
                required
                value={formState.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          
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
            <Label htmlFor="specialty">Medical Specialty</Label>
            <Select value={formState.specialty} onValueChange={handleSpecialtyChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select specialty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cardiology">Cardiology</SelectItem>
                <SelectItem value="neurology">Neurology</SelectItem>
                <SelectItem value="pediatrics">Pediatrics</SelectItem>
                <SelectItem value="surgery">Surgery</SelectItem>
                <SelectItem value="psychiatry">Psychiatry</SelectItem>
                <SelectItem value="family">Family Medicine</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="licenseNumber">Medical License Number</Label>
            <Input 
              id="licenseNumber"
              name="licenseNumber"
              placeholder="License number"
              required
              value={formState.licenseNumber}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input 
              id="password"
              name="password"
              type="password"
              placeholder="Create a password"
              required
              value={formState.password}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input 
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              required
              value={formState.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox 
              id="terms" 
              checked={formState.agreeToTerms}
              onCheckedChange={handleCheckboxChange}
            />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I agree to the terms of service and privacy policy
            </label>
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
          {formState.loading ? "Processing..." : "Register"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RegistrationForm;
