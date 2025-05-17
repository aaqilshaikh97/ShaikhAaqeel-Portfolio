import React from "react";
import Grid from "@mui/material/Grid";
import Card from "../../../components/common/Card/Card";
import Typography from "../../../components/common/Typography/Typography";
import { colors } from "../../../styles/constants/colors";
import { spacing } from "../../../styles/constants/spacing";
import { fontSizes } from "../../../styles/constants/fontSizes";
import { shadows } from "../../../styles/constants/shadows";
import { borders } from "../../../styles/constants/borders";
import { Icons } from "../../../assets/icons/icons";
import { Box } from "@mui/material";

const whatIDoItems = [
  {
    icon: <Icons.web />,
    title: "Web development",
    description:
      "Crafting modern, responsive, and high-performance websites tailored to your business needs.",
  },
  {
    icon: <Icons.mobile />,
    title: "Mobile apps",
    description:
      "Building sleek, high-performance mobile applications for both iOS and Android platforms.",
  },
];

const WhatIDo: React.FC = () => {
  return (
    <Box mt={4}>
      <Typography
        variant="h3"
        color={colors.dark}
        style={{ marginBottom: spacing.xs }}
      >
        What I am Doing
      </Typography>

      <Grid container spacing={2}>
        {whatIDoItems.map((item, index) => (
          <Grid size={{ xs: 12, md: 6, sm: 6 }} key={index}>
            <Card
              shadow={shadows.medium}
              borderColor={borders.thin}
              bgColor={colors.white}
              style={{
                position: "relative",
                backgroundColor: colors.white,
                width: "90%",
                height: "130px",
                borderRadius: borders.rounded,
                padding: spacing.sm,
                overflow: "hidden",
                wordWrap: "break-word",
                whiteSpace: "normal",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    color: colors.primary,
                    fontSize: fontSizes.lg,
                  }}
                >
                  {React.cloneElement(item.icon, {
                    style: { fontSize: "2rem" },
                  })}
                </div>

                <div>
                  <Typography
                    variant="h3"
                    color={colors.black}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontSize: fontSizes.md,
                      marginBottom: spacing.none,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body"
                    color={colors.gray}
                    style={{
                      marginTop: spacing.none,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {item.description}
                  </Typography>
                </div>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhatIDo;
