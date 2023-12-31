import { ReactNode } from "react";
import { SocialMediaIconType } from "./types";

export interface ISVGIcon {
  color?: string;
  isColorCssVar?: boolean;
  size?: string;
  className?: string;
}

export interface ISocialMediaSVGIcon extends ISVGIcon {
  type: SocialMediaIconType;
}

export interface IChevron extends ISVGIcon {
  direction: "left" | "right";
  onClick?: () => null;
}

export interface IEqualParts {
  firstComp: ReactNode;
  secondComp: ReactNode;
  className?: string;
}

export interface ICarousel {
  CarouselItems?: ReactNode;
}
