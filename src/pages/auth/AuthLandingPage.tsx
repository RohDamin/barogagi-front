import { useState } from "react";
import CommonAlertModal from "@/components/modal/CommonAlertModal";

const AuthLandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Use a more descriptive name

  // Function to open the modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Function to start closing the modal (called by button click or background click)
  const handleCloseModal = () => {
    setIsModalOpen(false); // This starts the fade-out animation in CommonAlertModal
  };
  const modalContent = {
    title: "모달 제목",
    content: "여기에 모달 내용을 작성하세요.",
  };
  return (
    <div>
      {/* 여기에 로그인 페이지의 내용을 추가하세요 */}
      <h1>로그인 페이지</h1>
      <p>여기에 로그인 폼이나 관련 내용을 추가할 수 있습니다.</p>
      <button onClick={handleOpenModal}>모달 열기</button>

      <CommonAlertModal
        isOpen={isModalOpen}
        buttonLabel="확인"
        onClose={handleCloseModal}
        modalContent={modalContent}
      />
    </div>
  );
};

export default AuthLandingPage;
