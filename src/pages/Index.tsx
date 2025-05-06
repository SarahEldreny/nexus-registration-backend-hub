
import RegistrationForm from '../components/RegistrationForm';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white p-4">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-blue-800 mb-2">Medical Nexus Portal</h1>
        <p className="text-gray-600">The professional network for healthcare providers</p>
      </div>
      <RegistrationForm />
      <div className="mt-8 text-center text-sm text-gray-500">
        <p>This form will connect to an ASP.NET Core backend once deployed.</p>
        <p className="mt-2">© {new Date().getFullYear()} Medical Nexus Portal. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Index;
