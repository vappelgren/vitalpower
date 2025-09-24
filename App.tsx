import React, { useState } from 'react';
import type { Language, Ingredient } from './types';
import { translations } from './constants/translations';
import { ingredients } from './constants/ingredients';
import FeedbackCharts from './components/FeedbackCharts';
import BodyGraphic from './components/BodyGraphic';
import IngredientModal from './components/IngredientModal';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('es');
  const [selectedIngredient, setSelectedIngredient] = useState<Ingredient | null>(null);

  const t = translations[language];

  return (
    <div className="min-h-screen bg-black text-gray-200 font-sans">
      <header className="bg-black/80 backdrop-blur-lg shadow-lg shadow-gray-900/50 sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <img src="/image/logo.png" alt={t.headerLogoAlt} className="h-12 w-auto" />
          <div className="flex space-x-2">
            <button
              onClick={() => setLanguage('es')}
              className={`px-4 py-2 rounded-md text-sm font-semibold transition-all ${language === 'es' ? 'bg-[#507328] text-white shadow' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
            >
              Español
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-4 py-2 rounded-md text-sm font-semibold transition-all ${language === 'en' ? 'bg-[#507328] text-white shadow' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
            >
              English
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <section id="product-info" className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-100">{t.productTitle}</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-400 leading-relaxed">{t.productDescription}</p>
        </section>

        <section id="media" className="mb-16">
            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-100">{t.videoTitle}</h3>
                    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl shadow-black/30">
                        {language === 'es' ? (
                            <iframe src="https://www.youtube.com/embed/c8hvSMk906M?si=mLD9lQWa10sTsVr7=0" title="Video del producto en español" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full"></iframe>
                        ) : (
                            <iframe src="https://www.youtube.com/embed/1ylEpICDQBg?si=K801QgjG02Z6MkJ9=0" title="Product video in English" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full"></iframe>
                        )}
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-100">{t.galleryTitle}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <img src="/image/product1.png" alt="Product shot 1" className="rounded-lg shadow-lg object-cover w-full h-full aspect-square" />
                        <img src="/image/product2.png" alt="Product shot 2" className="rounded-lg shadow-lg object-cover w-full h-full aspect-square" />
                        <img src="/image/product3.png" alt="Product shot 3" className="rounded-lg shadow-lg object-cover w-full h-full aspect-square" />
                        <img src="/image/product4.png" alt="Product shot 4" className="rounded-lg shadow-lg object-cover w-full h-full aspect-square" />
                        <img src="/image/product5.png" alt="Product shot 5" className="rounded-lg shadow-lg object-cover w-full h-full aspect-square" />
                        <img src="/image/product6.png" alt="Product shot 6" className="rounded-lg shadow-lg object-cover w-full h-full aspect-square" />
                        <img src="/image/product7.png" alt="Product shot 7" className="rounded-lg shadow-lg object-cover w-full h-full aspect-square" />
                        <img src="/image/product8.png" alt="Product shot 8" className="rounded-lg shadow-lg object-cover w-full h-full aspect-square" />
                        <img src="/image/product9.png" alt="Product shot 9" className="rounded-lg shadow-lg object-cover w-full h-full aspect-square" />
                    </div>
                </div>
            </div>
        </section>


        <section id="ingredients" className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-100">{t.ingredientsTitle}</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
            {ingredients.map((ingredient) => (
              <button
                key={ingredient.id}
                onClick={() => setSelectedIngredient(ingredient)}
                className="group flex flex-col items-center text-center p-2 bg-gray-800 rounded-lg shadow-md hover:shadow-lg hover:shadow-[#cfa95c]/20 hover:-translate-y-1 transition-all duration-300"
              >
                <img src={ingredient.image} alt={ingredient.name[language]} className="w-20 h-20 rounded-full object-cover mb-2 border-2 border-gray-700 group-hover:border-[#cfa95c] transition-colors" />
                <span className="text-sm font-medium text-gray-300">{ingredient.name[language]}</span>
              </button>
            ))}
          </div>
        </section>

        <section id="feedback">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-100">{t.feedbackTitle}</h2>
          <FeedbackCharts language={language} />
        </section>
      </main>

      {selectedIngredient && (
        <IngredientModal
          ingredient={selectedIngredient}
          language={language}
          onClose={() => setSelectedIngredient(null)}
        />
      )}
      
      <footer className="text-center py-6 mt-12 text-gray-500 text-sm border-t border-gray-800">
        <p>Vital Leafs &copy; {new Date().getFullYear()}. All Rights Reserved.</p>
        <p className="mt-1 max-w-2xl mx-auto">This product is a dietary supplement and is not intended to diagnose, treat, cure, or prevent any disease. Please read labels, warnings, and directions before using or consuming a product.</p>
      </footer>
    </div>
  );
};

export default App;