import styled from "@emotion/styled";
import { Avatar, Typography } from "@mui/material";

const Servic = styled("article")(({ theme }) => ({
  display: "flex",
  border: "1px solid #e5e5e5",
  padding: 18,
  transition: "all 0.5s ease",
  borderRadius: 8,
  alignItems: "flex-start",
  ":hover": {
    backgroundColor: theme.palette.primary.light,
    color: "#fff",
  },
}));

export default function ServiceBox({ boxInfo, position }) {
  const { title, description, avatar } = boxInfo;
  return (
    <Servic itemScope itemType="https://schema.org/MedicalTherapy">
      <div>
        <Avatar
          alt={title}
          src={avatar}
          sx={{ width: 65, height: 65 }}
          itemProp="image"
        />
      </div>
      <div>
        <Typography
          variant="h6"
          component="h3"
          sx={{ marginRight: "10px" }}
          itemProp="name"
        >
          {title}
        </Typography>
        <Typography
          variant="caption"
          component="p"
          sx={{ marginRight: "10px" }}
          itemProp="description"
        >
          {description}
        </Typography>
      </div>
    </Servic>
  );
}
