import NSBOTLogo from "../../assets/images/clients/NSBOT_logo.png";
import FaimsoftLogo from "../../assets/images/clients/faimsoft-imag-removebg-preview.png";
import SBSTLogo from "../../assets/images/clients/sbs_logo.png";
import EJobsterLogo from "../../assets/images/clients/ejobster_logo.png";
import FoodsyLogo from "../../assets/images/clients/foodsy.png";

export interface Client {
  name: string;
  logo: string;
}

export const clients: Client[] = [
  { name: "NSBOT", logo: NSBOTLogo },
  { name: "Faimsoft", logo: FaimsoftLogo },
  { name: "SBST", logo: SBSTLogo },
  { name: "EJobster", logo: EJobsterLogo },
  { name: "Foodsy", logo: FoodsyLogo },
];
