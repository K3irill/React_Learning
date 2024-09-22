import LogoSvg from "/logo-name.svg";
import { useState } from "react";

export default function Header() {
  const [now, setNow] = useState(new Date());


    setInterval(() => {
      setNow(new Date())
    }, 1000);
  
  return (
    <header>
      <img className="logo" src={LogoSvg} alt="" />
      <h3>React Lesson</h3>
      <span>{now.toLocaleTimeString()}</span>
    </header>
  );
}
