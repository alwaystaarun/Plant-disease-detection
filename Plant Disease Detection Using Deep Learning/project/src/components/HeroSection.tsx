import React from 'react';
import { Microscope, TrendingUp, Award } from 'lucide-react';

export function HeroSection() {
  return (
    <div className="bg-gradient-to-br from-green-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI-Powered Plant Disease
            <span className="text-green-600 block">Detection System</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Protect your crops with advanced machine learning. Upload a leaf image and get instant disease 
            diagnosis with treatment recommendations from our 90%+ accurate AI model.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center space-x-2 text-gray-700">
              <Microscope className="h-6 w-6 text-green-600" />
              <span className="font-medium">Advanced CNN Analysis</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <TrendingUp className="h-6 w-6 text-blue-600" />
              <span className="font-medium">Real-time Results</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <Award className="h-6 w-6 text-purple-600" />
              <span className="font-medium">Research-Grade Accuracy</span>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">50,000+</div>
                <div className="text-gray-600">Training Images</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">18+</div>
                <div className="text-gray-600">Crop Varieties</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
                <div className="text-gray-600">Disease Types</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}