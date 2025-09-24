import React from 'react';
import type { Ingredient, Language } from '../types';
import { translations } from '../constants/translations';
import BodyGraphic from './BodyGraphic';

interface IngredientModalProps {
  ingredient: Ingredient;
  language: Language;
  onClose: () => void;
}

const IngredientModal: React.FC<IngredientModalProps> = ({ ingredient, language, onClose }) => {
  const t = translations[language];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4" onClick={onClose}>
      <div className="bg-gray-800 text-gray-200 rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 md:p-8 relative animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors text-3xl leading-none"
          aria-label="Close modal"
        >
          &times;
        </button>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex flex-col items-center">
            <img src={ingredient.image} alt={ingredient.name[language]} className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-[#cfa95c]" />
            <h2 className="text-3xl font-bold mt-4 text-gray-100 text-center">{ingredient.name[language]}</h2>
            <div className="mt-6 w-full">
              <h3 className="text-xl font-semibold mb-3 text-[#507328]">{t.ingredientBenefitsTitle}</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {ingredient.benefits[language].map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[#507328] text-center">{t.improvedAreasTitle}</h3>
              <BodyGraphic improvedAreas={ingredient.improvedAreas} />
            </div>
             <button
              onClick={onClose}
              className="mt-6 w-full md:w-auto bg-[#1f7fb5] text-white font-bold py-2 px-6 rounded-lg hover:bg-[#1a6a9a] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1f7fb5]/70"
            >
              {t.closeButton}
            </button>
          </div>
        </div>
      </div>
       <style>{`
          @keyframes fade-in-up {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.4s ease-out forwards;
          }
        `}</style>
    </div>
  );
};

export default IngredientModal;
