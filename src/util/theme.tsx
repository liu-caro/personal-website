import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#000000",
            light: "#FFFFFF"
        }
    },
    overrides: {
        MuiAppBar: {
            colorDefault: {
                color: undefined,
                backgroundColor: undefined
            }
        }
    }
});

export { theme }