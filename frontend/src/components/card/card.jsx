import React from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    margin: "10px",
    minHeight: "30rem",
  },
  cardContent: {
    direction: "row",
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 300,
    width: 310,
  },
});

export default function Cards({ ele }) {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.card}>
        <CardHeader
          action={
            <IconButton>
              <FavoriteIcon />
            </IconButton>
          }
        />
        <CardMedia
          className={classes.media}
          image={ele.image ? ele.image : ele.images}

       
          title={ele.name}
        />
        <CardContent className={classes.cardContent}>
          <Typography>{ele.name}</Typography>
          <Typography>Price: {ele.price}ETH</Typography>
        </CardContent>
      </Card>
    </div>
  );
}
