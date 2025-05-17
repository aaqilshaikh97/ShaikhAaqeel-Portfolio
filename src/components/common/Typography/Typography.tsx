import React from "react";
import { fontSizes } from "../../../styles/constants/fontSizes";
import { fontWeights } from "../../../styles/constants/fontWeights";
import { colors } from "../../../styles/constants/colors";
type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "subtitle"
  | "body"
  | "caption"
  | "label";

interface TypographyProps {
  variant?: Variant;
  children: React.ReactNode;
  color?: string;
weight?: keyof typeof fontWeights;
  style?: React.CSSProperties;
}

const variantMapping: Record<Variant, React.CSSProperties> = {
  h1: { fontSize: fontSizes.xxl, fontWeight: fontWeights.extraBold },
  h2: { fontSize: fontSizes.xl, fontWeight: fontWeights.bold },
  h3: { fontSize: fontSizes.lg, fontWeight: fontWeights.medium },
  subtitle: { fontSize: fontSizes.md, fontWeight: fontWeights.medium },
  body: { fontSize: fontSizes.base, fontWeight: fontWeights.regular },
  caption: { fontSize: fontSizes.sm, fontWeight: fontWeights.light },
  label: { fontSize: fontSizes.xs, fontWeight: fontWeights.medium },
};

const Typography: React.FC<TypographyProps> = ({
  variant = "body",
  children,
  color = colors.black,
  weight,
  style = {},
}) => {
  const baseStyle = variantMapping[variant];
  const mergedStyle: React.CSSProperties = {
    ...baseStyle,
    color,
    fontWeight: weight ? fontWeights[weight] : baseStyle.fontWeight,
    ...style,
  };

  return <p style={mergedStyle}>{children}</p>;
};

export default Typography;
