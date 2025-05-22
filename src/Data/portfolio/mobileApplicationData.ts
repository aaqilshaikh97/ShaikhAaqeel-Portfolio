import safeWheelsLogo from "../../assets/images/portfolio/SafeWheels/SafeWheelsSchoolRide.jpg";
import SafeWheelsHome from "../../assets/images/portfolio/SafeWheels/home.png";
import SafeWheelsActivity from "../../assets/images/portfolio/SafeWheels/activity.png";
import SafeWheelsContact from "../../assets/images/portfolio/SafeWheels/contact.png";
import SafeWheelsProfile from "../../assets/images/portfolio/SafeWheels/profile.png";
import SafeWheelsSetting from "../../assets/images/portfolio/SafeWheels/setting.png";
import SafeWheelsNotification from "../../assets/images/portfolio/SafeWheels/notificationControl.png";
import SafeWheelsChild from "../../assets/images/portfolio/SafeWheels/child.png";
import SafeWheelsChildDetails from "../../assets/images/portfolio/SafeWheels/childDetails.png";
import SafeWheelsContactSupport from "../../assets/images/portfolio/SafeWheels/contactSupport.png";
import SafeWheelsGuardian from "../../assets/images/portfolio/SafeWheels/guardian.png";
import SafeWheelsMap from "../../assets/images/portfolio/SafeWheels/map.png";
import SafeWheelsTripDetails from "../../assets/images/portfolio/SafeWheels/tripDetails.png";
import SafeWheelsUpdateGuardian from "../../assets/images/portfolio/SafeWheels/updateGuardian.png";
import safeWheelsLogin from "../../assets/images/portfolio/SafeWheels/login.png";

import DriverLogo from "../../assets/images/portfolio/SafewheelsDriver/SafewheelsDriver.jpg";
import DriverHome from "../../assets/images/portfolio/SafewheelsDriver/home.jpg";
import DriverActivity from "../../assets/images/portfolio/SafewheelsDriver/activity.jpg";
import DriverMap from "../../assets/images/portfolio/SafewheelsDriver/maps.jpg";
import DriveProfile from "../../assets/images/portfolio/SafewheelsDriver/profile.jpg";
import DriverTripDetails from "../../assets/images/portfolio/SafewheelsDriver/tripDetails.jpg";
import DriverTrips from "../../assets/images/portfolio/SafewheelsDriver/trips.jpg";

import FoodsyLogo from "../../assets/images/portfolio/foodsy/foodsyIndia.jpg";
import FoodsyAccountScreen from "../../assets/images/portfolio/foodsy/account.jpg";
import FoodsyHomeScreen from "../../assets/images/portfolio/foodsy/home.jpg";
import FoodsyMenuScreen from "../../assets/images/portfolio/foodsy/menu.jpg";
import FoodsyOrderScreen from "../../assets/images/portfolio/foodsy/order.jpg";

import SellerLogo from "../../assets/images/portfolio/foodsy-india-seller/sellerLogo.jpg";
import SellerHomeScreen from "../../assets/images/portfolio/foodsy-india-seller/home.jpg";
import SellerDashboardScreen from "../../assets/images/portfolio/foodsy-india-seller/dashboard.jpg";
import SellerItemScreen from "../../assets/images/portfolio/foodsy-india-seller/item.jpg";
import SellerOrderScreen from "../../assets/images/portfolio/foodsy-india-seller/order.jpg";

import DeliveryLogo from "../../assets/images/portfolio/foodsy-india-delivery/deliveryLogo.jpg";
import DeliveryHomeScreen from "../../assets/images/portfolio/foodsy-india-delivery/home.jpg";
import DeliveryDashboardScreen from "../../assets/images/portfolio/foodsy-india-delivery/dashboard.jpg";
import DeliveryOrderScreen from "../../assets/images/portfolio/foodsy-india-delivery/order.jpg";
import DeliveryOrderDetailsScreen from "../../assets/images/portfolio/foodsy-india-delivery/orderdetails.jpg";
import DeliveryProfileScreen from "../../assets/images/portfolio/foodsy-india-delivery/profile.jpg";

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
  {
    id: 4,
    Logo: DeliveryLogo,

    images: [
      DeliveryHomeScreen,
      DeliveryDashboardScreen,
      DeliveryOrderDetailsScreen,
      DeliveryOrderScreen,
      DeliveryProfileScreen,
    ],
    name: "Foodsy India - Delivery",
    category: "Food & Drink",
    url: "https://play.google.com/store/apps/details?id=com.foodsy.delivery&hl=en",
    Description:
      "Foodsy India is a food and grocery delivery application that enables users to order meals and daily essentials from nearby sellers, restaurants, and stores. The app offers a seamless experience for browsing various cuisines and products, placing orders, and tracking deliveries in real time. Users can search by their favorite dishes, restaurant brands, or dietary preferences, and filter results based on fastest delivery time, top ratings, and more. The platform supports both immediate and scheduled deliveries, along with a convenient pick-up option. A dedicated offers section provides access to exclusive discounts. Additionally, real-time tracking allows users to follow their order from preparation to delivery, including live updates on the rider’s location. Foodsy India includes separate interfaces for sellers to manage their listings and orders, and for delivery partners to track and fulfill deliveries efficiently.",
  },
  {
    id: 5,
    Logo: SellerLogo,

    images: [
      SellerHomeScreen,
      SellerDashboardScreen,
      SellerItemScreen,
      SellerOrderScreen,
    ],
    name: "Foodsy India Seller",
    category: "Food & Drink",
    url: "https://play.google.com/store/apps/details?id=com.foodsy.seller&hl=en",
    Description:
      "Foodsy India is a user-friendly food and grocery delivery application designed to connect users with local sellers and restaurants in their vicinity. It allows customers to conveniently order meals, beverages, and essential grocery items from nearby sources. The app brings together a diverse range of food experiences, from local joints and favorite cafes to premium and elite restaurants, all within a limited service area. Users can easily search for their favorite cuisines, dishes, or restaurant brands, and apply filters based on dietary needs, delivery speed, and customer ratings. Foodsy India also supports scheduled orders, in-store pickup, and provides access to top deals through its dedicated offers section. A real-time order tracker enhances the customer experience by allowing users to monitor food preparation, receive alerts when the delivery rider is nearby, and even share tracking details for group orders. The platform is thoughtfully designed to offer seamless experiences for customers, sellers, and delivery partners alike.",
  },
];
