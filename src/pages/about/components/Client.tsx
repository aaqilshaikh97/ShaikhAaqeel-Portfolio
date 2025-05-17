import Card from "../../../components/common/Card/Card";
import { colors } from "../../../styles/constants/colors";
import { shadows } from "../../../styles/constants/shadows";
import { borders } from "../../../styles/constants/borders";
import { spacing } from "../../../styles/constants/spacing";
import Typography from "../../../components/common/Typography/Typography";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";

const Client = () => {
  return (
    <>
        <Box mt={4}>
 <Typography
            variant="h3"
            color={colors.dark}
        style={{ marginBottom: spacing.xs }}
          >
            Clients
          </Typography>
                <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 12, sm: 12 }} >

        <Card
          shadow={shadows.heavy}
          borderColor={borders.rounded}
          bgColor={colors.white}
          padding={spacing.md}
          margin={spacing.sm}
          style={{width:"90%"}}
        >

          Client 1
        </Card>
        </Grid>
        </Grid>
        </Box>
    </>
  );
};

export default Client;
