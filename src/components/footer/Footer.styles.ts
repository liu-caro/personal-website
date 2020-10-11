import { createStyles, makeStyles } from "@material-ui/core/styles";

const footerUseStyles = makeStyles(() =>
  createStyles({
    container: {
        display: "flex",
        justifyContent: 'center'
    },
    icons: {
        marginRight: '0.5rem'
    },
    navLinks: {
        alignItems: 'center',
        display: 'flex',
        margin: "0 1rem",
      },
  })
);

export { footerUseStyles };
