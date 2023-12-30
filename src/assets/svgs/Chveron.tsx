import { FC } from "react";
import { IChevron } from "../../shared/interfaces";

const Chveron: FC<IChevron> = ({
  className = "",
  color = "black",
  isColorCssVar = false,
  size = "100",
  direction,
  onClick,
}) => {
  const fillColor = isColorCssVar ? `var(${color})` : color;
  return (
    <svg
      onClick={onClick}
      fill={fillColor}
      width={`${size}`}
      height={`${size}`}
      // viewBox="0 0 24 24"
      viewBox="3 0 256 512"
      className={className}
      x="0px"
      y="0px"
    >
      {direction === "right" ? (
        <path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z" />
      ) : (
        <path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z" />
      )}
    </svg>
  );
};

export default Chveron;
