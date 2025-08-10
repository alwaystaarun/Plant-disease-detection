import React from 'react';
import { Brain, Zap, Shield, Globe } from 'lucide-react';

export function FeatureCards() {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: "AI-Powered Detection",
      description: "Advanced CNN model trained on 50,000+ plant images with 90%+ accuracy",
      color: "blue"
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "Instant Analysis",
      description: "Get real-time disease predictions in seconds, not days",
      color: "yellow"
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Early Detection",
      description: "Catch diseases before they spread and save your crops",
      color: "green"
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-600" />,
      title: "Multiple Crops",
      description: "Supports tomato, potato, corn, and 15+ other crop varieties",
      color: "purple"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {features.map((feature, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className={`bg-${feature.color}-50 p-3 rounded-lg w-fit mb-4`}>
            {feature.icon}
          </div>
          <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}