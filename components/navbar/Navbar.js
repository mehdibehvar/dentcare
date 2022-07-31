import styled from '@emotion/styled'
import ResponsiveAppBar from './Appbar'

export default function Navbar() {

    const Navbar=styled("nav")(()=>({
        zIndex: "99",
        position:"sticky",
        top:"0",
        width: "100%",
        padding: "10px 0",
        overflow: "hidden",
        bottom: "8px",
    }));
  return (
    <Navbar>
       <ResponsiveAppBar/>
    </Navbar>
  )
}
