import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from 'recharts';
import type { Language } from '../types';
import { translations } from '../constants/translations';

interface FeedbackChartsProps {
    language: Language;
}

const FeedbackCharts: React.FC<FeedbackChartsProps> = ({ language }) => {
    const t = translations[language];

    const data = [
        { name: t.chartLabels.satisfaction, mentions: 24 },
        { name: t.chartLabels.energy, mentions: 15 },
        { name: t.chartLabels.mentalClarity, mentions: 14 },
        { name: t.chartLabels.cardioHealth, mentions: 6 },
        { name: t.chartLabels.value, mentions: 4 },
    ];

    return (
        <div className="w-full h-96 bg-gray-800 p-6 rounded-lg shadow-lg mt-8">
            <h3 className="text-xl font-bold text-center mb-4 text-gray-100">{t.feedbackChartTitle}</h3>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
                    <XAxis type="number" stroke="#9ca3af" tick={{ fill: '#d1d5db' }} />
                    <YAxis type="category" dataKey="name" width={180} tick={{ fill: '#d1d5db', fontSize: 12 }} />
                    <Tooltip 
                        cursor={{fill: 'rgba(207, 169, 92, 0.1)'}}
                        contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #4b5563' }}
                        labelStyle={{ color: '#f3f4f6' }}
                    />
                    <Legend wrapperStyle={{paddingTop: '20px', color: '#d1d5db'}}/>
                    <Bar dataKey="mentions" name={language === 'es' ? 'Menciones' : 'Mentions'} fill="#cfa95c" barSize={20} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default FeedbackCharts;
