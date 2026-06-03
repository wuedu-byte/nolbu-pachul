import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Phone, Award, MapPin } from 'lucide-react';
import { KakaoMap } from './components/KakaoMap';

const PHONE_NUMBER = "010-4714-8188";
const PHONE_LINK = `tel:${PHONE_NUMBER}`;

const ScrollFadeIn = ({ children, delay = 0 }: { children: ReactNode, delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setIsVisible(true);
      });
    }, { threshold: 0.1 });
    
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-32 overflow-x-hidden selection:bg-pink-200">
      
      {/* 1. Header (Glassmorphism) */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-40 border-b border-slate-200/50 shadow-sm transition-all">
        <div className="max-w-md mx-auto px-5 py-3 flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">놀부파출부</h1>
            <div className="flex items-center mt-0.5">
              <Award className="w-3.5 h-3.5 text-emerald-500 mr-1" />
              <span className="text-xs font-bold text-emerald-600 tracking-tight">Since 2013</span>
            </div>
          </div>
          <a 
            href={PHONE_LINK}
            className="flex items-center justify-center bg-rose-500 text-white rounded-full p-2.5 shadow-[0_4px_15px_rgb(225,29,72,0.3)] active:scale-95 active:bg-rose-600 transition-all"
            aria-label="전화 걸기"
          >
            <Phone className="w-5 h-5 fill-current" />
          </a>
        </div>
      </header>

      <main className="max-w-md mx-auto px-5 space-y-6 pt-24">
        
        {/* 2. Hero Section */}
        <ScrollFadeIn>
          <section className="relative bg-gradient-to-br from-lime-300 via-emerald-100 to-lime-50 rounded-3xl p-6 sm:p-8 shadow-sm border border-white text-center overflow-hidden">
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-white/40 blur-2xl rounded-full pointer-events-none"></div>
            
            <div className="inline-flex items-center bg-white/90 backdrop-blur-sm text-emerald-800 font-extrabold px-3.5 py-1.5 rounded-full text-xs mb-4 shadow-sm border border-emerald-100/50">
              <Award className="w-4 h-4 mr-1.5 text-emerald-500" />
              10년 이상의 확실한 믿음
            </div>
            
            <h2 className="text-2xl font-black text-slate-900 leading-tight mb-5 tracking-tight break-keep">
              흥부보다 <span className="text-rose-500 drop-shadow-sm inline-block animate-pulse">더 착한</span><br/>놀부파출부
            </h2>
            
            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-4 inline-flex items-center justify-center w-full shadow-sm border border-white/50">
              <MapPin className="w-6 h-6 text-rose-500 mr-2.5 flex-shrink-0 animate-bounce" />
              <p className="text-[0.95rem] font-bold text-slate-800 tracking-tight leading-snug break-keep text-left">
                병점 · 동탄 · 안녕동 · 보통리 등<br/>식당전문 인력 항시 대기!
              </p>
            </div>
          </section>
        </ScrollFadeIn>

        {/* 3. 구인 섹션 (사장님용) */}
        <ScrollFadeIn delay={100}>
          <section className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 relative overflow-hidden group">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-emerald-50 rounded-full blur-2xl opacity-50 transition-transform group-hover:scale-125 duration-700"></div>
            
            <div className="flex items-center mb-5 relative z-10">
              <div className="text-3xl mr-3.5 drop-shadow-sm">🧑‍🍳</div>
              <h3 className="text-xl font-extrabold text-slate-900 tracking-tight break-keep leading-snug">
                사장님,<br/>일손이 필요하신가요?
              </h3>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-4 mb-5 relative z-10 border border-slate-100">
              <p className="text-[0.95rem] text-slate-700 font-bold leading-relaxed break-keep">
                홀서빙 · 주방보조 · 찬모<br/>
                <span className="text-rose-500 text-base font-black mt-1 inline-block">즉시 투입 가능!</span>
              </p>
            </div>
            
            <a 
              href={PHONE_LINK}
              className="relative z-10 flex items-center justify-center w-full h-14 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-2xl shadow-[0_4px_15px_rgb(225,29,72,0.3)] active:scale-[0.98] active:shadow-inner transition-all duration-200"
            >
              <Phone className="w-5 h-5 mr-2.5 fill-current animate-[wiggle_1s_ease-in-out_infinite]" />
              <span className="text-base font-bold tracking-tight">구인 전화하기</span>
            </a>
          </section>
        </ScrollFadeIn>

        {/* 4. 구직 섹션 (구직자용) */}
        <ScrollFadeIn delay={200}>
          <section className="bg-slate-800 rounded-3xl p-6 shadow-md relative overflow-hidden">
            <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-emerald-500 rounded-full blur-[60px] opacity-20"></div>
            
            <div className="flex items-center mb-5 relative z-10">
              <div className="text-3xl mr-3.5 drop-shadow-md">💰</div>
              <h3 className="text-xl font-extrabold text-white tracking-tight break-keep leading-snug">
                오늘 바로<br/>일자리 찾으시나요?
              </h3>
            </div>
            
            <ul className="text-[0.95rem] text-slate-200 font-bold space-y-3 mb-5 relative z-10 ml-1">
              <li className="flex items-center"><span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500 text-white text-[10px] mr-2.5 flex-shrink-0">✓</span> 동탄/병점 우대!</li>
              <li className="flex items-center"><span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500 text-white text-[10px] mr-2.5 flex-shrink-0">✓</span> 당일 현금 지급!</li>
              <li className="flex items-center"><span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500 text-white text-[10px] mr-2.5 flex-shrink-0">✓</span> 초보자 대환영!</li>
            </ul>
            
            <a 
              href={PHONE_LINK}
              className="relative z-10 flex items-center justify-center w-full h-14 bg-emerald-500 text-white rounded-2xl shadow-[0_4px_15px_rgb(16,185,129,0.3)] hover:bg-emerald-400 active:scale-[0.98] active:shadow-inner transition-all duration-200"
            >
              <Phone className="w-5 h-5 mr-2.5 fill-current" />
              <span className="text-base font-bold tracking-tight">상담 전화하기</span>
            </a>
          </section>
        </ScrollFadeIn>

        {/* 5. 오시는 길 */}
        <ScrollFadeIn delay={300}>
          <section className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2.5 drop-shadow-sm">📍</span>
              <h3 className="text-xl font-extrabold text-slate-900 tracking-tight break-keep">
                사무실 오시는 길
              </h3>
            </div>
            <p className="text-sm font-bold text-slate-500 mb-4 tracking-tight ml-9">방문 상담을 언제나 환영합니다!</p>
            <KakaoMap />
          </section>
        </ScrollFadeIn>
      </main>

      {/* 6. Footer */}
      <footer className="bg-slate-900 text-slate-400 mt-16 px-6 py-12 pb-32 border-t border-slate-800">
        <div className="max-w-md mx-auto space-y-4 text-center">
          <p className="text-lg font-black text-white tracking-widest opacity-90">놀부파출부</p>
          <div className="text-[0.9rem] font-bold leading-relaxed">
            소장: 김순기 <br/>
            등록번호: 화성시 동부-유 2014-13호
          </div>
          <div className="w-10 h-1 bg-slate-700 mx-auto rounded-full my-4"></div>
          <div className="text-base font-bold text-white tracking-wide space-y-1">
            <p>직통: 010-4714-8188</p>
            <p className="text-slate-400 text-sm">일반: 031-222-8188</p>
          </div>
        </div>
      </footer>

      {/* 7. 플로팅 통화 버튼 (Compact & Glow Pulse) */}
      <div className="fixed bottom-0 left-0 right-0 w-full z-50 p-4 pb-6 bg-gradient-to-t from-white via-white/95 to-transparent pointer-events-none">
        <div className="max-w-md mx-auto pointer-events-auto px-1">
          <a 
            href={PHONE_LINK}
            className="flex items-center justify-center w-full h-16 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-2xl active:scale-[0.98] transition-transform duration-200 animate-glow-pulse shadow-lg"
          >
            <Phone className="w-6 h-6 fill-current mr-3" />
            <span className="text-[1.35rem] font-black tracking-tight drop-shadow-sm">바로 전화 연결</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
