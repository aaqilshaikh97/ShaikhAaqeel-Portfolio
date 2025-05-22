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
import SafeWheels from "../../assets/images/portfolio/ejobster.png";

export interface WebApplicationData {
  id: number;
  images: string[];
  name: string;
  category: string;
  Description: string;
  url: string;
}

export const WebApplicationProjects: WebApplicationData[] = [
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
    name: "FitTrack FitTrack FitTrack FitTrack ",
    category: "Health FitTrackFitTrackFitTrack",
    url: "https://example.com/safewheels",
    Description: "testing for Description",
  },
];
