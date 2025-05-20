// src/components/common/Dialog/AppDetails.tsx
import React from "react";
import Dialog from "@mui/material/Dialog";
// import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Typography from "../../../components/common/Typography/Typography";
import { colors } from "../../../styles/constants/colors";
import { spacing } from "../../../styles/constants/spacing";
import { imageSizes } from "../../../styles/constants/imageSizes";
import { borders } from "../../../styles/constants/borders";

interface AppDetailsProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  images: string[];
  url?: string;
}

const AppDetails: React.FC<AppDetailsProps> = ({
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
        <div style={{ display: "flex", flexWrap: "wrap", gap: spacing.sm }}>
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`preview-${idx}`}
              style={{
                ...imageSizes.appImage,
                border:borders.thin,
                objectFit: "cover",
                borderRadius: borders.rounded,
              }}
            />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AppDetails;
