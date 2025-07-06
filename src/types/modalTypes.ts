import React from "react";

export type CommonAlertModalLayoutPropsType = {
  isVisible: boolean; // Controls animation state (true = show, false = hide)
  label: string;
  onClick: () => void; // Button/background click handler (should trigger parent's close logic)
  onCloseComplete: () => void; // Called when fade-out animation finishes
  children?: React.ReactNode;
};

export interface CommonAlertModalContentPropsType {
  title: string;
  content: string;
}
export interface ModalContentsType {
  title: string; // Modal title
  content: string; // Modal content
}
export interface CommonAlertModalPropsType {
  isOpen: boolean; // 모달 보임 상태 제어 (부모로부터 받음)
  buttonLabel: string; // 버튼 라벨
  onClose: () => void; // 모달 닫기 요청 시 호출 (배경 클릭, 버튼 클릭)
  modalContent: ModalContentsType;
}
