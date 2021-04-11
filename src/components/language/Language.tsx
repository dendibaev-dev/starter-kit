import { ButtonBase, Menu, MenuItem } from "@material-ui/core";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ReactComponent as RuIcon } from "./assets/icons/ru.svg";
import { ReactComponent as UzIcon } from "./assets/icons/uz.svg";
import useStyles from "./styles";

export const Language = () => {
  const classes = useStyles();
  const { i18n } = useTranslation();
  const history = useHistory();
  const currentLocale = useSelector((state: any) => state.currentLocale);

  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);

  const handleLangChangeUrl = (lang: any) => {
    const currentPath = window.location.pathname + window.location.search;
    const routes = currentPath.split("/");
    routes[1] = lang;
    return routes.join("/");
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (e: any) => {
    setAnchorEl(e.currentTarget);
  };
  const handleLang = (lang: string) => {
    if (currentLocale !== lang) {
      i18n.changeLanguage(lang);
      window.localStorage.setItem("i18nextLng", lang);
      history.push(handleLangChangeUrl(lang));
      i18n.changeLanguage(lang);
    }

    handleClose();
  };

  return (
    <>
      <ButtonBase className={classes.root} onClick={handleClick}>
        {currentLocale === "ru" ? (
          <RuIcon className={classes.icon} />
        ) : (
          <UzIcon className={classes.icon} />
        )}
      </ButtonBase>
      <Menu
        className={classes.root}
        id="select-language"
        aria-labelledby="select-language-positioned-button"
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <MenuItem value="ru" onClick={() => handleLang("ru")}>
          <RuIcon className={classes.icon} />
        </MenuItem>
        <MenuItem value="uz" onClick={() => handleLang("uz")}>
          <UzIcon className={classes.icon} />
        </MenuItem>
      </Menu>
    </>
  );
};
