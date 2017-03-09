import React, { PropTypes } from 'react';
import history from '../../src/history';
import {
  Button,
  CardText,
  Card,
  CardTitle,
  CardMenu,
  CardActions,
  IconButton,
  Grid,
  Cell,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FABButton,
  Icon
} from 'react-mdl';

class Link extends React.Component {

  render() {
    return (
      <Card shadow={3} style={{width: '80px', minHeight: '110px', background: '#fff'}}>
        <FABButton colored onClick={this.props.crct} style={{background: '#558b2f'}} mini>
            <Icon name="done" />
        </FABButton>
        <FABButton colored onClick={this.props.wrng} style={{background: '#c62828'}} mini>
            <Icon name="clear" />
        </FABButton>
</Card>

  )
  }

}

export default Link;
