
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { imageSizes } from "../../../styles/constants/imageSizes";
import { spacing } from "../../../styles/constants/spacing";
import { colors } from "../../../styles/constants/colors";
import { clients  } from "../../../Data/About/clients";
// import NSBOTLogo from "../../../assets/images/clients/NSBOT_logo.png";
// import FaimsoftLogo from "../../../assets/images/clients/faimsoft-imag-removebg-preview.png";
// import SBSTLogo from "../../../assets/images/clients/sbs_logo.png";
// import EJobsterLogo from "../../../assets/images/clients/ejobster_logo.png";
// import FoodsyLogo from "../../../assets/images/clients/foodsy.png";

// const clients = [
//   { name: "NSBOT", logo: NSBOTLogo },
//   { name: "Faimsoft", logo: FaimsoftLogo },
//   { name: "SBST", logo: SBSTLogo },
//   { name: "EJobster", logo: EJobsterLogo },
//   { name: "Foodsy", logo: FoodsyLogo },
// ];

const Client = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div style={{ padding: spacing.sm, maxWidth: "800px", margin: spacing.lg }}>
      <style>{`
        .slick-prev,
        .slick-next {
          width: 30px;
          height: 30px;
          z-index: 1;
        }

        .slick-prev:before,
        .slick-next:before {
          color: ${colors.primary};
          font-size: 40px;
          opacity: 1 !important;
        }

        .slick-prev:hover:before,
        .slick-next:hover:before {
          color: ${colors.secondary};
        }
      `}</style>

      <Slider {...settings}>
        {clients.map((client, index) => (
          <div key={index}>
            <div
              style={{
                ...imageSizes.large,
                padding: spacing.md,
                overflow: "hidden",
                borderRadius: "15px",
              }}
            >
              <img
                src={client.logo}
                alt={client.name}
                loading="lazy"
                style={{
                  ...imageSizes.large,
                  objectFit: "contain",
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Client;
