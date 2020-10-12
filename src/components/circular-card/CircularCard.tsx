import React from "react";
import { useHistory } from "react-router-dom";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import { circularCardUseStyles as useStyles } from "./CircularCard.styles";

export interface CircularCardProps {
  altText: string;
  image: string;
  url: string;
}

const CircularCard = (props: CircularCardProps) => {
  const classes = useStyles();
  const history = useHistory();

  const { altText, image, url } = props;
  return (
    <Box
      component="button"
      className={classes.container}
      boxShadow={3}
      onClick={() => history.push(url)}
    >
      <img alt={altText} className={classes.container} src={image} />
      <Typography className={classes.text} variant="body1">
        {altText}
      </Typography>
    </Box>
  );
};

export { CircularCard };
