import React from 'react';

export default function Hero() {
    return (
        <section className="relative bg-green-700 py-16 px-4 text-center">
            {/* Background Decor (Optional) */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                    مؤسسة أثر للأعمال الخيرية
                </h1>
                <p className="text-xl text-green-50 mb-10 leading-relaxed">
                    "خلف كل أثرٍ طيب، قصة أمل." نساهم في إطعام الطعام، كسوة العيد، 
                    وتحسين حياة المحتاجين بفضل تبرعاتكم.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="bg-white text-green-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition shadow-lg">
                        ساهم معنا الآن
                    </button>
                    <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition">
                        تعرف علينا أكثر
                    </button>
                </div>
            </div>
        </section>
    );
}