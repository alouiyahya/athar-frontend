import React, { useState, useEffect } from "react";

export default function Welcome() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    const images = [
        "/assets/campaign-1.jpg",
        "/assets/campaign-2.jpg",
        "/assets/campaign-3.jpg",
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }, 3500);
        return () => clearInterval(timer);
    }, [images.length]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleWhatsAppDonate = () => {
        const phoneNumber = "212639195289"; 
        const message = "السلام عليكم مؤسسة أثر، أريد المساهمة في حملاتكم الخيرية.";
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    return (
        <div className="min-h-screen bg-white font-sans overflow-x-hidden selection:bg-[#0082fb] selection:text-white" dir="rtl">
            {/* 3iwḍ <Head>, khdemna b document.title ila bghiti (provisoire) */}
            
            {/* --- Navbar --- */}
            <nav className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 h-16 md:h-20 flex items-center">
                <div className="max-w-7xl mx-auto px-4 md:px-6 w-full flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <img src="/logo-athar.jpg" alt="Logo" className="h-10 w-10 md:h-12 md:w-12 object-contain" />
                        <span className="text-lg md:text-xl font-black text-slate-800 tracking-tighter">مؤسسة <span className="text-[#0082fb]">أثر</span></span>
                    </div>

                    <div className="hidden md:flex items-center gap-8 font-bold text-slate-600">
                        <button onClick={() => scrollToSection('about-section')} className="hover:text-[#0082fb] transition-colors font-bold text-sm">من نحن</button>
                        <button onClick={() => scrollToSection('campaigns')} className="hover:text-[#0082fb] transition-colors font-bold text-sm">حملاتنا</button>
                        <a href="/" className="hover:text-[#0082fb] transition-colors text-sm">الرئيسية</a>
                        <button onClick={handleWhatsAppDonate} className="bg-[#0082fb] text-white px-6 py-2 rounded-full font-bold shadow-md hover:bg-blue-600 transition-all text-sm">تبرع الآن</button>
                    </div>

                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-slate-600">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} /></svg>
                    </button>
                </div>
            </nav>

            {/* --- 1. Hero Section --- */}
            <header className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-slate-900">
                <video autoPlay loop muted playsInline className="absolute z-0 w-full h-full object-cover opacity-60">
                    <source src="/assets/hero-video.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/20 to-white"></div>
                
                <div className="relative z-20 max-w-4xl mx-auto text-center px-6">
                    <h1 className="text-4xl md:text-7xl font-black text-white mb-4 leading-tight drop-shadow-lg">
                        مؤسسة <span className="text-blue-400">أثر</span> <br className="md:hidden"/>
                        <span className="text-2xl md:text-5xl font-bold opacity-90 uppercase">للإغاثة والتنمية</span>
                    </h1>
                    <p className="text-sm md:text-xl text-white/90 mb-8 max-w-xl mx-auto leading-relaxed font-medium">
                        نساهم في إطعام الطعام، كسوة العيد، وتوفير حياة كريمة للمحتاجين بفضل تبرعاتكم.
                    </p>
                    <button onClick={handleWhatsAppDonate} className="bg-[#0082fb] text-white px-10 py-4 rounded-full font-black text-lg shadow-2xl hover:bg-blue-600 transition-all active:scale-95">ساهم معنا الآن</button>
                </div>
            </header>

            {/* --- 2. Stats Section --- */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[{ label: 'حملة ناجحة', value: '+50' }, { label: 'مستفيد مباشر', value: '+1,000' }, { label: 'متطوع نشط', value: '+100' }].map((s, i) => (
                            <div key={i} className="bg-white border-2 border-slate-50 p-10 rounded-[2.5rem] shadow-xl text-center transform transition-transform hover:-translate-y-2">
                                <div className="text-5xl md:text-6xl font-black text-[#0082fb] mb-2">{s.value}</div>
                                <div className="text-slate-400 font-bold text-sm tracking-widest uppercase">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 3. About Section --- */}
            <section id="about-section" className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="relative h-[400px] md:h-[550px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                            {images.map((img, index) => (
                                <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImage ? "opacity-100" : "opacity-0"}`}>
                                    <img src={img} alt="Impact" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">كيف نغير الواقع؟</h2>
                            <div className="space-y-4">
                                {[
                                    { t: 'توزيع القفف الغذائية', d: 'نصل إلى أبعد المناطق لضمان عدم بقاء أي أسرة جائعة.' },
                                    { t: 'مشاريع التنمية المستدامة', d: 'نساعد الأرامل والشباب على بدء مشاريعهم الصغيرة.' },
                                    { t: 'حملات الإغاثة الطارئة', d: 'تدخلات سريعة في الكوارث وموجات البرد.' }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-5 rounded-3xl bg-white border border-slate-100 shadow-sm">
                                        <div className="h-10 w-10 rounded-full bg-[#0082fb] text-white flex items-center justify-center flex-shrink-0 font-bold">{i+1}</div>
                                        <div>
                                            <h4 className="font-black text-slate-800 text-lg">{item.t}</h4>
                                            <p className="text-slate-500 text-sm font-medium">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 4. Campaigns Section (Videos) --- */}
            <section id="campaigns" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-black text-slate-900 mb-16 text-center tracking-tight">حملاتنا الميدانية</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            { title: 'سقيا الأمل', desc: 'توفير الماء في المناطق القروية.', video: '/assets/v1.mp4' },
                            { title: 'قفة الخير', desc: 'دعم الأسر بالمواد الأساسية.', video: '/assets/v2.mp4' },
                            { title: 'كسوة الشتاء', desc: 'توزيع الأغطية والملابس.', video: '/assets/v3.mp4' },
                        ].map((camp, i) => (
                            <div key={i} className="bg-slate-50 rounded-[2.5rem] overflow-hidden shadow-sm group border border-slate-100">
                                <div className="h-56 bg-black relative overflow-hidden">
                                    <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700">
                                        <source src={camp.video} type="video/mp4" />
                                    </video>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-black text-slate-800 mb-2">{camp.title}</h3>
                                    <p className="text-slate-500 mb-6 font-medium text-sm leading-relaxed">{camp.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 5. Donate Section --- */}
            <section id="donate-section" className="py-24 bg-slate-50">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#0082fb] rounded-full blur-[120px] opacity-20 -mr-32 -mt-32"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">ساهم في ترك <span className="text-[#0082fb]">أثر</span> طيب</h2>
                            <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">بضغطات بسيطة، يمكنك التواصل مباشرة مع المسؤول لترتيب مساهمتكم المالية أو العينية.</p>
                            <button onClick={handleWhatsAppDonate} className="bg-[#25D366] text-white px-12 py-5 rounded-full font-black text-xl shadow-xl hover:bg-[#1ebe57] transition-all active:scale-95">
                                تواصل معنا الآن
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Footer --- */}
            <footer className="py-12 bg-white text-center border-t border-slate-50">
                <div className="text-3xl font-black text-[#0082fb] mb-4">أثـر</div>
                <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">© 2026 جميع الحقوق محفوظة لـ مؤسسة أثر</p>
            </footer>

            {/* Mobile Sidebar */}
            {isOpen && (
                <div className="md:hidden fixed inset-0 z-[100] bg-white flex flex-col p-8">
                    <button onClick={() => setIsOpen(false)} className="self-end mb-10 p-2"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg></button>
                    <nav className="flex flex-col gap-8 text-3xl font-black">
                        <button onClick={() => {scrollToSection('about-section'); setIsOpen(false)}} className="text-right">من نحن</button>
                        <button onClick={() => {scrollToSection('campaigns'); setIsOpen(false)}} className="text-right">حملاتنا</button>
                        <button onClick={() => {handleWhatsAppDonate(); setIsOpen(false)}} className="bg-[#25D366] text-white py-5 rounded-2xl shadow-lg mt-4 text-xl">تبرع الآن</button>
                    </nav>
                </div>
            )}
        </div>
    );
}