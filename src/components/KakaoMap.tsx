import { Map, MapMarker, useKakaoLoader } from 'react-kakao-maps-sdk';
import { Navigation } from 'lucide-react';

const LAT = 37.2069;
const LNG = 127.0345;
const KAKAO_MAP_URL = "kakaomap://look?p=37.2069,127.0345"; // 길찾기 앱 스키마 예시

export const KakaoMap = () => {
  const [loading, error] = useKakaoLoader({
    appkey: import.meta.env.VITE_KAKAO_MAP_API_KEY || "dummy_key",
  });

  if (loading) return <div className="w-full h-80 flex items-center justify-center bg-slate-50/50 backdrop-blur-sm rounded-3xl text-xl font-bold text-slate-400">지도 로딩 중...</div>;
  if (error) return <div className="w-full h-80 flex items-center justify-center bg-rose-50/50 backdrop-blur-sm text-rose-500 rounded-3xl text-xl font-bold">지도를 불러올 수 없습니다.</div>;

  return (
    <div className="relative w-full h-96 rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 mt-6 group">
      <Map
        center={{ lat: LAT, lng: LNG }}
        style={{ width: "100%", height: "100%" }}
        level={3}
      >
        <MapMarker position={{ lat: LAT, lng: LNG }} />
      </Map>

      {/* Floating Info Overlay */}
      <div className="absolute top-5 left-5 right-5 bg-white/90 backdrop-blur-xl p-5 rounded-3xl shadow-xl border border-white/60 z-10 pointer-events-none">
        <p className="text-[1.35rem] font-extrabold text-slate-900 tracking-tight leading-tight">상세 주소: 써밋프라움 B동 207호</p>
        <p className="text-emerald-700 font-bold mt-1.5 tracking-tight">(병점역 1번 출구 도보 5분)</p>
      </div>

      {/* Navigation Button Overlay */}
      <div className="absolute bottom-5 right-5 z-10">
        <a 
          href={KAKAO_MAP_URL}
          className="flex items-center justify-center bg-slate-900/95 backdrop-blur-md text-white px-6 py-4 rounded-full shadow-[0_8px_20px_rgb(0,0,0,0.2)] active:scale-95 transition-transform"
        >
          <Navigation className="w-6 h-6 mr-2.5 fill-white" />
          <span className="text-xl font-bold tracking-tight">길찾기 앱 실행</span>
        </a>
      </div>
    </div>
  );
};
