import React from "react";
import { borders } from "../../../styles/constants/borders";
import { spacing } from "../../../styles/constants/spacing";
import { colors } from "../../../styles/constants/colors";
import { shadows } from "../../../styles/constants/shadows";

interface CardProps {
  children: React.ReactNode;
  padding?: string;
  margin?:string;
  bgColor?: string;
  borderColor?: string;
  borderRadius?: string;
  shadow?: string;
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({
  children,
  padding = spacing.md,
  margin = spacing.none,
  bgColor = colors.Transparent,
  borderColor = borders.none,
  borderRadius = borders.rounded,
  shadow = shadows.light,
  style = {},
}) => {
  return (
    <div
      style={{
        padding,
        margin,
        border: borderColor,
        borderRadius,
        backgroundColor: bgColor,
        boxShadow: shadow,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Card;
