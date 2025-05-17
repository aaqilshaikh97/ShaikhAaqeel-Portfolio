import React from "react";
import type { CSSProperties, ReactNode } from "react";
import { colors } from "../../../styles/constants/colors";
import { spacing } from "../../../styles/constants/spacing";
import { shadows } from "../../../styles/constants/shadows";
import { borders } from "../../../styles/constants/borders";

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  padding?: string;
  margin?: string;
  backgroundColor?: string;
  borderRadius?: string;
  boxShadow?: string;
  style?: CSSProperties;
}

const Box: React.FC<BoxProps> = ({
  children,
  padding = spacing.none,
  backgroundColor = colors.white,
  borderRadius = borders.rounded,
  boxShadow = shadows.none,
  margin = spacing.none,

  style = {},
  ...rest
}) => {
  return (
    <div
      style={{
        padding,
        backgroundColor,
        borderRadius,
        boxShadow,
        margin,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Box;
