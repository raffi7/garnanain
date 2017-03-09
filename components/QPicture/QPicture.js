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
    let background = `url(${this.props.questionPic}) center / cover`;
    let answer = "";
    if (this.props.seen) {
      background = `url(${this.props.answerPic}) center / cover`;
      answer = <div><span>{this.props.name}</span><span style={{marginLeft: '15px'}}>{this.props.lastname}</span></div>;
    }
    return (
    <Card shadow={0} style={{ margin: 'auto', minWidth: '600px'}}>
    <CardTitle style={{color: '#fff',minHeight: '375px', background: background }}/>
    <CardActions border>
      <div style={{width: '100%', margin: 'auto'}}>
    <Grid className="demo-grid-ruler">
        <Cell col={1}>
          <Tooltip label="Show Answer" position="left">
          <IconButton name="remove_red_eye" onClick={this.props.onClick} colored style={{color:'#455a64'}} />
        </Tooltip>
        </Cell>
        <Cell col={9} style={{fontSize: '36px'}}>{answer}</Cell>
        <Cell col={1}><IconButton name="done" onClick={this.props.crct} colored style={{color: 'green'}} /></Cell>
        <Cell col={1}><IconButton name="clear" onClick={this.props.wrng} colored style={{color: 'red'}} /></Cell>
    </Grid></div>
    </CardActions>
</Card>
    )
  }
}

export default QPicture;
