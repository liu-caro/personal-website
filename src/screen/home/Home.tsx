import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { homeUseStyles as useStyles } from "./Home.styles";
import headshot from "../../assets/headshot.jpg";
import { CircularCard } from "../../components/circular-card/CircularCard";

const Home = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} md={4} className={classes.imageContainer}>
        <img alt="Caroline Liu headshot" src={headshot} />
      </Grid>

      <Grid item xs={12} md={7} className={classes.textContainer}>
        <Typography>
          Hi, my name is Caroline Liu. I’m a fourth-year Computer Science and
          Design Major at Northeastern University. My interest in computer
          science began when I had to create a website during my freshman year
          of high school. I was so enthusiastic about this project that I spent
          many hours researching web design and user interface design on my own
          time. I continued to pursue my interest by taking AP Computer Science
          and now, college courses to learn how to design programs and how to
          design with the user in mind. Most recently, I have continued my
          learning outside of the classroom by attending tech talks and
          exploring web development through hackathon projects.
        </Typography>
      </Grid>

      <CircularCard image={headshot} altText="Test" />
    </Grid>
  );
};

export { Home };
