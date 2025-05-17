
import Navbar from "../../components/common/layout/Navbar";
import Card from "../../components/common/Card/Card";
import { colors } from "../../styles/constants/colors";
import { shadows } from "../../styles/constants/shadows";
import { borders } from "../../styles/constants/borders";

const Portfolio = () => {
  return (
    <>
      <Card
        shadow={shadows.heavy}
        borderColor={borders.rounded}
        bgColor={colors.danger}
      >
        <Navbar />
        <h1>Portfolio page</h1>
      </Card>
    </>
  );
};

export default Portfolio;
