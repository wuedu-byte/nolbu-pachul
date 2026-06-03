import { Map, MapMarker, useKakaoLoader } from 'react-kakao-maps-sdk';
import { Navigation } from 'lucide-react';

const LAT = 37.2073;
const LNG = 127.0326;
const KAKAO_MAP_URL = `https://map.kakao.com/link/to/놀부파출,${LAT},${LNG}`;

// 루트의 .env 파일에 다음을 추가하세요:
// VITE_KAKAO_MAP_API_KEY=3711182e61fccb15431de1a026640a0b
export const KakaoMap = () => {
  const [loading, error] = useKakaoLoader({
    appkey: import.meta.env.VITE_KAKAO_MAP_API_KEY || "3711182e61fccb15431de1a026640a0b",
    libraries: ["services", "clusterer", "drawing"], // 필요한 라이브러리 명시
  });

  if (loading) return <div className="w-full h-64 flex items-center justify-center bg-slate-50/50 backdrop-blur-sm rounded-3xl text-sm font-bold text-slate-400 border border-slate-100 shadow-inner">지도 로딩 중...</div>;
  if (error) {
    console.error("Kakao Map Load Error:", error);
    return (
      <div className="w-full h-64 flex flex-col items-center justify-center bg-rose-50/50 backdrop-blur-sm text-rose-500 rounded-3xl text-sm font-bold border border-rose-100 shadow-inner px-4 text-center">
        <p>지도를 불러올 수 없습니다.</p>
        <p className="text-xs text-rose-400 mt-2 font-normal">카카오 디벨로퍼스(Kakao Developers) 설정에서<br/>현재 실행 중인 주소(예: http://localhost:5173)가<br/>[웹 플랫폼 도메인]에 등록되어 있는지 확인해 주세요.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 mt-4">
      {/* 프리미엄 지도 UI (rounded-3xl, shadow-xl) */}
      <div className="relative w-full h-64 rounded-3xl overflow-hidden shadow-xl border border-slate-100 group">
        <Map
          center={{ lat: LAT, lng: LNG }}
          style={{ width: "100%", height: "100%" }}
          level={3}
        >
          {/* 세련된 커스텀 마커 인포윈도우 대신 기본 마커에 컨텐츠 올리기 */}
          <MapMarker position={{ lat: LAT, lng: LNG }}>
            <div className="py-1 px-2.5 bg-white rounded-md text-xs font-bold text-slate-800 whitespace-nowrap shadow-sm">
              놀부파출 (207호)
            </div>
          </MapMarker>
        </Map>
      </div>

      {/* 카카오맵 앱에서 길찾기 버튼 */}
      <a 
        href={KAKAO_MAP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-full bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-md active:scale-[0.98] transition-all hover:bg-slate-800"
      >
        <Navigation className="w-4 h-4 mr-2 fill-white" />
        <span className="text-sm font-bold tracking-tight">카카오맵 앱에서 길찾기</span>
      </a>
    </div>
  );
};
