
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { egyptianDoctors, Doctor } from "../data/doctors";

const Dashboard = () => {
  const [locationFilter, setLocationFilter] = useState<string>("all");
  
  const filteredDoctors = locationFilter === "all" 
    ? egyptianDoctors 
    : egyptianDoctors.filter(doctor => doctor.location === locationFilter);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-blue-800 mb-6">Medical Nexus Dashboard</h1>
      
      <Tabs defaultValue="doctors" className="w-full">
        <TabsList className="grid grid-cols-5 mb-6">
          <TabsTrigger value="doctors">Egyptian Doctors</TabsTrigger>
          <TabsTrigger value="patients">Patients</TabsTrigger>
          <TabsTrigger value="appointments">Appointments</TabsTrigger>
          <TabsTrigger value="records">Medical Records</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
        </TabsList>
        
        <TabsContent value="doctors">
          <Card>
            <CardHeader>
              <CardTitle>Egyptian Doctors in Cairo & Giza</CardTitle>
              <CardDescription>Find healthcare professionals in Cairo and Giza</CardDescription>
              <div className="pt-4 w-full md:w-1/3">
                <Select value={locationFilter} onValueChange={setLocationFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="Cairo">Cairo</SelectItem>
                    <SelectItem value="Giza">Giza</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Doctor Name</TableHead>
                      <TableHead>Specialty</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Hospital</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredDoctors.map((doctor: Doctor) => (
                      <TableRow key={doctor.id}>
                        <TableCell className="font-medium">{doctor.name}</TableCell>
                        <TableCell>{doctor.specialty}</TableCell>
                        <TableCell>{doctor.location}</TableCell>
                        <TableCell>{doctor.hospital}</TableCell>
                        <TableCell>{doctor.contact}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded text-xs ${doctor.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                            {doctor.available ? 'Available' : 'Unavailable'}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
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
