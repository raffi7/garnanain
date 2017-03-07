/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

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

class Timer extends React.Component {
    static propTypes = {
    timeout: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { counter: 60 };
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }
  componentDidMount = () => {
      this.setState({counter: this.props.timeout });
}
  addCounter = () => {
    if (this.state.counter !== 0) {
        const x = this.state.counter - 1;
        this.setState({ counter: x });
      } else if (!this.state.oneceOpened) {
        this.handleOpenDialog();
      }
  }

  startCounter = () => {
    this.pauseInterval = setInterval(this.addCounter, 1000);
  }

  pauseTime = () => {
    clearInterval(this.pauseInterval);
  }

  replayTime = () => {
    this.state.counter = this.props.timeout + 1;
    this.setState({oneceOpened: false})
  }
  handleOpenDialog() {
    this.setState({
      openDialog: true,
      oneceOpened: true,
    });
  }
  handleCloseDialog() {
    this.setState({
      openDialog: false
    });
  }

  render() {
    return (
      <div>
      <Grid className="demo-grid-2" style={{ marginTop: '5px', margineLeft: '1000px'
      }}>
        <Cell col={2} style={{ fontSize: '50px' }}>
          {this.state.counter}
        </Cell>
        <Cell col={1}><Tooltip label="Play" position="right"><IconButton onClick={this.startCounter} name="play_arrow"
          colored style={{color: '#388e3c'}} /></Tooltip></Cell>
        <Cell col={1}><Tooltip label="Pause" position="right"><IconButton onClick={this.pauseTime} name="pause"/></Tooltip></Cell>
        <Cell col={1}><Tooltip label="Replay" position="right"><IconButton onClick={this.replayTime} name="replay"
          colored style={{color: '#dd2c00'}}/></Tooltip></Cell>
        </Grid>
      <Grid className="demo-grid-1">

      <Cell col={9}>
        <ProgressBar progress={this.state.counter * (100 / this.props.timeout) } />
      </Cell>
      </Grid>
      <Dialog open={this.state.openDialog}>
        <DialogTitle >Time Out !!</DialogTitle>
        <DialogContent>
          <p>Ժամանակը սպառւած է:</p>
        </DialogContent>
        <DialogActions>
          <Button type='button' onClick={this.handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>
      </div>
    )
  }

}

export default Timer;
