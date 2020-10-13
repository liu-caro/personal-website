import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const accomplishmentBodyUseStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: theme.palette.primary.light,
      borderRadius: "50%",
      display: "flex",
      flexDirection: "column",
      height: "15rem",
      marginBottom: "0.5rem",
      width: "15rem"
    },
    text: {
      margin: "0.5rem auto"
    }
  })
);

export { accomplishmentBodyUseStyles };
