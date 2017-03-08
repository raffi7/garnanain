import React, { PropTypes } from 'react';
import cx from 'classnames';
import Link from '../Link';
import {
  Button,
  CardText,
  Card,
  CardTitle,
  CardMenu,
  CardActions,
  IconButton,
  Grid,
  Icon,
  FABButton,
  Cell,
  ProgressBar,
  IconToggle,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem
} from 'react-mdl';
import history from '../../src/history';
import Timer from '../Timer';
import ResultDialog from '../ResultDialog';


class QPicture extends React.Component {


  render() {
    return (
    <Card shadow={0} style={{ margin: 'auto', minWidth: '600px'}}>
    <CardTitle style={{color: '#fff',minHeight: '375px', background: `url(${this.props.p}) center / cover`}}/>
    <CardActions border>
      <div style={{width: '100%', margin: 'auto'}}>
    <Grid className="demo-grid-ruler">
        <Cell col={6}><IconButton name="remove_red_eye" ripple colored style={{color:'#455a64'}} /></Cell>
        <Cell offset={4} col={1}><IconButton name="done" onClick={this.props.crct} colored style={{color: 'green'}} /></Cell>
        <Cell col={1}><IconButton name="clear" onClick={this.props.wrng} colored style={{color: 'red'}} /></Cell>
    </Grid></div>
    </CardActions>
</Card>
    )
  }
}

export default QPicture;
