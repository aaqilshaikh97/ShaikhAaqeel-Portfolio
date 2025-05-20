import React from "react";
import SidebarProfileCard from "./SidebarProfileCard";
import { colors } from "../../../styles/constants/colors";
import { spacing } from "../../../styles/constants/spacing";
import { Box } from "@mui/material";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: "1fr 3fr",
        },
        gap: spacing.lg,
        minHeight: "100vh",
        backgroundColor: colors.background,
        p: `0 5%`,
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          padding: spacing.md,
          order: { xs: 1, md: 2 },
        }}
      >
        <SidebarProfileCard />
      </Box>
      <Box
        component="main"
        sx={{
          padding: spacing.md,
          order: { xs: 1, md: 2 },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
