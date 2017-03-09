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
  ListItem,
  Chip
} from 'react-mdl';
import history from '../../src/history';
import Timer from '../Timer';
import ResultDialog from '../ResultDialog';


class QPicture extends React.Component {


  render() {
    let background = `url(${this.props.p}) center / cover`;
    if (this.props.seen) {
      background = `url(${this.props.a}) center / cover`;
    }
    return (
    <Card shadow={0} style={{ margin: 'auto', minWidth: '600px'}}>
    <CardTitle style={{color: '#fff',minHeight: '375px', background: background }}/>
    <CardActions border>
      <div style={{width: '100%', margin: 'auto'}}>
    <Grid className="demo-grid-ruler">
        <Cell col={1}><IconButton name="remove_red_eye" onClick={this.props.onClick} ripple colored style={{color:'#455a64'}} /></Cell>
        <Cell col={9} style={{fontSize: '36px'}}><span>Անուն</span><span style={{marginLeft: '15px'}}>Ազգանուն</span></Cell>
        <Cell col={1}><IconButton name="done" onClick={this.props.crct} colored style={{color: 'green'}} /></Cell>
        <Cell col={1}><IconButton name="clear" onClick={this.props.wrng} colored style={{color: 'red'}} /></Cell>
    </Grid></div>
    </CardActions>
</Card>
    )
  }
}

export default QPicture;
