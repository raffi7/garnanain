import React from 'react';
import {
  IconButton,
} from 'react-mdl';
import Layout from '../../components/Layout';
import ResultDialog from '../../components/ResultDialog';
import s from '../Questionstyles.css';
import history from '../history';
import QMusic from '../../components/QMusic';
import Questions from './questions';

export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openDialogCorrect: false,
      openDialogWrong: false,
      pauseTimer: false,

    };
  }

  componentDidMount() {
    document.title = 'Ե';
  }

  gotoMusic = () => {
    history.push({ pathname: '/musics' });
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
    this.setState({ seen,
      pauseTimer: true,
    });

  }

  render() {
    const id = parseInt(this.props.route.params.id, 10);
    const question = Questions[id];

    return (
      <Layout className={s.content}>
        <h1 className={s.fontstyle1} style={{ marginTop: '0px' }}>
          <IconButton name="arrow_back" colored onClick={this.gotoMusic} />
        </h1>
        <QMusic
          src={question.src}
          answerSong={question.answerSong}
          answerPic={question.songCover}
          name={question.name}
          lastname={question.lastName}
          onClick={() => this.makeSeen()}
          seen={this.state.seen}
          crct={this.correct}
          wrng={this.wrong}
        />
        <ResultDialog score="" correct={this.state.openDialogCorrect} wrong={this.state.openDialogWrong} />
      </Layout>
    );
  }

}
