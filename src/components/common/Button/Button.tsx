import React from "react";
import MuiButton from "@mui/material/Button";
import type { SxProps } from "@mui/material/styles";
import { colors } from "../../../styles/constants/colors";
import { spacing } from "../../../styles/constants/spacing";
import { fontSizes } from "../../../styles/constants/fontSizes";

export interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: "text" | "contained" | "outlined";
  fontWeight?: "normal" | "bold" | number;
  bgColor?: string;
  textColor?: string;
  borderRadius?: string;
  padding?: string;
  margin?: string;
  className?: string;
  fullWidth?: boolean;
  outlineColor?: string;
  fontSize?: string | number;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type = "button",
  disabled = false,
  variant = "contained",
  bgColor = colors.primary,
  textColor = colors.black,
  borderRadius = spacing.sm,
  padding = spacing.sm,
  margin = spacing.sm,
  className = "",
  fullWidth = false,
  outlineColor = colors.primary,
  fontWeight = "normal",
  fontSize = fontSizes.sm,
}) => {
  const sx: SxProps = {
    ...(variant === "contained" && bgColor ? { backgroundColor: bgColor } : {}),
    ...(textColor && { color: textColor }),
    ...(variant === "outlined" && outlineColor
      ? { borderColor: outlineColor, color: outlineColor }
      : {}),
    ...(borderRadius && { borderRadius }),
    ...(padding && { padding }),
    ...(margin && { margin }),
    ...(fontSize && { fontSize }),
    fontWeight: fontWeight,
    "&:hover": {
      ...(variant === "contained" && bgColor
        ? { backgroundColor: bgColor }
        : {}),
      ...(variant === "outlined" && outlineColor
        ? { borderColor: outlineColor }
        : {}),
    },
  };

  return (
    <MuiButton
      type={type}
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      sx={sx}
      className={className}
      fullWidth={fullWidth}
    >
      {text}
    </MuiButton>
  );
};

export default Button;
