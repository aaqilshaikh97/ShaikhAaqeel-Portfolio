import { useState } from "react";
import Card from "../../components/common/Card/Card";
import { colors } from "../../styles/constants/colors";
import { shadows } from "../../styles/constants/shadows";
import { borders } from "../../styles/constants/borders";
import { spacing } from "../../styles/constants/spacing";
import Typography from "../../components/common/Typography/Typography";
import Navbar from "../../components/common/layout/Navbar";
import Button from "../../components/common/Button/Button";
import AppDev from "./components/MobileApplication";
import WebDev from "./components/WebApplication";
import { fontSizes } from "../../styles/constants/fontSizes";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "web" | "app"
  >("all");

  return (
    <>
      <>
        <Card
          shadow={shadows.heavy}
          borderColor={borders.rounded}
          bgColor={colors.lightBlue}
          padding={spacing.md}
          style={{ minHeight: "570px" }}
        >
          <Navbar />
          <Typography
            variant="h1"
            color={colors.black}
            style={{ marginBottom: spacing.sm }}
          >
            Portfolio
          </Typography>
          <div>
            <Button
              text="All "
              variant="text"
              textColor={
                selectedCategory === "all" ? colors.primary : colors.black
              }
              fontSize={fontSizes.sm}
              fontWeight="bold"
              onClick={() => setSelectedCategory("all")}
            />

            <Button
              text="Web Application"
              variant="text"
              textColor={
                selectedCategory === "web" ? colors.primary : colors.black
              }
              fontSize={fontSizes.sm}
              fontWeight="bold"
              onClick={() => setSelectedCategory("web")}
            />

            <Button
              text="Mobile Applications"
              variant="text"
              textColor={
                selectedCategory === "app" ? colors.primary : colors.black
              }
              fontSize={fontSizes.sm}
              fontWeight="bold"
              onClick={() => setSelectedCategory("app")}
            />
          </div>
        
          {(selectedCategory === "all" || selectedCategory === "app") && (
            <AppDev />
          )}
          {(selectedCategory === "all" || selectedCategory === "web") && (
            <WebDev />
          )}
        </Card>
      </>
    </>
  );
};

export default Portfolio;
