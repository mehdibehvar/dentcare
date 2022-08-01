import styled from "@emotion/styled";
import { Avatar, Typography } from "@mui/material";
import { letterSpacing } from "@mui/system";

const Servic = styled("div")(({ theme }) => ({
    display: "flex",
    border: "1px solid #e5e5e5",
    padding: 18,
    transition: " all 0.5s ease",
    webkitTransition: "all 0.5s ease",
    mozTransition: "all 0.5s ease",
    borderRadius: 8,
    ":hover":{
      backgroundColor:theme.palette.primary.light,
      color:"#fff"
    }
  }));

export default function ServiceBox({boxInfo}) {
    const {title,description,avatar}=boxInfo;
  return (
    <Servic>
    <div>
      <Avatar
        alt="Remy Sharp"
        src={`${avatar}`}
        sx={{ width: 65, height: 65 }}
      />
    </div>
    <div>
      <Typography variant="h6" component={"h6"} sx={{marginRight:"10px"}}>{title}</Typography>
      <Typography variant="caption" component={"p"} sx={{marginRight:"10px"}}>{description}</Typography>
    </div>
  </Servic>
  )
}
