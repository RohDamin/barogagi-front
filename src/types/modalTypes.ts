import type { ReactNode } from "react";

export type CommonAlertModalLayoutPropsType = {
  isVisible: boolean; // Controls animation state (true = show, false = hide)
  label: string;
  onClick: () => void; // Button/background click handler (should trigger parent's close logic)
  onCloseComplete: () => void; // Called when fade-out animation finishes
  children?: ReactNode;
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

export interface CommonConfirmModalLayoutPropsType {
  isVisible: boolean; // 애니메이션 상태 제어 (true = 보임, false = 숨김)
  confirmLabel: string; // 확인 버튼 라벨
  cancelLabel: string; // 취소 버튼 라벨
  onConfirm: () => void; // 확인 버튼 클릭 핸들러
  onCancel: () => void; // 취소 버튼 또는 배경 클릭 핸들러
  onCloseComplete: () => void; // 페이드아웃 애니메이션 완료 시 호출
  children?: ReactNode; // 모달 내용 영역
}

export interface CommonConfirmModalPropsType {
  isOpen: boolean; // 모달 보임 상태 제어 (부모로부터 받음)
  confirmLabel: string; // 확인 버튼 라벨
  cancelLabel: string; // 취소 버튼 라벨
  onClose: () => void; // 모달 닫기 요청 시 호출 (배경 클릭, 버튼 클릭)
  onConfirm: () => void; // 확인 액션 핸들러
  onCancel: () => void; // 취소 액션 핸들러
  modalContent: ModalContentsType; // 모달에 표시할 내용
}

export interface CommonConfirmModalContentPropsType {
  title: string; // 제목
  content: string; // 내용
}
