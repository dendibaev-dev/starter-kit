import { Grid, Typography } from "@material-ui/core";
import { ComponentType } from "react";
import useStyles from "./styles";

export const Dashboard: ComponentType = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      alignItems="flex-start"
      spacing={2}
      className={classes.root}
    >
      <Grid item xs={12} lg={6}>
        <Typography variant="h4">Dashboard</Typography>
      </Grid>
    </Grid>
  );
};
