import React, { useEffect } from "react";

type CommonAlertModalLayoutProps = {
  isVisible: boolean; // 모달 보임 상태 제어 prop
  label: string;
  onClick: () => void; // 버튼 클릭 시 호출 (모달 닫기 로직 포함)
  onCloseComplete: () => void; // 사라지는 애니메이션 완료 후 호출
  children?: React.ReactNode;
};

export default function CommonAlertModalLayout({
  isVisible,
  label,
  onClick,
  onCloseComplete,
  children,
}: CommonAlertModalLayoutProps) {
  useEffect(() => {
    if (!isVisible) {
      // isVisible이 false가 되면 사라지는 애니메이션 후 onCloseComplete 호출
      const timer = setTimeout(onCloseComplete, 300); // 애니메이션 시간(300ms) 후 호출
      return () => clearTimeout(timer); // 클린업
    }
  }, [isVisible, onCloseComplete]); // isVisible 또는 onCloseComplete 변경 시 실행

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ background: "rgba(0,0,0,0.4)" }} // 더 투명한 배경
      onClick={onClick} // 배경 클릭 시 모달 닫기 (이벤트 전파 중지 필요)
    >
      <div
        className={`bg-white rounded-2xl shadow-lg min-w-[280px] text-center transform transition-all duration-300 ${
          isVisible ? "scale-100" : "scale-95"
        }`}
        onClick={(e) => e.stopPropagation()} // 모달 내용 클릭 시 이벤트 전파 중지
      >
        <div className="mb-2 p-2">{children}</div>
        <div className="flex justify-center">
          <button
            className="px-4 py-2 text-black flex-grow-1 rounded-b-2xl rounded-t-none hover:bg-gray-10 transition border-t border-gray-10 "
            onClick={onClick}
          >
            {label}
          </button>
        </div>
      </div>
    </div>
  );
}
