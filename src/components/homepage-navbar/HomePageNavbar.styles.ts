import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const homepageNavbarUseStyles = makeStyles((_theme: Theme) => {
  return createStyles({
    container: {
      padding: "0.5rem 2rem",
    },
    aboutNavLink: {
      margin: "0 1rem 0 auto",
    },
    projectNavLink: {
      margin: "0 1rem",
    },
    siteTitle: {
      marginLeft: "0.5rem",
    },
  });
});

export { homepageNavbarUseStyles };
