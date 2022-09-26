import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import React from "react";
import {useNavigate} from "react-router-dom";
import {formatDate} from "../utils/helper";

const QuestionTile = ({author, timestamp, id}) => {
  const navigate = useNavigate();

  const handleShow = (e) => {
    e.preventDefault();
    navigate(`/question/${id}`);
  };

  return (
    <Card>
      <CardHeader title={author}></CardHeader>
      <CardContent>
        <Typography variant="body1">{formatDate(timestamp)}</Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" onClick={handleShow}>
          Show
        </Button>
      </CardActions>
    </Card>
  );
};

export default QuestionTile;
