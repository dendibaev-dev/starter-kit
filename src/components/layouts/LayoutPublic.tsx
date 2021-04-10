import { Container } from "@material-ui/core";
import { ComponentType } from "react";
import Header from "../header";

export const LayoutPublic: ComponentType = ({ children }) => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">{children}</Container>
    </>
  );
};
