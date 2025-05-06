
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type PatientRecordProps = {
  patient?: {
    id: string;
    name: string;
    age: number;
    gender: string;
    contactInfo: string;
  };
};

const PatientRecord: React.FC<PatientRecordProps> = ({ patient }) => {
  // Default placeholder patient if none provided
  const patientData = patient || {
    id: "PT12345",
    name: "John Doe",
    age: 45,
    gender: "Male",
    contactInfo: "john.doe@example.com | (555) 123-4567"
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>Patient: {patientData.name}</span>
          <span className="text-sm font-normal text-gray-500">ID: {patientData.id}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-sm font-medium text-gray-500">Age</p>
            <p>{patientData.age} years</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Gender</p>
            <p>{patientData.gender}</p>
          </div>
          <div className="col-span-2">
            <p className="text-sm font-medium text-gray-500">Contact Information</p>
            <p>{patientData.contactInfo}</p>
          </div>
        </div>
        
        <Tabs defaultValue="history">
          <TabsList className="w-full">
            <TabsTrigger value="history">Medical History</TabsTrigger>
            <TabsTrigger value="medications">Medications</TabsTrigger>
            <TabsTrigger value="tests">Lab Tests</TabsTrigger>
            <TabsTrigger value="notes">Clinical Notes</TabsTrigger>
          </TabsList>
          
          <TabsContent value="history" className="p-4 border rounded-md mt-4">
            <p className="text-gray-500 text-center">Patient medical history will be displayed here</p>
          </TabsContent>
          
          <TabsContent value="medications" className="p-4 border rounded-md mt-4">
            <p className="text-gray-500 text-center">Medication list will be displayed here</p>
          </TabsContent>
          
          <TabsContent value="tests" className="p-4 border rounded-md mt-4">
            <p className="text-gray-500 text-center">Lab test results will be displayed here</p>
          </TabsContent>
          
          <TabsContent value="notes" className="p-4 border rounded-md mt-4">
            <p className="text-gray-500 text-center">Clinical notes will be displayed here</p>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-end space-x-2">
        <Button variant="outline">Update Record</Button>
        <Button>Add Note</Button>
      </CardFooter>
    </Card>
  );
};

export default PatientRecord;
