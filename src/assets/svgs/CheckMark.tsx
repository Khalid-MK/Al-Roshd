import { FC } from "react";
import { ISVGIcon } from "../../shared/interfaces";

const CheckMark: FC<ISVGIcon> = ({
  className = "",
  color = "black",
  isColorCssVar = false,
  size = "100",
}) => {
  const fillColor = isColorCssVar ? `var(${color})` : color;
  return (
    <svg
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
      width={`${size}`}
      height={`${size}`}
      viewBox="0 0 15.81 17.87"
      className={className}
    >
      <title>Vector</title>
      <path d="M1.6,3.66H9.45l1-1.6L0,2v8.15L1.6,8.53Zm0,11.39s0-.21,0-.55,0-.72,0-1.11v-.78L0,10.17v6.48l4.65,0c-.31-.49-.68-1-1.11-1.64Zm12.19,0H9L8,16.69l7.43,0V5.3L13.79,6.9ZM13,0,6.29,11.39,4.42,8.15,1.6,9.75l4.65,8.12L15.81,1.64Z"></path>
    </svg>
  );
};

export default CheckMark;
