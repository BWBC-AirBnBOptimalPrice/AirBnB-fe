import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { getProperties } from '../actions'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function PropertyView(props) {

  const classes = useStyles();

  useEffect(() => {
    props.getProperties();
  },[])

  return (
    <div>
    {(!props.properties.length ? <div><p>No Properties Found</p></div> : props.properties.map(home => (
    <Card className={classes.root} className = "homecv">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        {home.description}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        {home.property_type}
        </Typography>
        <Typography variant="body2" component="p">
            <p>Bedrooms: {home.bedrooms_number}</p>
            <p>Bathrooms: {home.bathrooms_number}</p>

            {home.children_allowed === true ? (
              <p>Childrean are welcome!</p>
            ) : (
              <p>No kids please!</p>
            )}
          <p>Amenities: {home.amenities}</p>
          <p>Suggested Rental Rate: {home.price}</p>

        </Typography>
      </CardContent>
    </Card>
    
    )))}
    </div>
  )}

const mapStateToProps = state => {
  return {
    properties: state.properties
  }
}

export default connect(mapStateToProps, {getProperties})(PropertyView);
