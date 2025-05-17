import { Link, useLocation } from "react-router-dom";
import { colors } from "../../../styles/constants/colors";
import { spacing } from "../../../styles/constants/spacing";
import { fontSizes } from "../../../styles/constants/fontSizes";
import { fontWeights } from "../../../styles/constants/fontWeights";
import { shadows } from "../../../styles/constants/shadows";
import { borders } from "../../../styles/constants/borders";

const Navbar = () => {
  const location = useLocation();

  const menuItems = [
    { label: "About", path: "/" },
    { label: "Resume", path: "/resume" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <div
      style={{
        backgroundColor: colors.white,
        display: "flex",
        justifyContent: "end",
        gap: spacing.lg,
        padding: `${spacing.md} ${spacing.xl}`,
        borderRadius: borders.rounded,
        boxShadow: shadows.heavy,
        width: "fit-content",
        marginLeft: "auto",
        marginRight: spacing.none,
      }}
    >
      {menuItems.map((item) => (
        <Link
          to={item.path}
          key={item.path}
          style={{
            textDecoration: "none",
            fontSize: fontSizes.md,
            fontWeight: fontWeights.bold,
            color:
              location.pathname === item.path
                ? colors.dark
                : colors.black,
            borderBottom:
              location.pathname === item.path
                ? `2px solid ${colors.primary}`
                : "none",
            paddingBottom: "4px",
            cursor: "pointer",
          }}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
