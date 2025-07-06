import type { ModalContentsType } from "@/types/modalTypes";

const CommonAlertModalContent = ({ title, content }: ModalContentsType) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default CommonAlertModalContent;
