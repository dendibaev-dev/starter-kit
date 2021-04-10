import { Button, Grid } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

export const Language = () => {
  const { i18n } = useTranslation();
  const history = useHistory();

  const handleLangChangeUrl = (lang: any) => {
    const currentPath = window.location.pathname + window.location.search;
    const routes = currentPath.split("/");
    routes[1] = lang;
    return routes.join("/");
  };

  const handleLang = (lang: string) => {
    i18n.changeLanguage(lang);
    window.localStorage.setItem("i18nextLng", lang);
    history.push(handleLangChangeUrl(lang));
    i18n.changeLanguage(lang);
    // console.log(handleLangChangeUrl(lang))
  };

  return (
    <Grid container spacing={4}>
      <Grid item md={1}>
        <Button variant="outlined" onClick={() => handleLang("ru")}>
          Handle lang: ru
        </Button>
      </Grid>
      <Grid item md={1}>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => handleLang("en")}
        >
          Handle lang: en
        </Button>
      </Grid>
    </Grid>
  );
};
