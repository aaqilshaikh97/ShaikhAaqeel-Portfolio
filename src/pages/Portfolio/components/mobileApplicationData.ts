import safeWheelsLogo from "../../../assets/images/portfolio/SafeWheels/SafeWheelsSchoolRide.jpg";
import SafeWheelsHome from "../../../assets/images/portfolio/SafeWheels/home.png";
import SafeWheelsActivity from "../../../assets/images/portfolio/SafeWheels/activity.png";
import SafeWheelsContact from "../../../assets/images/portfolio/SafeWheels/contact.png";
import SafeWheelsProfile from "../../../assets/images/portfolio/SafeWheels/profile.png";
import SafeWheelsSetting from "../../../assets/images/portfolio/SafeWheels/setting.png";
import SafeWheelsNotification from "../../../assets/images/portfolio/SafeWheels/notificationControl.png";
import SafeWheelsChild from "../../../assets/images/portfolio/SafeWheels/child.png";
import SafeWheelsChildDetails from "../../../assets/images/portfolio/SafeWheels/childDetails.png";
import SafeWheelsContactSupport from "../../../assets/images/portfolio/SafeWheels/contactSupport.png";
import SafeWheelsGuardian from "../../../assets/images/portfolio/SafeWheels/guardian.png";
import SafeWheelsMap from "../../../assets/images/portfolio/SafeWheels/map.png";
import SafeWheelsTripDetails from "../../../assets/images/portfolio/SafeWheels/tripDetails.png";
import SafeWheelsUpdateGuardian from "../../../assets/images/portfolio/SafeWheels/updateGuardian.png";
import safeWheelsLogin from "../../../assets/images/portfolio/SafeWheels/login.png";

import DriverLogo from "../../../assets/images/portfolio/SafewheelsDriver/SafewheelsDriver.jpg";
import DriverHome from "../../../assets/images/portfolio/SafewheelsDriver/home.jpg";
import DriverActivity from "../../../assets/images/portfolio/SafewheelsDriver/activity.jpg";
import DriverMap from "../../../assets/images/portfolio/SafewheelsDriver/maps.jpg";
import DriveProfile from "../../../assets/images/portfolio/SafewheelsDriver/profile.jpg";
import DriverTripDetails from "../../../assets/images/portfolio/SafewheelsDriver/tripDetails.jpg";
import DriverTrips from "../../../assets/images/portfolio/SafewheelsDriver/trips.jpg";

import FoodsyLogo from "../../../assets/images/portfolio/foodsy/foodsyIndia.jpg";
import FoodsyAccountScreen from "../../../assets/images/portfolio/foodsy/account.jpg";
import FoodsyHomeScreen from "../../../assets/images/portfolio/foodsy/home.jpg";
import FoodsyMenuScreen from "../../../assets/images/portfolio/foodsy/menu.jpg";
import FoodsyOrderScreen from "../../../assets/images/portfolio/foodsy/order.jpg";

export interface MobileApplicationData {
  id: number;
  images: string[];
  name: string;
  category: string;
  url: string;
  Description: string;
  Logo: string;
}

export const MobileApplicationProject: MobileApplicationData[] = [
  {
    id: 1,
    Logo: safeWheelsLogo,
    images: [
      safeWheelsLogin,
      SafeWheelsHome,
      SafeWheelsActivity,
      SafeWheelsChild,
      SafeWheelsContact,
      SafeWheelsProfile,
      SafeWheelsSetting,
      SafeWheelsNotification,
      SafeWheelsChildDetails,
      SafeWheelsContactSupport,
      SafeWheelsMap,
      SafeWheelsGuardian,
      SafeWheelsTripDetails,
      SafeWheelsUpdateGuardian,
    ],
    name: "SafeWheels School Ride",
    category: "Travel & Navigation", 
    url: "https://play.google.com/store/apps/details?id=com.safewheels.app&hl=en",
    Description:
      "SafeWheels is a smart, parent-friendly app that ensures safe and reliable school transportation. It offers real-time GPS tracking of school buses, instant alerts for delays or route changes, and detailed trip logs. Parents can manage subscriptions to trusted, pre-vetted bus services and create child-specific profiles for personalized tracking. With a secure and user-friendly interface, SafeWheels enhances communication between parents, schools, and bus companies, making daily school commutes safer and stress-free.",
  },
  {
    id: 2,
    Logo: DriverLogo,

    images: [
      DriverMap,
      DriverHome,
      DriverActivity,
      DriveProfile,
      DriverTripDetails,
      DriverTrips,
    ],
    name: "SafeWheels - Driver",
    category: "Travel & Navigation", 
    url: "https://play.google.com/store/apps/details?id=com.safewheels.driver&hl=en",
    Description: `SafeWheels Driver is a key part of the SafeWheels school bus tracking ecosystem. This app enables drivers to manage and update real-time trip statuses, share live GPS locations, and send alerts for delays or route changes. It ensures smooth communication between drivers, parents, and schools, supporting safe and transparent student transportation.\n\nKey Features:\n\n- Live GPS tracking and route updates\n- Trip start/end logging\n- Instant delay or issue notifications\n- Seamless coordination with parent and school apps\n- Secure, easy-to-use interface for drivers`,
  },
  {
    id: 3,
    Logo: FoodsyLogo,

    images: [
      FoodsyHomeScreen,
      FoodsyAccountScreen,
      FoodsyMenuScreen,
      FoodsyOrderScreen,
    ],
    name: "Foodsy India Grocery Delivery",
    category: "Food & Drink", 
    url: "https://play.google.com/store/apps/details?id=com.foodsy.user&hl=en",
    Description:
      "Foodsy India is a convenient food and grocery delivery app that connects users with nearby restaurants and stores. Whether you're craving a meal, need snacks, or are running low on essentials, you can place an order anytime through the app. With real-time order tracking and the option to schedule deliveries, Foodsy India ensures a smooth and reliable experience. Plus, you can enjoy exciting offers and discounts, making your everyday needs easier to fulfill—quickly, easily, and right at your fingertips.",
  },
];
