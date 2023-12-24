import { SocialMediaIconType } from "./types";

export interface ISocialMediaSVGIcon {
  type: SocialMediaIconType;
  color?: string;
  isColorCssVar?: boolean;
  size?: string;
  className?: string;
}
