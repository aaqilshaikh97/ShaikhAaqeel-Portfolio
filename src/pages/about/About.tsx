import Card from "../../components/common/Card/Card";
import { colors } from "../../styles/constants/colors";
import { shadows } from "../../styles/constants/shadows";
import { borders } from "../../styles/constants/borders";
import { spacing } from "../../styles/constants/spacing";
import TestimonialCard from "./components/TestimonialCard";
import AboutDescription from "./components/AboutDescription";
import WhatIDo from "./components/WhatIDo";
import Client from "./components/Client";

const About = () => {
  return (
    <>
      <>
        <Card
          shadow={shadows.heavy}
          borderColor={borders.rounded}
          bgColor={colors.lightBlue}
          padding={spacing.md}
        >
          <AboutDescription />
          <WhatIDo />
          <TestimonialCard />
          <Client />
        </Card>
      </>
    </>
  );
};

export default About;
