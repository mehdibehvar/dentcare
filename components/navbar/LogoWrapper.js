import { Box } from '@mui/material'
import LogoWrapperStyle from './LogoWrapper.module.scss'

export default function LogoWrapper() {
  return (
    <Box color="primary.light" className={LogoWrapperStyle.logoWrapper}>
        <span className={LogoWrapperStyle.logoName}>BitaCare</span><i  className={`fa fa-tooth ${LogoWrapperStyle.logo}`}></i>
    </Box>
  )
}
