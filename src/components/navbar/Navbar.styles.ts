import { createStyles, makeStyles } from "@material-ui/core/styles";

const navbarUseStyles = makeStyles(() =>
  createStyles({
    topDivider: {
        height: '0.5rem'
    },
    bottomDivider: {
        height: '0.25rem'
    },
  })
);

export { navbarUseStyles };
