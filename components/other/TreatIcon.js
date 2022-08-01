import { Typography } from '@mui/material';
import treatIconClasses from "./TreatIcon.module.scss"
export default function TreatIcon() {
  return (
    <Typography
    className={treatIconClasses.treatIcon}
    variant="h2"
    component={"h2"}
    sx={{ color: "primary.main", fontSize: 20 }}
  >
    <i className="fa fa-stethoscope"></i>
  </Typography>
  )
}
