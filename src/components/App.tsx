import { Box, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

export const App = () => {
  const {t} = useTranslation()
  return (
    <Box>
    <Typography variant="h1">{t("hello")}</Typography>
    <Typography variant="body1">{t("text")}</Typography>
    </Box>
  );
};
