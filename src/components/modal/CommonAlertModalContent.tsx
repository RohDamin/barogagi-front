interface CommonAlertModalContentProps {
  title: string;
  content: string;
}

const CommonAlertModalContent = ({
  title,
  content,
}: CommonAlertModalContentProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default CommonAlertModalContent;
