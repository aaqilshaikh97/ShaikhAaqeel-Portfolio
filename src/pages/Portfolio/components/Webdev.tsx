import { useState } from "react";
import Card from "../../../components/common/Card/Card";
import { colors } from "../../../styles/constants/colors";
import { shadows } from "../../../styles/constants/shadows";
import { borders } from "../../../styles/constants/borders";
import { spacing } from "../../../styles/constants/spacing";
import Typography from "../../../components/common/Typography/Typography";
import SafeWheels from "../../../assets/images/portfolio/ejobster.png";
import { imageSizes } from "../../../styles/constants/imageSizes";
import Grid from "@mui/material/Grid";
import AppDetails from "./AppDetails";

import sbstDashboardPreview from "../../../assets/images/portfolio/sbst/dashboard.png";
import sbstLoginPreview from "../../../assets/images/portfolio/sbst/login.png";
import sbstManagementPreview from "../../../assets/images/portfolio/sbst/management.png";
import sbstAdvertisementPreview from "../../../assets/images/portfolio/sbst/advertisement.png";
import sbstAnnouncementPreview from "../../../assets/images/portfolio/sbst/annoucement.png"; // Fix spelling in file name too
import sbstCustomizationPreview from "../../../assets/images/portfolio/sbst/customization1.png";
import sbstMapsPreview from "../../../assets/images/portfolio/sbst/maps.png";
import sbstNavigationPreview from "../../../assets/images/portfolio/sbst/navigation.png";
import sbstPoiPreview from "../../../assets/images/portfolio/sbst/POI.png";
import sbstUsersPreview from "../../../assets/images/portfolio/sbst/users.png";
import sbstVideoCallRecordingPreview from "../../../assets/images/portfolio/sbst/videocall.png";
import sbstVideoCallDemoPreview from "../../../assets/images/portfolio/sbst/VideoCallDemo.png";

interface AppData {
  id: number;
  images: string[];
  name: string;
  category: string;
  Description: string;
  url: string;
}

const appProjects: AppData[] = [
  {
    id: 1,
    images: [
      sbstDashboardPreview,
      sbstLoginPreview,
      sbstManagementPreview,
      sbstAdvertisementPreview,
      sbstAnnouncementPreview,
      sbstCustomizationPreview,
      sbstMapsPreview,
      sbstNavigationPreview,
      sbstPoiPreview,
      sbstUsersPreview,
      sbstVideoCallRecordingPreview,
      sbstVideoCallDemoPreview,
    ],
    name: "SBST BOard",
    category: "Admin PAnel",
    url: "https://shaikhaaqeel.netlify.app/",
    Description: "testing for Sbst ",
  },
  {
    id: 2,
    images: [SafeWheels, SafeWheels, SafeWheels],
    name: "Foodies",
    category: "Food Delivery",
    url: "https://example.com/safewheels",
    Description: "testing for Description",
  },
  {
    id: 3,
    images: [SafeWheels, SafeWheels, SafeWheels],
    name: "FitTrack",
    category: "Health",
    url: "https://example.com/safewheels",
    Description: "testing for Description",
  },
];

const WebDev = () => {
  const [selectedProject, setSelectedProject] = useState<AppData | null>(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleCardClick = (project: AppData) => {
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
          borderColor={borders.rounded}
          bgColor={colors.white}
          padding={spacing.md}
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
            {appProjects.map((project) => (
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
                    {project.category}
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
