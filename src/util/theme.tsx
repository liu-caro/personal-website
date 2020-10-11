import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#000000"
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