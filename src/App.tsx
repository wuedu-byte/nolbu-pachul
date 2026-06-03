
import { Phone, Award, MapPin } from 'lucide-react';
import { KakaoMap } from './components/KakaoMap';

const PHONE_NUMBER = "010-4714-8188";
const PHONE_LINK = `tel:${PHONE_NUMBER}`;

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-32">
      {/* 1. Header */}
      <header className="sticky top-0 bg-white z-40 shadow-sm px-4 py-3 flex justify-between items-center border-b border-gray-100">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">놀부파출부</h1>
          <div className="flex items-center mt-1">
            <Award className="w-5 h-5 text-lime-600 mr-1" />
            <span className="text-lg font-bold text-lime-700">Since 2013</span>
          </div>
        </div>
        <a 
          href={PHONE_LINK}
          className="flex items-center justify-center bg-pink-500 text-white rounded-full p-4 shadow-md active:bg-pink-600 transition-colors"
          aria-label="전화 걸기"
        >
          <Phone className="w-10 h-10 fill-current" />
        </a>
      </header>

      <main className="max-w-3xl mx-auto px-4 space-y-6 pt-6">
        {/* 2. Hero Section */}
        <section className="bg-gradient-to-br from-lime-400 to-lime-200 rounded-2xl p-6 shadow-lg text-center">
          <div className="inline-block bg-white text-lime-800 font-bold px-4 py-2 rounded-full text-xl mb-4 shadow-sm border border-lime-100">
            🏆 10년 이상의 믿음
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-4 break-keep">
            흥부보다 더 착한 놀부
          </h2>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 inline-flex items-center justify-center w-full shadow-sm">
            <MapPin className="w-8 h-8 text-pink-600 mr-2 flex-shrink-0" />
            <p className="text-2xl font-bold text-gray-800 break-keep">
              동탄·병점·화성 전지역<br/>식당전문 인력 항시 대기!
            </p>
          </div>
        </section>

        {/* 3. 구인 섹션 (사장님용) */}
        <section className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center mb-4">
            <div className="text-5xl mr-4">🧑‍🍳</div>
            <h3 className="text-3xl font-bold text-gray-900 break-keep">사장님, 일손이 필요하신가요?</h3>
          </div>
          <p className="text-2xl text-gray-700 font-medium mb-6 ml-2 border-l-4 border-lime-400 pl-4">
            주방장 / 찬모 / 홀서빙<br/>
            <span className="text-pink-600 font-bold">즉시 투입 가능!</span>
          </p>
          <a 
            href={PHONE_LINK}
            className="flex items-center justify-center w-full h-20 bg-pink-500 hover:bg-pink-600 active:bg-pink-700 text-white rounded-xl shadow-md transition-all"
          >
            <Phone className="w-10 h-10 mr-3 animate-bounce" />
            <span className="text-3xl font-bold">사장님 구인 전화하기</span>
          </a>
        </section>

        {/* 4. 구직 섹션 (구직자용) */}
        <section className="bg-gray-100 rounded-2xl p-6 shadow-lg border border-gray-200">
          <div className="flex items-center mb-4">
            <div className="text-5xl mr-4">💰</div>
            <h3 className="text-3xl font-bold text-gray-900 break-keep">오늘 일자리 찾으시나요?</h3>
          </div>
          <ul className="text-2xl text-gray-800 font-bold space-y-2 mb-6 ml-2">
            <li className="flex items-center"><span className="text-lime-600 mr-2">✔️</span> 동탄/병점 우대!</li>
            <li className="flex items-center"><span className="text-lime-600 mr-2">✔️</span> 당일 현금 지급!</li>
            <li className="flex items-center"><span className="text-lime-600 mr-2">✔️</span> 초보자 대환영!</li>
          </ul>
          <a 
            href={PHONE_LINK}
            className="flex items-center justify-center w-full h-20 bg-pink-500 hover:bg-pink-600 active:bg-pink-700 text-white rounded-xl shadow-md transition-all"
          >
            <Phone className="w-10 h-10 mr-3 animate-pulse" />
            <span className="text-3xl font-bold">일자리 상담 전화하기</span>
          </a>
        </section>

        {/* 5. 오시는 길 */}
        <section className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center mb-4">
            <span className="text-4xl mr-3">📍</span>
            <h3 className="text-3xl font-bold text-gray-900 break-keep">사무실 오시는 길<br/><span className="text-2xl text-gray-500 text-left block mt-1">(방문 상담 환영)</span></h3>
          </div>
          <KakaoMap />
          <div className="mt-6 bg-lime-50 rounded-xl p-4 border border-lime-200 text-center">
            <p className="text-2xl font-bold text-gray-800 break-keep">
              병점역 근처<br/>써밋프라움 오피스텔 B동 207호
            </p>
          </div>
        </section>
      </main>

      {/* 6. Footer */}
      <footer className="bg-slate-800 text-gray-300 mt-12 px-6 py-10 pb-40">
        <div className="max-w-3xl mx-auto space-y-4 text-center">
          <p className="text-2xl font-bold text-white">놀부파출부</p>
          <p className="text-xl leading-relaxed">
            소장: 김순기 <br/>
            등록번호: 화성시 동부-유 2014-13호
          </p>
          <div className="w-16 h-1 bg-gray-600 mx-auto rounded-full my-4"></div>
          <p className="text-2xl font-bold text-white">
            직통: 010-4714-8188<br/>
            일반: 031-222-8188
          </p>
        </div>
      </footer>

      {/* 7. 플로팅 통화 버튼 */}
      <div className="fixed bottom-0 left-0 right-0 w-full z-50 p-3 bg-white/90 backdrop-blur-md border-t border-gray-200">
        <a 
          href={PHONE_LINK}
          className="flex items-center justify-center w-full h-24 bg-pink-500 text-white rounded-2xl shadow-[0_-5px_25px_-5px_rgba(236,72,153,0.5)] active:bg-pink-600 active:scale-95 transition-all pulse-animation"
        >
          <Phone className="w-12 h-12 fill-current mr-4" />
          <span className="text-4xl font-extrabold tracking-wide">지금 바로 전화 연결</span>
        </a>
      </div>
    </div>
  );
}

export default App;
