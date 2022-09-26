import {Grid, Typography} from "@mui/material";
import React from "react";
import {sortQuestions} from "../utils/helper";
import QuestionTile from "./QuestionTile";

const QuestionTiles = ({questions}) => {
  if (!questions.length) {
    return <Typography variant="body1">Nothing is here :(</Typography>;
  }

  return (
    <Grid container spacing={2}>
      {sortQuestions(questions).map(({id, author, timestamp}) => (
        <Grid item key={id}>
          <QuestionTile id={id} author={author} timestamp={timestamp} />
        </Grid>
      ))}
    </Grid>
  );
};

export default QuestionTiles;
