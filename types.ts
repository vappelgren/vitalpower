export type Language = 'es' | 'en';

export type BodyArea = 'brain' | 'heart' | 'cells' | 'immune' | 'metabolism' | 'longevity' | 'body';

export interface Ingredient {
  id: string;
  name: {
    es: string;
    en: string;
  };
  image: string;
  benefits: {
    es: string[];
    en: string[];
  };
  improvedAreas: BodyArea[];
}

export interface TranslationContent {
  headerTitle: string;
  headerLogoAlt: string;
  productTitle: string;
  productDescription: string;
  videoTitle: string;
  galleryTitle: string;
  ingredientsTitle: string;
  feedbackTitle: string;
  feedbackChartTitle: string;
  chartLabels: {
    satisfaction: string;
    energy: string;
    mentalClarity: string;
    cardioHealth: string;
    value: string;
  };
  closeButton: string;
  ingredientBenefitsTitle: string;
  improvedAreasTitle: string;
}