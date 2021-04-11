import { Grid, Link } from "@material-ui/core";
import { ComponentType } from "react";
import useStyles from "./styles";

export const Footer: ComponentType = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={4} className={classes.root}>
      <Grid item md={2}>
        <Link href="https://dendibaev.uz">(c) Dendibaev</Link>
      </Grid>
    </Grid>
  );
};
