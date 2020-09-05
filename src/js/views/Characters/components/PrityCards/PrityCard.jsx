import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import CardActionArea from '@material-ui/core/CardActionArea';

import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  CardAlive: {
    width: 300,
    margin: theme.spacing(2),
    backgroundColor: theme.palette.primary.dark,
  },
  CardDead: {
    width: 300,
    margin: theme.spacing(2),
    backgroundColor: theme.palette.secondary.dark,
  },
  media: {
    height: 140,
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const PrityCard = ({ CardData }) => {
  const classes = useStyles();
  return (
    <Card
      className={
        CardData.status === 'Dead' ? classes.CardDead : classes.CardAlive
      }
    >
      <CardActionArea>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {CardData.name.slice(0, 1)}
            </Avatar>
          }
          title={CardData.name}
        />
        <CardMedia
          className={classes.media}
          image={CardData.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Species: {CardData.species}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Gender: {CardData.gender}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Location: {CardData.location.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Status: {CardData.status}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Creation Date: {CardData.created.slice(0, 10)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default PrityCard;
