import { useState } from "react";
import CommonAlertModal from "@/components/modal/CommonAlertModal";
import CommonConfirmModal from "@/components/modal/CommonConfirmModal"; // CommonConfirmModal 임포트

const AuthLandingPage = () => {
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false); // Alert 모달 상태
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false); // Confirm 모달 상태 추가

  // Alert 모달 열기
  const handleOpenAlertModal = () => {
    setIsAlertModalOpen(true);
  };

  // Alert 모달 닫기 (애니메이션 시작)
  const handleCloseAlertModal = () => {
    setIsAlertModalOpen(false);
  };

  // Confirm 모달 열기
  const handleOpenConfirmModal = () => {
    setIsConfirmModalOpen(true);
  };

  // Confirm 모달 닫기 (애니메이션 시작)
  const handleCloseConfirmModal = () => {
    setIsConfirmModalOpen(false);
  };

  // Confirm 모달에서 '확인' 클릭 시 실행될 함수
  const handleConfirmAction = () => {
    console.log("확인 액션 실행됨!");
    handleCloseConfirmModal(); // 액션 실행 후 모달 닫기
  };

  // Confirm 모달에서 '취소' 클릭 시 실행될 함수 (또는 배경 클릭)
  const handleCancelAction = () => {
    console.log("취소 액션 실행됨!");
    handleCloseConfirmModal(); // 액션 실행 후 모달 닫기
  };

  const alertModalContent = {
    title: "알림 모달 제목",
    content: "여기에 알림 모달 내용을 작성하세요.",
  }; // Alert 모달 내용

  const confirmModalContent = {
    title: "확인 모달 제목",
    content: "여기에 확인 모달 내용을 작성하세요. 이 액션을 진행하시겠습니까?",
  }; // Confirm 모달 내용

  // Alert 모달 버튼 정보
  const alertButtonInfo = {
    label: "확인",
    onClick: handleCloseAlertModal,
  };

  // Confirm 모달 확인 버튼 정보
  const confirmButtonInfo = {
    label: "진행",
    onClick: handleConfirmAction,
  };

  // Confirm 모달 취소 버튼 정보
  const cancelButtonInfo = {
    label: "취소",
    onClick: handleCancelAction,
  };

  return (
    <div>
      {/* 여기에 로그인 페이지의 내용을 추가하세요 */}
      <h1>로그인 페이지</h1>
      <p>여기에 로그인 폼이나 관련 내용을 추가할 수 있습니다.</p>
      <button onClick={handleOpenAlertModal}>알림 모달 열기</button>{" "}
      {/* Alert 모달 버튼 */}
      <button onClick={handleOpenConfirmModal} style={{ marginLeft: "10px" }}>
        확인 모달 열기
      </button>{" "}
      {/* Confirm 모달 버튼 */}
      {/* Alert 모달 */}
      <CommonAlertModal
        isOpen={isAlertModalOpen}
        modalContent={alertModalContent}
        buttonInfo={alertButtonInfo}
      />
      {/* Confirm 모달 */}
      <CommonConfirmModal
        isOpen={isConfirmModalOpen}
        modalContent={confirmModalContent}
        confirmButtonInfo={confirmButtonInfo}
        cancelButtonInfo={cancelButtonInfo}
      />
    </div>
  );
};

export default AuthLandingPage;
