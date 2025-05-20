import Card from "../../components/common/Card/Card";
import { colors } from "../../styles/constants/colors";
import { shadows } from "../../styles/constants/shadows";
import { borders } from "../../styles/constants/borders";
import { spacing } from "../../styles/constants/spacing";
import Typography from "../../components/common/Typography/Typography";
import Navbar from "../../components/common/layout/Navbar";

const Contact = () => {
  return (
    <>
      <>
        <Card
          shadow={shadows.heavy}
          borderColor={borders.rounded}
          bgColor={colors.lightBlue}
          padding={spacing.md}
          style={{ minHeight: "570px" }}
        >
          <Navbar />
          <Typography
            variant="h1"
            color={colors.black}
            style={{ marginBottom: spacing.sm }}
          >
            Contact
          </Typography>
          <Typography
            variant="body"
            color={colors.black}
            style={{ marginBottom: spacing.sm }}
          >
            We are currently working on this section. Please check back soon.{" "}
          </Typography>
        </Card>
      </>
    </>
  );
};

export default Contact;
