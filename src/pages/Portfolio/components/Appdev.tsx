import { useState } from "react";
import Card from "../../../components/common/Card/Card";
import { colors } from "../../../styles/constants/colors";
import { shadows } from "../../../styles/constants/shadows";
import { borders } from "../../../styles/constants/borders";
import { spacing } from "../../../styles/constants/spacing";
import Typography from "../../../components/common/Typography/Typography";
import SafeWheels from "../../../assets/images/portfolio/home-safewheels.png";
import { imageSizes } from "../../../styles/constants/imageSizes";
import Grid from "@mui/material/Grid";
import AppDetails from "./AppDetails";

import SafeWheelsHome from "../../../assets/images/portfolio/SafeWheels/home.png";
import SafeWheelsActivity from "../../../assets/images/portfolio/SafeWheels/activity.png";
import SafeWheelsContact from "../../../assets/images/portfolio/SafeWheels/contact.png";
import SafeWheelsProfile from "../../../assets/images/portfolio/SafeWheels/profile.png";
import SafeWheelsSetting from "../../../assets/images/portfolio/SafeWheels/setting.png";
import SafeWheelsNotification from "../../../assets/images/portfolio/SafeWheels/notificationControl.png";
import SafeWheelsChild from "../../../assets/images/portfolio/SafeWheels/child.png";
import SafeWheelsChildDetails from "../../../assets/images/portfolio/SafeWheels/childDetails.png";
import SafeWheelsContectSupport from "../../../assets/images/portfolio/SafeWheels/contactSupport.png";
import SafeWheelsGuardian from "../../../assets/images/portfolio/SafeWheels/guardian.png";
import SafeWheelsMap from "../../../assets/images/portfolio/SafeWheels/map.png";
import SafeWheelsTripDetails from "../../../assets/images/portfolio/SafeWheels/tripDetails.png";
import SafeWheelsUpdateGuardian from "../../../assets/images/portfolio/SafeWheels/updateGuardian.png";
import safeWheelsLogin from "../../../assets/images/portfolio/SafeWheels/login.png";

interface AppData {
  id: number;
  images: string[];
  name: string;
  category: string;
  url: string;
}

const appProjects: AppData[] = [
  {
    id: 1,
    images: [
      SafeWheelsHome,
      SafeWheelsActivity,
      SafeWheelsChild,
      SafeWheelsContact,
      SafeWheelsProfile,
      SafeWheelsSetting,
      SafeWheelsNotification,
      SafeWheelsChildDetails,
      SafeWheelsContectSupport,
      SafeWheelsMap,
      SafeWheelsGuardian,
      SafeWheelsTripDetails,
      SafeWheelsUpdateGuardian,
      safeWheelsLogin,
    ],
    name: "SafeWheels-Parent",
    category: "Transport",
    url: "https://shaikhaaqeel.netlify.app/",
  },
  {
    id: 2,
    images: [SafeWheels, SafeWheels, SafeWheels],
    name: "Foodies",
    category: "Food Delivery",
    url: "https://example.com/safewheels",
  },
  {
    id: 3,
    images: [SafeWheels, SafeWheels, SafeWheels],
    name: "FitTrack",
    category: "Health",
    url: "https://example.com/safewheels",
  },
    {
    id: 3,
    images: [SafeWheels, SafeWheels, SafeWheels],
    name: "FitTrack",
    category: "Health",
    url: "https://example.com/safewheels",
  },
    {
    id: 3,
    images: [SafeWheels, SafeWheels, SafeWheels],
    name: "FitTrack",
    category: "Health",
    url: "https://example.com/safewheels",
  },
];

const AppDev = () => {
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
            {appProjects.map((project) => (
              <Grid size={{ xs: 12, md: 3, sm: 3 }} key={project.id} sx={{}}>
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
                    style={{ margin: spacing.none, marginLeft: spacing.sm }}
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
            description={`This is the detailed view of ${selectedProject.name}.`}
            images={selectedProject.images}
            url={selectedProject.url}
          />
        )}
      </>
    </>
  );
};

export default AppDev;
