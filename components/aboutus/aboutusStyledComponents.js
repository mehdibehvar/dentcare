import styled from "@emotion/styled";

  ////how to use prop and theme in styled////////////////////////
  export const Tab = styled("li")(({ theme }) => (props) => ({
    backgroundColor: props.tabColor,
    borderRadius: "8px",
    position: "relative",
    marginTop:props.margin,
    marginBottom:props.margin,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    width:130,
    height:100,
    cursor:"pointer",
    ":after": {
      content: "''",
      position: "absolute",
      right: 120,
      width: 30,
      height: 50,
      backgroundColor: props.tabColor,
      top: "25px",
      WebkitClipPath:"polygon(100% 100%, 0 50%, 100% 0)",
      clipPath:"polygon(100% 100%, 0 50%, 100% 0)",
    },
    "& div":{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"column",
      "& i":{
        marginBottom:theme.spacing(1),
        fontSize:22
      }
    },
    [theme.breakpoints.down("md")]: {
      transform: "rotate(-90deg)",
      marginLeft:props.margin,
      marginRight:props.margin,
      marginTop:"0",
      width:80,
      ":after": {
        content: "''",
        position: "absolute",
        right: 70,
        width: 30,
        height: 50,
        backgroundColor: props.tabColor,
        top: "25px",
        WebkitClipPath:"polygon(100% 100%, 0 50%, 100% 0)",
        clipPath:"polygon(100% 100%, 0 50%, 100% 0)",
      },
      "& div":{
        transform: "rotate(90deg)",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
    }
    },
  }));
  export const TabList = styled("ul")(({ theme }) => ({
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly"
    },
  }));
  /////////////////////end style////////////