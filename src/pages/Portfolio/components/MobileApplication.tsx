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
import type { MobileApplicationData } from "./mobileApplicationData";
import { MobileApplicationProject } from "./mobileApplicationData";

const MobileApplication = () => {
  const [selectedProject, setSelectedProject] =
    useState<MobileApplicationData | null>(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleCardClick = (project: MobileApplicationData) => {
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
            Mobile Applications
          </Typography>
          <Grid container spacing={1}>
            {MobileApplicationProject.map((project) => (
              <Grid size={{ xs: 12, md: 4, sm: 4 }} key={project.id} sx={{}}>
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
                      ...imageSizes.appImage,
                      objectFit: "cover",
                      margin: spacing.none,
                      borderRadius: spacing.md,
                      border: borders.thin,
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: spacing.xs,
                      paddingLeft: spacing.sm,
                    }}
                  >
                    <img
                      src={project.Logo}
                      alt={`${project.name} logo`}
                      style={{
                        ...imageSizes.extraSmall,
                        borderRadius: borders.rounded,
                        marginRight: spacing.sm,
                        border: borders.thin,
                      }}
                    />
                    <div>
                      <Typography
                        variant="subtitle"
                        color={colors.black}
                        weight="bold"
                        style={{
                          marginBottom: spacing.none,
                          marginTop: spacing.xs,
                          marginLeft: spacing.sm,
                          overflow: "hidden",
                        }}
                      >
                        {truncateText(project.name)}
                      </Typography>
                      <Typography
                        variant="body"
                        color={colors.subtitle}
                        style={{ margin: spacing.none, marginLeft: spacing.sm }}
                      >
                        {truncateText(project.category)}
                      </Typography>
                    </div>
                  </div>
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

export default MobileApplication;
