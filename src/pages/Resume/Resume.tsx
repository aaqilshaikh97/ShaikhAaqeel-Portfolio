import Navbar from "../../components/common/layout/Navbar";
import Card from "../../components/common/Card/Card";
import { colors } from "../../styles/constants/colors";
import { shadows } from "../../styles/constants/shadows";
import { borders } from "../../styles/constants/borders";



const Resume = () => {
  return (
    <>
      <Card
        shadow={shadows.heavy}
        borderColor={borders.rounded}
        bgColor={colors.danger}
      >
        <Navbar />
        <h1>Resume page</h1>
      </Card>
    </>
  );
};

export default Resume;
