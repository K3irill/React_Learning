import { useState } from "react";

import styles from "./EmailEditor.module.scss";
import { Bold, Eraser, Italic, Underline } from "lucide-react";

export function EmailEditor() {
  return (
    <div>
      <h1>Email Editor</h1>
      <div className={styles.card}>
        <div className={styles.editor}>
          Hey! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Temporibus autem provident nostrum, magnam deleniti suscipit quasi
          quidem iusto veritatis distinctio modi eveniet totam amet velit
          aliquam unde esse repellat expedita illum repellendus perspiciatis
          vero dolore, natus adipisci! Incidunt, qui praesentium.
        </div>
        <div className={styles.actions}>
          <div className={styles.tools}>
            <button>
              <Eraser size={17}/>
            </button>
            <button>
              <Bold size={17}/>
            </button>
            <button>
              <Italic size={17}/>
            </button>
            <button>
              <Underline size={17}/>
            </button>
          </div>
          <button>Send now</button>
        </div>
      </div>
    </div>
  );
}
