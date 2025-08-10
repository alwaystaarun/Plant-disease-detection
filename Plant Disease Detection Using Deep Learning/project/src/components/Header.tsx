import React from 'react';
import { Leaf, Shield, Users } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="bg-green-500 p-2 rounded-lg">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">PlantCare AI</h1>
              <p className="text-sm text-gray-500">Disease Detection System</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1 text-sm text-gray-600">
              <Shield className="h-4 w-4" />
              <span>90%+ Accuracy</span>
            </div>
            <div className="flex items-center space-x-1 text-sm text-gray-600">
              <Users className="h-4 w-4" />
              <span>For Farmers & Researchers</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}