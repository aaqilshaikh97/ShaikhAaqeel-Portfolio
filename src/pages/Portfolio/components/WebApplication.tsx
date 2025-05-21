import { useState } from "react";
import Card from "../../../components/common/Card/Card";
import { colors } from "../../../styles/constants/colors";
import { shadows } from "../../../styles/constants/shadows";
import { borders } from "../../../styles/constants/borders";
import { spacing } from "../../../styles/constants/spacing";
import Typography from "../../../components/common/Typography/Typography";
import { imageSizes } from "../../../styles/constants/imageSizes";
import Grid from "@mui/material/Grid";
import AppDetails from "./AppDetails";
import truncateText from "../../../utils/truncateText";
import type { WebApplicationData } from "./WebApplicationData";
import { WebApplicationProjects } from "./WebApplicationData";

const WebDev = () => {
  const [selectedProject, setSelectedProject] =
    useState<WebApplicationData | null>(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleCardClick = (project: WebApplicationData) => {
    setSelectedProject(project);
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setSelectedProject(null);
  };

  return (
    <>
      <>
        <Card
          borderColor={borders.normal}
          shadow={shadows.none}
          bgColor={colors.Transparent}
          padding={spacing.sm}
          margin={spacing.sm}
        >
          <Typography
            variant="subtitle"
            color={colors.black}
            weight="bold"
            style={{ marginBottom: spacing.sm }}
          >
            Web Application
          </Typography>
          <Grid container spacing={2}>
            {WebApplicationProjects.map((project) => (
              <Grid size={{ xs: 12, md: 6, sm: 6 }} key={project.id}>
                <Card
                  key={project.id}
                  onClick={() => handleCardClick(project)}
                  shadow={shadows.medium}
                  borderColor={borders.rounded}
                  bgColor={colors.white}
                >
                  <img
                    src={project.images[0]}
                    alt={project.name}
                    style={{
                      ...imageSizes.webImage,
                      margin: spacing.none,
                      borderRadius: spacing.md,
                      border: borders.normal,
                      display: "block",
                    }}
                  />
                  <Typography
                    variant="subtitle"
                    color={colors.black}
                    weight="bold"
                    style={{
                      marginBottom: spacing.none,
                      marginTop: spacing.xs,
                      marginLeft: spacing.sm,
                    }}
                  >
                    {project.name}
                  </Typography>
                  <Typography
                    variant="body"
                    color={colors.subtitle}
                    style={{ marginTop: spacing.none, marginLeft: spacing.sm }}
                  >
                    {truncateText(project.category)}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Card>

        {selectedProject && (
          <AppDetails
            open={openDialog}
            onClose={handleDialogClose}
            title={selectedProject.name}
            description={selectedProject.Description}
            images={selectedProject.images}
            url={selectedProject.url}
          />
        )}
      </>
    </>
  );
};

export default WebDev;
