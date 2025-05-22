import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "../../../components/common/Card/Card";
import Typography from "../../../components/common/Typography/Typography";
import { colors } from "../../../styles/constants/colors";
import { spacing } from "../../../styles/constants/spacing";

import { imageSizes } from "../../../styles/constants/imageSizes";
import { borders } from "../../../styles/constants/borders";
import { shadows } from "../../../styles/constants/shadows";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { testimonials } from "../../../Data/About/testimonials";
import type { TestimonialItemProps } from "../../../Data/About/testimonials";

const truncateText = (text: string, wordLimit = 20) => {
  const words = text.split(" ");
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(" ") + " ...";
};

const TestimonialItem = ({
  image,
  name,
  feedback,
  onClick,
}: TestimonialItemProps) => (
  <div onClick={onClick} style={{ cursor: "pointer", position: "relative", paddingTop: spacing.md }}>
    <Card
      padding={spacing.sm}
      margin={spacing.none}
      borderColor={borders.thin}
      shadow={shadows.medium}
      style={{
        position: "relative",
        backgroundColor: colors.white,
        paddingTop: spacing.lg,
        paddingLeft: spacing.sm,
        width: "90%",
        borderRadius: borders.rounded,
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          position: "absolute",
          top: "-30px",
          left: "20px",
          ...imageSizes.small,
          borderRadius: borders.roundedFull,
          border: borders.normal,
          objectFit: "cover",
          boxShadow: shadows.light,
          backgroundColor: colors.white,
        }}
      />
      <div>
        <Typography
          variant="subtitle"
          color={colors.black}
          style={{ marginBottom: spacing.xs }}
        >
          {name}
        </Typography>
        <Typography
          variant="body"
          color={colors.gray}
          style={{ marginTop: spacing.none }}
        >
          {truncateText(feedback, 20)}
        </Typography>
      </div>
    </Card>
  </div>
);


const TestimonialCard: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedFeedback, setSelectedFeedback] = useState("");
  const [selectedName, setSelectedName] = useState("");

  const handleOpen = (name: string, feedback: string) => {
    setSelectedName(name);
    setSelectedFeedback(feedback);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 12,sm:12 }}>
          <Typography
            variant="h3"
            color={colors.dark}
            style={{ marginBottom: spacing.none }}
          >
            Testimonials
          </Typography>
        </Grid>

        {testimonials.map((testimonial, index) => (
          <Grid size={{ xs: 12, md: 6,sm:6 }} key={index}>
            <TestimonialItem
              {...testimonial}
              onClick={() => handleOpen(testimonial.name, testimonial.feedback)}
            />
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <Typography
            variant="subtitle"
            color={colors.dark}
            style={{ marginBottom: spacing.xs }}
          >
            {selectedName}
          </Typography>
          <Typography variant="body" color={colors.gray}>
            {selectedFeedback}
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TestimonialCard;
