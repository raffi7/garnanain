import React, { PropTypes } from 'react';
import {
  IconButton,
  Button,
  Grid,
  Cell,
  Tooltip,
  Card,
  CardTitle,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  ProgressBar,
} from 'react-mdl';
import timeout from './timeout.jpg';
import tick from './tick.mp3';
import finish from './finish.mp3';

class Timer extends React.Component {
  static propTypes = {
    timeout: PropTypes.number.isRequired,
    pause: PropTypes.bool,
  };

  constructor(props) {
    super(props);
    this.state = { counter: 60,
    bColor: '#fff',
  tColor: '#263238' };
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }

  componentDidMount = () => {
    this.setState({ counter: this.props.timeout });
  }

  componentWillUnmount() {
    this.pauseTime();
  }

  addCounter = () => {
    if (this.props.pause) {
      this.pauseTime();
    } else if (this.state.counter > 0.1) {
      const x = this.state.counter - 0.1;
      if (this.state.counter < 10.0) {
        this.setState({ bColor: '#F44336',
        tColor: '#fff' });
      }
      const audio = new Audio(tick);
      this.setState({ counter: x });
      audio.play();
    } else if (!this.state.onceOpened) {
      this.handleOpenDialog();
    }
  }

  startCounter = () => {
    this.pauseInterval = setInterval(this.addCounter, 100);
  }

  pauseTime = () => {
    clearInterval(this.pauseInterval);
  }

  replayTime = () => {
    this.state.counter = this.props.timeout;
    this.setState({ onceOpened: false });
  }

  handleOpenDialog() {
    const audio = new Audio(finish);
    audio.play();
    this.setState({
      openDialog: true,
      onceOpened: true,
    });
  }

  handleCloseDialog() {
    this.setState({
      openDialog: false,
    });
  }

  render() {
    return (
      <div>
        <Dialog style={{
          backgroundColor: '#fff',
          height: '250px',
          minWidth: '300px',
          marginTop: '20px'}} open={this.state.openDialog}>
          <DialogTitle style={{ color: '#D50000', fontSize: '52px' }} >Time Out !!</DialogTitle>
          <DialogContent>
            <p style={{
              marginTop: '50px',
              marginLeft: '50px',
              color: '#D50000',
              fontSize: '100px' }}>0.0</p>
          </DialogContent>
          <DialogActions>
            <Button style={{marginTop: '10px'}} type="button" onClick={this.handleCloseDialog}>Close</Button>
          </DialogActions>
        </Dialog>

        <Card shadow={3} style={{ minWidth: '400px', minHeight: '50px', }}>
          <CardTitle style={{color: '#000' , height: '350px',
             backgroundColor: this.state.bColor }}>
             <span style={{margin: 'auto',fontSize: '180px', color: this.state.tColor}}>{this.state.counter.toFixed(1)}</span>
           </CardTitle>

          <Grid className="demo-grid-2" style={{ marginLeft: '2px', marginRight: '2px', marginTop: '10px' }}>
            <Cell col={3} style={{marginLeft: '75px'}}>
              <Tooltip label="Play" position="right">
                <IconButton onClick={this.startCounter} name="play_arrow" colored style={{ color: '#388e3c' }} />
              </Tooltip>
            </Cell>
            <Cell col={3}>
              <Tooltip label="Pause" position="right">
                <IconButton onClick={this.pauseTime} name="pause"/>
              </Tooltip>
            </Cell>
            <Cell col={2}>
              <Tooltip label="Replay" position="right">
                <IconButton onClick={this.replayTime} name="replay" colored style={{ color: '#dd2c00' }} />
              </Tooltip>
            </Cell>
          </Grid>
          <Grid className="demo-grid-1">
            <Cell col={9}>
              <ProgressBar progress={this.state.counter * (100 / this.props.timeout)} />
            </Cell>
          </Grid>
        </Card>
        <br />
      </div>
    );
  }

}

export default Timer;
