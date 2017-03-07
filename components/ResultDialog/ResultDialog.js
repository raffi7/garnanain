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
  DialogActions
} from 'react-mdl';

class ResultDialog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      openDialogCorrect: false,
      openDialogWrong: false
    };
  }

  handleOpenDialogCorrect = () => {
    this.setState({
      openDialogCorrect: true,
      openDialogWrong: false,
    });
  }
  handleOpenDialogWorng = () => {
    this.setState({
      openDialogWrong: true,
      openDialogCorrect: false,
    });
  }
  handleCloseDialog = () => {
    this.setState({
      openDialogCorrect: false,
      openDialogWrong: false
    });
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      openDialogCorrect: nextProps.correct,
      openDialogWrong: nextProps.wrong,
    });
  }

  render() {
    return (
      <div>
      <Dialog style={{backgroundColor: '#8bc34a'}} open={this.state.openDialogCorrect}>
        <DialogTitle style={{color: '#fff', fontSize: '50px'}} >Correct !!</DialogTitle>
        <DialogContent>
          <p style={{color: '#263238', fontSize: '25px', marginTop: '15px'}}>+5 Նիշ</p>
        </DialogContent>
        <DialogActions>
          <Button type='button' onClick={this.handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>
      <Dialog style={{backgroundColor: '#f44336'}} open={this.state.openDialogWrong}>
        <DialogTitle style={{color: '#fff', fontSize: '50px'}} >Wrong !!</DialogTitle>
        <DialogContent>
          <p style={{color: '#263238', fontSize: '25px', marginTop: '15px'}}>0 Նիշ</p>
        </DialogContent>
        <DialogActions>
          <Button type='button' onClick={this.handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog></div>
    )
  }

}

export default ResultDialog;
