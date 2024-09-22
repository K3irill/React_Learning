import { useState } from "react";
import Button from "./Button/Button";
import { differences } from "../data";

export default function DifferencesSection() {
  const [contentType, setContent] = useState(null);

  function handleClick(type) {
    setContent(type);
  }

  // let tabContent = null;

  // if (contentType) {
  //   tabContent = <p>{differences[contentType]}</p>;
  // } else {
  //   tabContent = <p>Нажми на кнопку</p>;
  // }
  return (
    <section>
      <h3>Lorem ipsum dolor sit amet.</h3>
      <Button
        isActive={contentType === "way"}
        onClick={() => handleClick("way")}
      >
        Подход
      </Button>
      <Button
        isActive={contentType === "easy"}
        onClick={() => handleClick("easy")}
      >
        Доступность
      </Button>
      <Button
        isActive={contentType === "program"}
        onClick={() => handleClick("program")}
      >
        Концентрация
      </Button>

      {/* {contentType ? (
            <p>{differences[contentType]}</p>
          ) : (
            <p>Нажми на кнопку</p>
          )} */}
      {/* or */}
      {!contentType && <p>Нажми на кнопку</p>}
      {contentType && <p>{differences[contentType]}</p>}
      {/* or */}
      {/* {tabContent} */}
    </section>
  );
}
