import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Typography from "../../../components/common/Typography/Typography";
import { colors } from "../../../styles/constants/colors";
import { spacing } from "../../../styles/constants/spacing";
import { imageSizes } from "../../../styles/constants/imageSizes";
import { borders } from "../../../styles/constants/borders";
import Grid from "@mui/material/Grid";

interface AppDetailsProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  images: string[];
  url?: string;
}

const WebApplicationDetails: React.FC<AppDetailsProps> = ({
  open,
  onClose,
  title,
  description,
  images,
  url,
}) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogContent>
        <Typography
          variant="h2"
          color={colors.black}
          style={{
            marginBottom: spacing.none,
            marginTop: spacing.xs,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body"
          color={colors.gray}
          style={{ marginBottom: spacing.md }}
        >
          {description}
        </Typography>
        <Typography variant="body" color={colors.primary}>
          <a href={url} target="_blank" rel="noopener noreferrer">
            Visit Project
          </a>
        </Typography>
        <Grid container spacing={1}>
          {images.map((img, idx) => (
            <Grid size={{ xs: 6, md: 4, sm: 4 }} key={idx}>
              <img
                src={img}
                alt={`preview-${idx}`}
                style={{
                  ...imageSizes.webImage,
                  border: borders.thin,
                  objectFit: "cover",
                  borderRadius: borders.rounded,
                  display: "block",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default WebApplicationDetails;
