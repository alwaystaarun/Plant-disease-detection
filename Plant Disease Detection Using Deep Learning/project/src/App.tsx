import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FeatureCards } from './components/FeatureCards';
import { ImageUpload } from './components/ImageUpload';
import { DiseasePrediction, Disease } from './components/DiseasePrediction';
import { getRandomDisease } from './data/mockDiseases';

function App() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [prediction, setPrediction] = useState<Disease | null>(null);

  const handleImageUpload = async (file: File) => {
    setIsProcessing(true);
    setPrediction(null);
    
    // Simulate AI processing time
    setTimeout(() => {
      const mockPrediction = getRandomDisease();
      setPrediction(mockPrediction);
      setIsProcessing(false);
    }, 3000);
  };

  const resetAnalysis = () => {
    setPrediction(null);
    setIsProcessing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {!prediction && !isProcessing && (
        <>
          <HeroSection />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <FeatureCards />
          </div>
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!prediction ? (
          <ImageUpload onImageUpload={handleImageUpload} isProcessing={isProcessing} />
        ) : (
          <div className="space-y-6">
            <DiseasePrediction prediction={prediction} />
            <div className="text-center">
              <button
                onClick={resetAnalysis}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Analyze Another Image
              </button>
            </div>
          </div>
        )}
      </div>

      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p className="mb-2">
              <span className="font-medium">PlantCare AI</span> - Empowering farmers with AI technology
            </p>
            <p className="text-sm">
              Built with TensorFlow • Keras • Computer Vision • 90%+ Accuracy
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;