import { useState } from "react";
import Warning from "./Warning";

type Props = {
  text: string;
  setText: (text: string) => void;
};

export default function Textarea({ text, setText }: Props) {
  const [warningText, setWarningText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let newText = e.target.value;

    if (newText.includes("<script>")) {
      setWarningText("No <script> allowed!");
      newText = newText.replace("<script>", "");
    } else if (newText.includes("</script>")) {
      setWarningText("No </script> allowed!");
      newText = newText.replace("</script>", "");
    } else {
      setWarningText("");
    }

    setText(newText);
  };

  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter your text"
        spellCheck="false"
      />
      {warningText && <Warning warningText={warningText} />}
    </div>
  );
}
