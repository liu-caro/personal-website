import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const homeUseStyles = makeStyles((theme: Theme) => {
    const { breakpoints } = theme;
    return createStyles({
        container: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            margin: "5rem 0",
            [breakpoints.down('sm')]: {
                margin: "1.5rem 0"
            }
        },
        imageContainer: {
            textAlign: 'center'
        },
        textContainer: {
            margin: "auto 2rem",
            [breakpoints.down('md')]: {
                marginTop: "2rem"
            }

        }
    })
});

export { homeUseStyles }