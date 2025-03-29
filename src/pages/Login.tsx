
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import AuthForm from "@/components/auth/AuthForm";

export default function Login() {
  const navigate = useNavigate();
  
  const handleAuthSuccess = (user: { email: string; name: string; role: string }) => {
    // In a real app, we would store the user in context or a state management solution
    // For now, we'll just redirect to the dashboard
    navigate("/dashboard");
  };
  
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-10">
        <h1 className="text-3xl font-bold text-soil-green-dark mb-8">
          Welcome to NourishSoil
        </h1>
        <AuthForm onSuccess={handleAuthSuccess} />
      </div>
    </Layout>
  );
}
