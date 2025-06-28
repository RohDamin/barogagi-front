import "./App.css";
import { useState } from "react";
import { CommonTag } from "@/components/common/tags/commonTag";
import { SelectTag } from "@/components/common/tags/SelectTag";
import CommonButton from "@/components/common/buttons/CommonButton";
import IconBox from "@/components/common/IconBox";
import TextButton from "@/components/common/buttons/TextButton";
import SmallButton from "@/components/common/buttons/SmallButton";

function App() {
  const [active, setActive] = useState<boolean>(true);
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-subtitle text-gray-black bg-main-disable font-bold p-4 rounded-card">
        테스트
      </div>
      <CommonTag
        size="small"
        label="테스트"
        isActive={active}
        onClick={() => setActive(!active)}
      />
      <SelectTag label="테스트2" onClick={() => setActive(!active)} />
      <p className="text-header leading-header tracking-header">제목</p>

      <TextButton label="일정 다시 만들기" />
      <CommonButton
        label="테스트 버튼"
        onClick={() => alert("버튼 클릭됨")}
        icon={<IconBox name="home" width={24} height={24} />}
        isDisabled={false}
      />
      <SmallButton label="테스트버튼" />
    </div>
  );
}

export default App;
