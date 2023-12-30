import { FC } from "react";
import styles from "./index.module.css";

interface ITestmonials {
  containerStyle?: string;
  contentStyle?: string;
  content?: string;
  color?: string;
  textColor?: string;
}

const Testmonials: FC<ITestmonials> = ({
  containerStyle,
  contentStyle,
  content,
  color = "black",
  textColor = "white",
}) => {
  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className={`${styles.container} ${containerStyle}`}
    >
      <div
        style={{ borderTop: `1rem solid ${color}` }}
        className={styles.arrow}
      ></div>
      <p style={{ color: `${textColor}` }} className={`${contentStyle}`}>
        {content}
      </p>
    </div>
  );
};

export default Testmonials;
