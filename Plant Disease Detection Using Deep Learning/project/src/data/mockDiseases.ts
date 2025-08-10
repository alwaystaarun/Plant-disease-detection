import { Disease } from '../components/DiseasePrediction';

export const mockDiseases: Disease[] = [
  {
    name: "Tomato Late Blight",
    confidence: 0.94,
    severity: "High",
    description: "Late blight is a devastating disease that affects tomato plants, caused by the water mold Phytophthora infestans. It can quickly destroy entire crops if left untreated.",
    symptoms: [
      "Dark brown spots on leaves with white fuzzy growth",
      "Brown lesions on stems and fruit",
      "Yellowing and wilting of affected areas",
      "Rapid spread during humid conditions"
    ],
    treatment: [
      "Apply copper-based fungicide immediately",
      "Remove and destroy affected plant parts",
      "Improve air circulation around plants",
      "Reduce overhead watering"
    ],
    prevention: [
      "Plant resistant varieties",
      "Ensure proper spacing for air circulation",
      "Apply preventive fungicide sprays",
      "Avoid overhead watering in evening"
    ]
  },
  {
    name: "Potato Early Blight",
    confidence: 0.87,
    severity: "Medium",
    description: "Early blight is a common fungal disease affecting potato plants, caused by Alternaria solani. It typically occurs during warm, humid weather conditions.",
    symptoms: [
      "Circular brown spots with concentric rings",
      "Yellowing of lower leaves first",
      "Dark lesions on tubers",
      "Premature defoliation"
    ],
    treatment: [
      "Apply fungicide containing chlorothalonil",
      "Remove infected plant debris",
      "Improve plant nutrition with balanced fertilizer",
      "Ensure adequate spacing between plants"
    ],
    prevention: [
      "Rotate crops annually",
      "Use certified disease-free seed potatoes",
      "Avoid overhead irrigation",
      "Apply mulch to prevent soil splash"
    ]
  },
  {
    name: "Corn Northern Leaf Blight",
    confidence: 0.91,
    severity: "Medium",
    description: "Northern corn leaf blight is caused by the fungus Exserohilum turcicum. It's most severe in areas with moderate temperatures and high humidity.",
    symptoms: [
      "Long, elliptical gray-green lesions",
      "Lesions may have dark borders",
      "Affects leaves, husks, and stalks",
      "Severe cases cause premature plant death"
    ],
    treatment: [
      "Apply foliar fungicide during early infection",
      "Use resistant hybrid varieties",
      "Improve field drainage",
      "Remove crop residue after harvest"
    ],
    prevention: [
      "Plant resistant corn hybrids",
      "Practice crop rotation",
      "Manage crop residue properly",
      "Monitor weather conditions"
    ]
  },
  {
    name: "Healthy Plant",
    confidence: 0.96,
    severity: "Low",
    description: "The analyzed leaf appears to be from a healthy plant with no signs of disease. Continue regular monitoring and preventive care practices.",
    symptoms: [
      "Vibrant green coloration",
      "No visible spots or lesions",
      "Normal leaf structure",
      "No signs of wilting or yellowing"
    ],
    treatment: [
      "No treatment necessary",
      "Continue regular watering schedule",
      "Maintain proper nutrition",
      "Monitor for any changes"
    ],
    prevention: [
      "Continue current care practices",
      "Regular monitoring for early detection",
      "Maintain proper plant spacing",
      "Ensure adequate nutrition and water"
    ]
  }
];

export function getRandomDisease(): Disease {
  return mockDiseases[Math.floor(Math.random() * mockDiseases.length)];
}