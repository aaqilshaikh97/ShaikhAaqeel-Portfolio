// src/pages/About/components/AboutDescription.tsx
import React from "react";
import Card from "../../../components/common/Card/Card";
import Typography from "../../../components/common/Typography/Typography";
import { colors } from "../../../styles/constants/colors";
import { spacing } from "../../../styles/constants/spacing";
import { shadows } from "../../../styles/constants/shadows";
import { borders } from "../../../styles/constants/borders";
import { aboutContent } from "./Content";
import Navbar from "../../../components/common/layout/Navbar";

const AboutDescription: React.FC = () => {
  return (
    <Card
      shadow={shadows.none}
      borderColor={borders.rounded}
      // bgColor={colors.white}
      padding={spacing.md}
    >
      <Navbar />
      <Typography
        variant="h1"
        color={colors.black}
        style={{ marginBottom: spacing.sm }}
      >
        {aboutContent.heading}
      </Typography>

      {aboutContent.paragraphs.map((paragraph, index) => (
        <Typography key={index} variant="body" color={colors.gray}>
          {paragraph}
        </Typography>
      ))}
    </Card>
  );
};

export default AboutDescription;
