
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { TextField } from "formik-material-ui";
import { Formik, Form, Field, FormikProps } from "formik";
import Router from "next/router";
import { Box } from "@mui/material";
import { useAppDispatch } from "@/store/store";
import { signIn } from "@/store/slices/userSlices";
import router from "next/router";


type Props = {};

export default function register({}: Props) {
  const dispatch = useAppDispatch();
  const showForm = ({
    values,
    setFieldValue,
    isValid,
    dirty,
    handleSubmit,
  }: FormikProps<any>) => {
    return (
      <Form onSubmit={handleSubmit}>
        <Field
          component={TextField}
          name="username"
          id="username"
          margin="normal"
          required
          fullWidth
          label="Username"
          autoComplete="email"
          autoFocus
        />
        <Field
          component={TextField}
          name="password"
          margin="normal"
          required
          fullWidth
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />

        <Button type="submit" fullWidth variant="contained" color="primary">
          Login
        </Button>
        <Button
          fullWidth
          size="small"
          color="primary"
          onClick={() => Router.push("/register")}
        >
          Register
        </Button>
      </Form>
    );
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 200 }}
            image="/static/img/next_login.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Formik
              initialValues={{ username: "", password: "" }}
              onSubmit={async (values) => {
                const response = await dispatch(signIn(values));
                if (response.meta.requestStatus === "rejected") {
                  alert("Login failed");
                } else {
                  router.push("/stock");
                }
              }}
            >
              {(props) => showForm(props)}
            </Formik>
          </CardContent>
        </Card>

        <style jsx global>
          {`
            body {
              min-height: 100vh;
              position: relative;
              margin: 0;
              background-size: cover;
              background-image: url("/static/img/bg4.jpg");
              text-align: center;
            }
          `}
        </style>
      </Box>
    </React.Fragment>
  );
}