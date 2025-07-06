import { useEffect, useState } from "react";
import CommonAlertModalLayout from "../layout/CommonAlertModalLayout";
import CommonModalContent from "./CommonModalContent";
import type { CommonAlertModalPropsType } from "@/types/modalTypes";

const CommonAlertModal = ({
  isOpen,
  buttonInfo, // buttonLabel, onClose 대신 buttonInfo 사용
  modalContent,
}: CommonAlertModalPropsType) => {
  // shouldRenderLayout: 모달 레이아웃 컴포넌트 자체를 DOM에 렌더링할지 여부 (사라지는 애니메이션 후 제거)
  const [shouldRenderLayout, setShouldRenderLayout] = useState(isOpen);
  // showAnimation: 나타나고 사라지는 애니메이션 상태 제어 (Layout 컴포넌트에 전달)
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // 모달을 열어야 할 때: 일단 레이아웃 렌더링 시작, 애니메이션 시작
      setShouldRenderLayout(true);
      // 애니메이션 시작을 위해 DOM 업데이트 사이클 대기 (약간의 딜레이)
      setShowAnimation(true);
    } else {
      // 모달을 닫아야 할 때: 사라지는 애니메이션 시작
      setShowAnimation(false);
      // Layout 컴포넌트의 onCloseComplete가 호출되면 shouldRenderLayout(false) 설정
    }
  }, [isOpen]); // isOpen prop이 변경될 때마다 이펙트 실행

  // 완전히 렌더링할 필요가 없으면 null 반환
  if (!shouldRenderLayout) {
    return null;
  }

  // CommonAlertModalLayout에 필요한 props 전달
  return (
    <CommonAlertModalLayout
      isVisible={showAnimation} // Layout의 애니메이션 상태 제어
      buttonInfo={buttonInfo} // buttonLabel, onClick 대신 buttonInfo 전달
      onCloseComplete={() => setShouldRenderLayout(false)} // Layout의 애니메이션 완료 후 레이아웃 제거
    >
      <CommonModalContent
        title={modalContent.title}
        content={modalContent.content}
      />
    </CommonAlertModalLayout>
  );
};

export default CommonAlertModal;
