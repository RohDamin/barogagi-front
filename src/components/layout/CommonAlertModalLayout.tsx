import { useEffect, useState } from "react";
import type { CommonAlertModalLayoutPropsType } from "@/types/modalTypes";

export default function CommonAlertModalLayout({
  isVisible,
  buttonInfo, // label, onClick 대신 buttonInfo 사용
  onCloseComplete,
  children,
}: CommonAlertModalLayoutPropsType) {
  // isVisible이 false이고 애니메이션이 끝났으면 아무것도 렌더링하지 않음 (CommonConfirmModalLayout과 일관성 유지)
  const [show, setShow] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      setShow(true);
    } else {
      setShow(false);
      const timer = setTimeout(onCloseComplete, 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onCloseComplete]);

  if (!isVisible && !show) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 ${
        show ? "opacity-100" : "opacity-0" // isVisible 대신 show 사용
      }`}
      style={{ background: "rgba(0,0,0,0.4)" }} // 더 투명한 배경
      onClick={buttonInfo.onClick} // 배경 클릭 시 모달 닫기 (이벤트 전파 중지 필요) (onClick 대신 buttonInfo.onClick 사용)
    >
      <div
        className={`bg-white rounded-2xl shadow-lg min-w-[280px] text-center transform transition-all duration-300 ${
          show ? "scale-100" : "scale-95" // isVisible 대신 show 사용
        }`}
        onClick={(e) => e.stopPropagation()} // 모달 내용 클릭 시 이벤트 전파 중지
      >
        <div className="mb-2 p-2">{children}</div>
        <div className="flex justify-center">
          <button
            className="px-4 py-2 text-black flex-grow-1 rounded-b-2xl rounded-t-none hover:bg-gray-10 transition border-t border-gray-10 "
            onClick={buttonInfo.onClick} // onClick 대신 buttonInfo.onClick 사용
          >
            {buttonInfo.label} {/* label 대신 buttonInfo.label 사용 */}
          </button>
        </div>
      </div>
    </div>
  );
}
