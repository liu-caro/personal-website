import React from "react";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import { accomplishmentBodyUseStyles as useStyles } from "./AccomplishmentBody.styles";

export interface AccomplishmentBodyProps {
  altText: string;
  image: string;
  url: string;
}

const AccomplishmentBody = (props: AccomplishmentBodyProps) => {
  const classes = useStyles();
  const { altText, image } = props;
  return <Box className={classes.container}></Box>;
};

export { AccomplishmentBody };
