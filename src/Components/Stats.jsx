import React from 'react';

export default function Stats() {
    const stats = [
        { label: 'حملة ناجحة', value: '50+' },
        { label: 'مستفيد', value: '1000+' },
        { label: 'متطوع', value: '100+' },
    ];

    return (
        <div className="bg-white py-12 border-b">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl font-black text-green-600 mb-2">{stat.value}</div>
                            <div className="text-gray-600 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}