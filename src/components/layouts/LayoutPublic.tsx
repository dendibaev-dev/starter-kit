import { Container } from "@material-ui/core";
import { ComponentType } from "react";
import Footer from "../footer";
import Header from "../header";
import useStyles from "./styles";

export const LayoutPublic: ComponentType = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <Header />
      </header>
      <Container maxWidth="lg" className={classes.container}>
        {children}
      </Container>
      <footer className={classes.footer}>
        <Footer />
      </footer>
    </div>
  );
};
