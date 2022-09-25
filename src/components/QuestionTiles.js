import {Grid, Typography} from "@mui/material";
import React from "react";
import QuestionTile from "./QuestionTile";

const QuestionTiles = ({questions}) => {
  if (!questions.length) {
    return <Typography variant="body1">Nothing is here :(</Typography>;
  }
  const sortedQuestions = questions.sort((a, b) => {
    return a.timestamp < b.timestamp;
  });
  return (
    <Grid container spacing={2}>
      {sortedQuestions.map(({id, author, timestamp}) => (
        <QuestionTile id={id} author={author} timestamp={timestamp} />
      ))}
    </Grid>
  );
};

export default QuestionTiles;
