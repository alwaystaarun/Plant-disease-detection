import React from 'react';
import { AlertTriangle, CheckCircle, Info, Thermometer, Droplets, Calendar } from 'lucide-react';

export interface Disease {
  name: string;
  confidence: number;
  severity: 'Low' | 'Medium' | 'High';
  description: string;
  symptoms: string[];
  treatment: string[];
  prevention: string[];
}

interface DiseasePredictionProps {
  prediction: Disease;
}

export function DiseasePrediction({ prediction }: DiseasePredictionProps) {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Low': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'High': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'Low': return <CheckCircle className="h-5 w-5" />;
      case 'Medium': return <Info className="h-5 w-5" />;
      case 'High': return <AlertTriangle className="h-5 w-5" />;
      default: return <Info className="h-5 w-5" />;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Disease Detected</h2>
              <p className="text-green-100 mt-1">AI Analysis Complete</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">{(prediction.confidence * 100).toFixed(1)}%</div>
              <div className="text-green-100">Confidence</div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <h3 className="text-xl font-bold text-gray-900">{prediction.name}</h3>
                <div className={`px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1 ${getSeverityColor(prediction.severity)}`}>
                  {getSeverityIcon(prediction.severity)}
                  <span>{prediction.severity} Severity</span>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{prediction.description}</p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Thermometer className="h-5 w-5 text-blue-600" />
                  <span className="font-medium text-blue-900">Recommended Action</span>
                </div>
                <p className="text-blue-800 text-sm">
                  {prediction.severity === 'High' ? 'Immediate treatment required' : 
                   prediction.severity === 'Medium' ? 'Monitor and treat if spreading' : 
                   'Continue regular monitoring'}
                </p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar className="h-5 w-5 text-green-600" />
                  <span className="font-medium text-green-900">Best Treatment Time</span>
                </div>
                <p className="text-green-800 text-sm">Early morning or late evening</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-3 flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-orange-500" />
                <span>Symptoms</span>
              </h4>
              <ul className="space-y-2">
                {prediction.symptoms.map((symptom, index) => (
                  <li key={index} className="text-gray-600 text-sm flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3 flex items-center space-x-2">
                <Droplets className="h-5 w-5 text-blue-500" />
                <span>Treatment</span>
              </h4>
              <ul className="space-y-2">
                {prediction.treatment.map((treatment, index) => (
                  <li key={index} className="text-gray-600 text-sm flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>{treatment}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3 flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Prevention</span>
              </h4>
              <ul className="space-y-2">
                {prediction.prevention.map((prevention, index) => (
                  <li key={index} className="text-gray-600 text-sm flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>{prevention}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}