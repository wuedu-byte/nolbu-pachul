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
      className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-40 overflow-x-hidden selection:bg-pink-200">
      
      {/* 1. Header (Glassmorphism) */}
      <header className="fixed top-0 w-full bg-white/75 backdrop-blur-2xl z-40 border-b border-slate-200/60 shadow-[0_2px_10px_rgb(0,0,0,0.02)] transition-all">
        <div className="max-w-3xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-[1.75rem] font-extrabold text-slate-900 tracking-tighter drop-shadow-sm">놀부파출부</h1>
            <div className="flex items-center mt-1">
              <Award className="w-4 h-4 text-emerald-500 mr-1" />
              <span className="text-sm font-bold text-emerald-600 tracking-tight">Since 2013</span>
            </div>
          </div>
          <a 
            href={PHONE_LINK}
            className="flex items-center justify-center bg-rose-500 text-white rounded-full p-4 shadow-[0_4px_20px_rgb(225,29,72,0.3)] active:scale-90 active:bg-rose-600 transition-all"
            aria-label="전화 걸기"
          >
            <Phone className="w-7 h-7 fill-current" />
          </a>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-5 space-y-12 pt-32">
        
        {/* 2. Hero Section */}
        <ScrollFadeIn>
          <section className="relative bg-gradient-to-br from-lime-300 via-emerald-100 to-lime-50 rounded-[2.5rem] p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white text-center overflow-hidden">
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 bg-white/40 blur-3xl rounded-full pointer-events-none"></div>
            
            <div className="inline-flex items-center bg-white/90 backdrop-blur-sm text-emerald-800 font-extrabold px-5 py-2.5 rounded-full text-[1.3rem] mb-6 shadow-sm border border-emerald-100/50">
              <Award className="w-6 h-6 mr-2 text-emerald-500" />
              10년 이상의 확실한 믿음
            </div>
            
            <h2 className="text-[2.75rem] sm:text-6xl font-black text-slate-900 leading-[1.15] mb-8 tracking-tighter break-keep">
              흥부보다 <span className="text-rose-500 drop-shadow-sm inline-block animate-pulse">더 착한</span><br/>놀부파출부
            </h2>
            
            <div className="glass rounded-[2rem] p-6 inline-flex flex-col sm:flex-row items-center justify-center w-full shadow-md">
              <MapPin className="w-10 h-10 text-rose-500 mb-3 sm:mb-0 sm:mr-4 flex-shrink-0 animate-bounce" />
              <p className="text-[1.55rem] sm:text-3xl font-extrabold text-slate-800 tracking-tight leading-snug break-keep">
                동탄·병점·화성 전지역<br/>식당전문 인력 항시 대기!
              </p>
            </div>
          </section>
        </ScrollFadeIn>

        {/* 3. 구인 섹션 (사장님용) */}
        <ScrollFadeIn delay={100}>
          <section className="bg-white rounded-[2.5rem] p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative overflow-hidden group">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-emerald-50 rounded-full blur-3xl opacity-50 transition-transform group-hover:scale-150 duration-700"></div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6 relative z-10">
              <div className="text-[5rem] mb-4 sm:mb-0 sm:mr-5 drop-shadow-md">🧑‍🍳</div>
              <h3 className="text-[2rem] sm:text-[2.5rem] font-extrabold text-slate-900 tracking-tight break-keep leading-[1.2]">
                사장님,<br className="hidden sm:block"/> 일손이 필요하신가요?
              </h3>
            </div>
            
            <div className="bg-slate-50 rounded-3xl p-6 mb-8 relative z-10 border border-slate-100 shadow-inner">
              <p className="text-[1.65rem] sm:text-3xl text-slate-700 font-extrabold leading-relaxed break-keep">
                주방장 · 찬모 · 홀서빙<br/>
                <span className="text-rose-500 text-[2rem] sm:text-4xl font-black mt-2 inline-block">즉시 투입 가능!</span>
              </p>
            </div>
            
            <a 
              href={PHONE_LINK}
              className="relative z-10 flex items-center justify-center w-full h-24 sm:h-28 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-3xl shadow-[0_8px_25px_rgb(225,29,72,0.3)] active:scale-[0.96] active:shadow-inner transition-all duration-200"
            >
              <Phone className="w-10 h-10 mr-4 fill-current animate-[wiggle_1s_ease-in-out_infinite]" />
              <span className="text-[2rem] sm:text-[2.5rem] font-black tracking-tight drop-shadow-sm">구인 전화하기</span>
            </a>
          </section>
        </ScrollFadeIn>

        {/* 4. 구직 섹션 (구직자용) */}
        <ScrollFadeIn delay={200}>
          <section className="bg-slate-800 rounded-[2.5rem] p-8 sm:p-10 shadow-[0_10px_40px_rgb(0,0,0,0.15)] relative overflow-hidden">
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-emerald-500 rounded-full blur-[80px] opacity-20"></div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center mb-8 relative z-10">
              <div className="text-[5rem] mb-4 sm:mb-0 sm:mr-5 drop-shadow-lg">💰</div>
              <h3 className="text-[2rem] sm:text-[2.5rem] font-extrabold text-white tracking-tight break-keep leading-[1.2]">
                오늘 바로<br className="hidden sm:block"/> 일자리 찾으시나요?
              </h3>
            </div>
            
            <ul className="text-[1.65rem] sm:text-[1.85rem] text-slate-200 font-bold space-y-5 mb-8 relative z-10 ml-2">
              <li className="flex items-center"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500 text-white text-lg mr-4 shadow-sm flex-shrink-0">✓</span> 동탄/병점 우대!</li>
              <li className="flex items-center"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500 text-white text-lg mr-4 shadow-sm flex-shrink-0">✓</span> 당일 현금 지급!</li>
              <li className="flex items-center"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500 text-white text-lg mr-4 shadow-sm flex-shrink-0">✓</span> 초보자 대환영!</li>
            </ul>
            
            <a 
              href={PHONE_LINK}
              className="relative z-10 flex items-center justify-center w-full h-24 sm:h-28 bg-emerald-500 text-white rounded-3xl shadow-[0_8px_25px_rgb(16,185,129,0.3)] hover:bg-emerald-400 active:scale-[0.96] active:shadow-inner transition-all duration-200"
            >
              <Phone className="w-10 h-10 mr-4 fill-current" />
              <span className="text-[2rem] sm:text-[2.5rem] font-black tracking-tight drop-shadow-sm">상담 전화하기</span>
            </a>
          </section>
        </ScrollFadeIn>

        {/* 5. 오시는 길 */}
        <ScrollFadeIn delay={300}>
          <section className="bg-white rounded-[2.5rem] p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
            <div className="flex items-center mb-6">
              <span className="text-[3.5rem] mr-4 drop-shadow-sm">📍</span>
              <h3 className="text-[2.25rem] sm:text-4xl font-extrabold text-slate-900 tracking-tight break-keep">
                사무실 오시는 길
              </h3>
            </div>
            <p className="text-[1.4rem] font-extrabold text-slate-500 mb-6 tracking-tight">방문 상담을 언제나 환영합니다!</p>
            <KakaoMap />
          </section>
        </ScrollFadeIn>
      </main>

      {/* 6. Footer */}
      <footer className="bg-slate-900 text-slate-400 mt-20 px-6 py-16 pb-44 border-t border-slate-800">
        <div className="max-w-3xl mx-auto space-y-6 text-center">
          <p className="text-[2rem] font-black text-white tracking-widest opacity-90">놀부파출부</p>
          <div className="text-[1.35rem] font-bold leading-loose">
            소장: 김순기 <br/>
            등록번호: 화성시 동부-유 2014-13호
          </div>
          <div className="w-12 h-1.5 bg-slate-700 mx-auto rounded-full my-6"></div>
          <div className="text-[1.65rem] font-bold text-white tracking-wider space-y-2">
            <p>직통: 010-4714-8188</p>
            <p className="text-slate-400 text-xl">일반: 031-222-8188</p>
          </div>
        </div>
      </footer>

      {/* 7. 플로팅 통화 버튼 (Glow Pulse & Scale) */}
      <div className="fixed bottom-0 left-0 right-0 w-full z-50 p-5 pb-8 sm:pb-10 bg-gradient-to-t from-white via-white/95 to-transparent pointer-events-none">
        <div className="max-w-3xl mx-auto pointer-events-auto px-2">
          <a 
            href={PHONE_LINK}
            className="flex items-center justify-center w-full h-[6.5rem] sm:h-32 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-[2.5rem] active:scale-[0.96] transition-transform duration-200 animate-glow-pulse"
          >
            <Phone className="w-[3.5rem] h-[3.5rem] sm:w-[4rem] sm:h-[4rem] fill-current mr-5 sm:mr-6" />
            <span className="text-[2.5rem] sm:text-[3rem] font-black tracking-tight drop-shadow-md">바로 전화 연결</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
