import { useEffect, useState } from "react";
import type { CommonConfirmModalLayoutPropsType } from "@/types/modalTypes";

export default function CommonConfirmModalLayout({
  isVisible,
  confirmButtonInfo,
  cancelButtonInfo,
  onCloseComplete,
  children,
}: CommonConfirmModalLayoutPropsType) {
  // show 상태는 애니메이션 제어에 사용 (isVisible prop과 연동)
  const [show, setShow] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      // isVisible이 true가 되면 나타나는 애니메이션 시작
      setShow(true);
    } else {
      // isVisible이 false가 되면 사라지는 애니메이션 시작
      setShow(false);
      // 애니메이션 시간(300ms) 후 완전히 닫는 콜백 호출
      const timer = setTimeout(onCloseComplete, 300); // 애니메이션 시간(300ms) 후 호출
      return () => clearTimeout(timer); // 클린업
    }
  }, [isVisible, onCloseComplete]); // isVisible 또는 onCloseComplete 변경 시 실행

  // isVisible이 false이고 애니메이션이 끝났으면 아무것도 렌더링하지 않음
  // show 상태가 false가 된 후 애니메이션 시간(300ms)이 지나야 onCloseComplete가 호출되므로,
  // isVisible이 false가 되자마자 바로 null을 반환하지 않도록 show 상태를 함께 확인
  if (!isVisible && !show) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 ${
        show ? "opacity-100" : "opacity-0"
      }`}
      style={{ background: "rgba(0,0,0,0.4)" }} // 더 투명한 배경
      onClick={cancelButtonInfo.onClick} // 배경 클릭 시 취소 액션 실행 (cancelButtonInfo.onClick 사용)
    >
      <div
        className={`bg-white rounded-2xl shadow-lg min-w-[280px] text-center transform transition-all duration-300 ${
          show ? "scale-100" : "scale-95"
        }`}
        onClick={(e) => e.stopPropagation()} // 모달 내용 클릭 시 이벤트 전파 중지
      >
        {/* 모달 내용 영역 */}
        <div className="mb-2 p-2">{children}</div>

        {/* 버튼 영역 */}
        <div className="flex justify-center border-t border-gray-10">
          {" "}
          {/* 버튼 상단 테두리 */}
          {/* 취소 버튼 */}
          <button
            className="flex-1 px-4 py-3 text-gray-70 rounded-bl-2xl hover:bg-gray-10 transition border-r border-gray-10" // 좌측 하단만 둥글게, 우측 테두리
            onClick={cancelButtonInfo.onClick} // onCancel 대신 cancelButtonInfo.onClick 사용
          >
            {cancelButtonInfo.label}{" "}
            {/* cancelLabel 대신 cancelButtonInfo.label 사용 */}
          </button>
          {/* 확인 버튼 */}
          <button
            className="flex-1 px-4 py-3 text-blue-600 font-semibold rounded-br-2xl hover:bg-gray-10 transition" // 우측 하단만 둥글게
            onClick={confirmButtonInfo.onClick} // onConfirm 대신 confirmButtonInfo.onClick 사용
          >
            {confirmButtonInfo.label}{" "}
            {/* confirmLabel 대신 confirmButtonInfo.label 사용 */}
          </button>
        </div>
      </div>
    </div>
  );
}
