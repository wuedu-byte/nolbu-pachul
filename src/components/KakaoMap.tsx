
import { Map, MapMarker, useKakaoLoader } from 'react-kakao-maps-sdk';

// 경기도 화성시 병점동 376-11 써밋프라움 B동 207호 좌표 (가짜 좌표값)
const LAT = 37.2069;
const LNG = 127.0345;

export const KakaoMap: React.FC = () => {
  const [loading, error] = useKakaoLoader({
    appkey: import.meta.env.VITE_KAKAO_MAP_API_KEY || "dummy_key", // 카카오 앱 키
  });

  if (loading) return <div className="w-full h-64 flex items-center justify-center bg-gray-100 rounded-xl text-2xl font-bold">지도 로딩 중...</div>;
  if (error) return <div className="w-full h-64 flex items-center justify-center bg-red-100 text-red-500 rounded-xl text-2xl font-bold">지도를 불러올 수 없습니다.</div>;

  return (
    <div className="w-full h-64 sm:h-80 rounded-xl overflow-hidden shadow-inner border border-gray-200 mt-4 relative z-0">
      <Map
        center={{ lat: LAT, lng: LNG }}
        style={{ width: "100%", height: "100%" }}
        level={3}
      >
        <MapMarker position={{ lat: LAT, lng: LNG }}>
          <div className="p-2 text-center bg-white rounded shadow-sm w-full min-w-max">
            <span className="text-xl font-bold whitespace-nowrap text-gray-800">놀부파출부 사무실 📍</span>
          </div>
        </MapMarker>
      </Map>
    </div>
  );
};
