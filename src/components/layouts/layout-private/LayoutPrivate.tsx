import { Container, Drawer, Hidden } from "@material-ui/core";
import { ComponentType } from "react";
import Footer from "../../footer";
import Header from "../../header";
import Sidebar from "../../sidebar";
import useStyles from "./styles";

export const LayoutPrivate: ComponentType = ({ children }) => {
  const classes = useStyles();

  console.log(`LayoutPrivate`);
  return (
    <div className={classes.root}>
      <aside className={classes.colSidebar}>
        <Hidden lgUp implementation="css">
          <Drawer
            variant="temporary"
            open={false}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <Sidebar />
          </Drawer>
        </Hidden>
        <Hidden lgDown implementation="css">
          <Drawer variant="permanent" open>
            <Sidebar />
          </Drawer>
        </Hidden>
      </aside>
      <main className={classes.colMain}>
        <header className={classes.header}>
          <Header />
        </header>
        <Container maxWidth="lg" className={classes.container}>
          {children}
        </Container>
        <footer className={classes.footer}>
          <Footer />
        </footer>
      </main>
    </div>
  );
};
