import { Container, Drawer, Hidden } from "@material-ui/core";
import { ComponentType, useState } from "react";
import Footer from "../../footer";
import Header from "../../header";
import Sidebar from "../../sidebar";
import useStyles from "./styles";

export const LayoutPrivate: ComponentType = ({ children }) => {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <aside className={classes.colSidebar}>
        <Hidden lgUp implementation="css">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
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
          <Header mode="private" handleDrawerToggle={handleDrawerToggle} />
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
