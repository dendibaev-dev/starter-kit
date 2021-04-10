import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
    typography: {
        fontFamily: [
          'JetBrains Mono Regular',
          'sans-serif'
        ].join(','),
      },
})

export default theme