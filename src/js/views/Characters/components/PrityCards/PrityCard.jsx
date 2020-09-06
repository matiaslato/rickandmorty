import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

import { SvgIcon } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  Card: {
    width: 300,
    margin: theme.spacing(2),
    backgroundColor: theme.palette.primary.dark,
  },
  title: {
    color: theme.palette.white,
  },
  media: {
    height: 140,
  },
  avatar: {
    backgroundColor: red[500],
  },
  icons: {
    color: theme.palette.white,
  },
}));

const PrityCard = ({ CardData }) => {
  const classes = useStyles();

  const icon =
    CardData.gender === 'Female' ? (
      <SvgIcon>
        <path d="M17.58,4H14V2H21V9H19V5.41L15.17,9.24C15.69,10.03 16,11 16,12C16,14.42 14.28,16.44 12,16.9V19H14V21H12V23H10V21H8V19H10V16.9C7.72,16.44 6,14.42 6,12A5,5 0 0,1 11,7C12,7 12.96,7.3 13.75,7.83L17.58,4M11,9A3,3 0 0,0 8,12A3,3 0 0,0 11,15A3,3 0 0,0 14,12A3,3 0 0,0 11,9Z" />
      </SvgIcon>
    ) : CardData.gender === 'Male' ? (
      <SvgIcon>
        <path d="M9,9C10.29,9 11.5,9.41 12.47,10.11L17.58,5H13V3H21V11H19V6.41L13.89,11.5C14.59,12.5 15,13.7 15,15A6,6 0 0,1 9,21A6,6 0 0,1 3,15A6,6 0 0,1 9,9M9,11A4,4 0 0,0 5,15A4,4 0 0,0 9,19A4,4 0 0,0 13,15A4,4 0 0,0 9,11Z" />
      </SvgIcon>
    ) : CardData.gemder === 'Genderless' ? (
      <SvgIcon>
        <path d="M13 3H11V5.27L9.04 4.13L8.04 5.87L10 7L8.04 8.13L9.04 9.87L11 8.73V12.1C8.72 12.56 7 14.58 7 17C7 19.76 9.24 22 12 22S17 19.76 17 17C17 14.58 15.28 12.56 13 12.1V8.73L14.96 9.87L15.96 8.13L14 7L15.96 5.87L14.96 4.13L13 5.27V3M12 20C10.35 20 9 18.65 9 17S10.35 14 12 14 15 15.35 15 17 13.65 20 12 20Z" />
      </SvgIcon>
    ) : (
      <HelpOutlineIcon />
    );
  return (
    <Card className={classes.Card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {CardData.name.slice(0, 1)}
          </Avatar>
        }
        title={
          <Typography gutterBottom className={classes.title} component="h2">
            {CardData.name}
          </Typography>
        }
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
          Gender: {CardData.gender} {icon}
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

      <CardActions disableSpacing>
        <IconButton className={classes.icons} aria-label="add to favorites">
          {icon}
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default PrityCard;
