import React from 'react';
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
import m from '!file-loader!./m.ogg';
import ReactAudioPlayer from 'react-audio-player';
import Layout from '../../components/Layout';
import ResultDialog from '../../components/ResultDialog';
import s from '../Questionstyles.css';
import history from '../history';
import Timer from '../../components/Timer';
import QMusic from '../../components/QMusic';


export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openDialogCorrect: false,
      openDialogWrong: false,
    };
  }

  componentDidMount() {
    document.title = 'Ե1';
  }

  gotoMusic = () => {
    history.push({ pathname: '/musics'});
  }
  correct = () => {
    this.setState({
      openDialogCorrect: true,
      openDialogWrong: false,
    });
  }
  wrong = () => {
    this.setState({
      openDialogWrong: true,
      openDialogCorrect: false,
    });
  }
  makeSeen = () => {
    let seen = this.state.seen;
    seen = true;
    this.setState({ seen });
  }


  render() {
    return (
      <Layout className={s.content}>
        <h1 className={s.fontstyle1} style={{
        marginTop: '0px'
      }}>
          <IconButton name="arrow_back" colored onClick={this.gotoMusic} />
        </h1>
        <QMusic
          src={m}
          name="Name" lastname="LastName"
          onClick={() => this.makeSeen()} seen={this.state.seen}
          crct={this.correct} wrng={this.wrong}
        />
      <div style={{ marginLeft: '299px', marginTop: '15px' }}> <Timer timeout={5} /></div>
        <ResultDialog score="10" correct={this.state.openDialogCorrect} wrong={this.state.openDialogWrong} />
      </Layout>
    );
  }

}
