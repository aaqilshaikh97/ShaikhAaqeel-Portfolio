import React from "react";
import Card from "../Card/Card";
import ProfileImage from "../../../assets/images/A.jpg";
import { colors } from "../../../styles/constants/colors";
import { fontSizes } from "../../../styles/constants/fontSizes";
import { spacing } from "../../../styles/constants/spacing";
import { borders } from "../../../styles/constants/borders";
import { shadows } from "../../../styles/constants/shadows";
import { imageSizes } from "../../../styles/constants/imageSizes";
import { Icons } from "../../../assets/icons/icons";
import { fontWeights } from "../../../styles/constants/fontWeights";
import Box from "../Box/Box";

const SidebarProfileCard: React.FC = () => {
  return (
    <Card
      bgColor={colors.lightBlue}
      padding={spacing.lg}
      shadow={shadows.heavy}
      margin={spacing.none}
      style={{
        overflow: "hidden",
        wordWrap: "break-word",
        whiteSpace: "normal",
      }}
    >
      <div style={profileHeader}>
        <img src={ProfileImage} alt="aaqil" style={imageStyle} />
        <h2 style={nameStyle}>SHAIKH AAQEEL</h2>
        <Box
          backgroundColor={colors.primary}
          padding={spacing.none}
          boxShadow={shadows.heavy}
          margin={spacing.none}
        >
          <p style={roleStyle}>Web developer</p>
        </Box>
      </div>

      <hr style={dividerStyle} />

      <div style={infoContainer}>
        <InfoItem
          IconComponent={Icons.email}
          label="EMAIL"
          value="aaqeel.dev@gmail.com"
        />
        <InfoItem
          IconComponent={Icons.phone}
          label="PHONE"
          value="+91 8468849455"
        />
        <InfoItem
          IconComponent={Icons.birthday}
          label="DOB"
          value="June 05, 1997"
        />
        <InfoItem
          IconComponent={Icons.Location}
          label="LOCATION"
          value="Townhall Aurangabad"
        />
      </div>
    </Card>
  );
};

const InfoItem = ({
  IconComponent,
  label,
  value,
}: {
  IconComponent: React.ElementType;
  label: string;
  value: string;
}) => (
  <div style={infoItem}>
    <IconComponent style={iconStyle} />
    <div>
      <small style={labelStyle}>{label}</small>
      <p style={valueStyle}>{value}</p>
    </div>
  </div>
);

const profileHeader: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const imageStyle: React.CSSProperties = {
  ...imageSizes.large,
  borderRadius: borders.rounded,
  margin: spacing.xs,
  cursor: "pointer",
  boxShadow: shadows.heavy,
};

const nameStyle = {
  color: colors.black,
  fontSize: fontSizes.lg,
  fontWeight: fontWeights.regular,
};

const roleStyle = {
  color: colors.white,
  fontSize: fontSizes.sm,
  marginRight: spacing.md,
  marginLeft: spacing.md,
};

const dividerStyle = {
  border: borders.thin,
  margin: spacing.md,
};

const infoContainer: React.CSSProperties = {
  textAlign: "left",
};

const infoItem: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  marginBottom: spacing.sm,
  gap: spacing.sm,
};

const iconStyle = {
  fontSize: fontSizes.lg,
  color: colors.primary,
};

const labelStyle = {
  fontSize: fontSizes.xs,
  color: colors.labelColor,
  marginTop: spacing.xs,
};

const valueStyle = {
  margin: 0,
  fontSize: fontSizes.sm,
  color: colors.black,
};

export default SidebarProfileCard;
