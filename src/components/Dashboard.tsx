
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Dashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-blue-800 mb-6">Medical Nexus Dashboard</h1>
      
      <Tabs defaultValue="patients" className="w-full">
        <TabsList className="grid grid-cols-4 mb-6">
          <TabsTrigger value="patients">Patients</TabsTrigger>
          <TabsTrigger value="appointments">Appointments</TabsTrigger>
          <TabsTrigger value="records">Medical Records</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
        </TabsList>
        
        <TabsContent value="patients">
          <Card>
            <CardHeader>
              <CardTitle>Patient Management</CardTitle>
              <CardDescription>View and manage your patient information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center p-12">
                <p className="text-gray-500 mb-4">You'll be able to manage patient data here after connecting to the backend</p>
                <Button variant="outline">Add New Patient</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="appointments">
          <Card>
            <CardHeader>
              <CardTitle>Appointment Calendar</CardTitle>
              <CardDescription>Schedule and manage appointments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center p-12">
                <p className="text-gray-500">Your appointments will appear here once connected to the backend</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="records">
          <Card>
            <CardHeader>
              <CardTitle>Electronic Health Records</CardTitle>
              <CardDescription>Access and update medical records</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center p-12">
                <p className="text-gray-500">Patient records will be accessible here after backend integration</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="messages">
          <Card>
            <CardHeader>
              <CardTitle>Secure Messaging</CardTitle>
              <CardDescription>Communicate with other healthcare providers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center p-12">
                <p className="text-gray-500">Secure messaging will be available after backend connection</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
