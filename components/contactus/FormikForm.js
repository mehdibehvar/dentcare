import styled from "@emotion/styled";
import { Button, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
const CssTextField = styled(TextField)(({theme})=>({
    [theme.breakpoints.down("md")]:{
        marginBottom:theme.spacing(1),
    },
 
    // The <legend> tag defines a caption for the <fieldset> element.
    '& legend': {
      textAlign:"right",
    },
    '& label': {
    transformOrigin:" top right",
    right:25
    },
    '& label.Mui-focused': {
      color: theme.palette.primary.main,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.secondary.main,
      },
      '&:hover fieldset': {
        borderColor: theme.palette.secondary.light,
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.primary.light,
      },
    },
  }));
////////////////////////////---------------------/////////
const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  phone: yup
    .string("Enter your phone number")
    .min(11, "phone number should be of minimum 11 characters length")
    .required("phone number is required"),
  firstname: yup
    .string("Enter your phone firstname")
    .required("firstname  is required"),
  lastname: yup.string("Enter your lastname").required("lastname is required"),
  message: yup.string("Enter your message").required("message is required"),
});
/////////////////////----//////////////////////
const FormikForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
      firstname: "",
      lastname:'',
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
    //   console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <CssTextField
            fullWidth
            id="firstname"
            name="firstname"
            label="نام"
            value={formik.values.firstname}
            onChange={formik.handleChange}
            error={formik.touched.firstname && Boolean(formik.errors.firstname)}
            helperText={formik.touched.firstname && formik.errors.firstname}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CssTextField
            fullWidth
            id="lastname"
            name="lastname"
            label="نام خانوادگی"
            value={formik.values.lastname}
            onChange={formik.handleChange}
            error={formik.touched.lastname && Boolean(formik.errors.lastname)}
            helperText={formik.touched.lastname && formik.errors.lastname}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CssTextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CssTextField
            fullWidth
            id="phone"
            name="phone"
            label="شماره موبایل"
            value={formik.values.phone}
            onChange={formik.handleChange}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />
        </Grid>

        <Grid item xs={12}>
          {" "}
          <CssTextField
            fullWidth
            id="message"
            name="message"
            label="پیام شما"
            multiline
            rows={4}
            value={formik.values.message}
            onChange={formik.handleChange}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
          />
        </Grid>
        </Grid>
        <Button color="secondary" variant="contained" fullWidth type="submit" sx={{marginTop:"5px"}}>
          ارسال
        </Button>
      </form>
    </div>
  );
};
export default FormikForm;
