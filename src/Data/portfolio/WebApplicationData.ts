import sbstLogo from "../../assets/images/portfolio/sbst/sbs-transit-logo.png";
import sbstDashboardPreview from "../../assets/images/portfolio/sbst/dashboard.png";
import sbstLoginPreview from "../../assets/images/portfolio/sbst/login.png";
import sbstManagementPreview from "../../assets/images/portfolio/sbst/management.png";
import sbstAdvertisementPreview from "../../assets/images/portfolio/sbst/advertisement.png";
import sbstAnnouncementPreview from "../../assets/images/portfolio/sbst/annoucement.png"; // Fix spelling in file name too
import sbstCustomizationPreview from "../../assets/images/portfolio/sbst/customization1.png";
import sbstMapsPreview from "../../assets/images/portfolio/sbst/maps.png";
import sbstNavigationPreview from "../../assets/images/portfolio/sbst/navigation.png";
import sbstPoiPreview from "../../assets/images/portfolio/sbst/POI.png";
import sbstUsersPreview from "../../assets/images/portfolio/sbst/users.png";
import sbstVideoCallRecordingPreview from "../../assets/images/portfolio/sbst/videocall.png";
import sbstVideoCallDemoPreview from "../../assets/images/portfolio/sbst/VideoCallDemo.png";

import NsBotLogo from "../../assets/images/portfolio/nsbot/NSBOT_logo.png";
import NsBotManagementScreen from "../../assets/images/portfolio/nsbot/managementScreen.png";
import NsBotDashboardScreen from "../../assets/images/portfolio/nsbot/dashboard.png";
import NsBotMapsScreen from "../../assets/images/portfolio/nsbot/maps.png";
import NsBotCustomizationScreen from "../../assets/images/portfolio/nsbot/customization.png";
import NsBotLoginScreen from "../../assets/images/portfolio/nsbot/login.png";
import NsBotSettingsScreen from "../../assets/images/portfolio/nsbot/setting.png";
import NsBotUsersScreen from "../../assets/images/portfolio/nsbot/users.png";

export interface WebApplicationData {
  id: number;
  images: string[];
  name: string;
  category: string;
  Description: string;
  url: string;
  Logo: string;
}

export const WebApplicationProjects: WebApplicationData[] = [
  {
    id: 1,
    Logo: sbstLogo,

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
    category: "Dashboard and Analytics Platform ",
    url: "https://uathfi.nsbot.sg:3000/authentication/sign-in",
    Description:
      "Developed a comprehensive web-based platform for managing autonomous robots and user permissions, incorporating real-time analytics, POI (Point of Interest) navigation, and video call functionality. The platform enables precise control over robot behavior and access rights, ensuring secure and efficient operation. Configured POIs to facilitate accurate and dynamic robot navigation within predefined environments. Built intuitive dashboards that deliver real-time performance insights, allowing for data-driven monitoring and decision-making. Additionally, implemented robot personalization features to enhance user experience and integrated video call capabilities for direct communication and remote assistance",
  },
  {
    id: 2,
    Logo: NsBotLogo,

    images: [
      NsBotDashboardScreen,
      NsBotManagementScreen,
      NsBotLoginScreen,
      NsBotMapsScreen,
      NsBotSettingsScreen,
      NsBotUsersScreen,
      NsBotCustomizationScreen,
    ],
    name: "NSBOT Management System",
    category: "IoT and Robotics Integration",
    url: "https://app.nsbot.sg:3000/auth/login",
    Description:
      "Developed a robust and interactive React.js-based web application designed to manage and monitor autonomous robots in real-time. The platform provides comprehensive robot oversight, including live status updates, sensor data visualization, and real-time location tracking on integrated maps. It features a dynamic dashboard to manage visit screens and POIs (Points of Interest), allowing precise navigation control.Users can schedule robot movements, customize behaviors such as playing music, and broadcast targeted advertisements and announcements directly through the robots. The system supports map-based route planning and personalized configurations to enhance both operational efficiency and user engagement. Built with a scalable and modular architecture, the application also includes features like user access control, setting management, and performance analytics, offering a seamless interface for managing complex robot operations.",
  }
];
