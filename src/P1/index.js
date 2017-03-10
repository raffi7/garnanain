import React from 'react';
import {
  IconButton,
} from 'react-mdl';
import Layout from '../../components/Layout';
import ResultDialog from '../../components/ResultDialog';
import s from '../Questionstyles.css';
import history from '../history';
import Timer from '../../components/Timer';
import QPicture from '../../components/QPicture';
import Questions from './questions';

export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openDialogCorrect: false,
      openDialogWrong: false,
      seen: false,
    };
  }

  componentDidMount() {
    document.title = 'Ն1';
  }

  gotoImages = () => {
    history.push({ pathname: '/images' });
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
    const id = parseInt(this.props.route.params.id, 10);
    const question = Questions[id];

    return (
      <Layout className={s.content}>
        <h1 className={s.fontstyle1} style={{ marginTop: '0px' }}>
          <IconButton name="arrow_back" colored onClick={this.gotoImages} />
        </h1>
        <QPicture
          answerPic={question.answerPic}
          questionPic={question.questionPic}
          name={question.name}
          lastname={question.lastName}
          onClick={() => this.makeSeen()} seen={this.state.seen}
          crct={this.correct}
          wrng={this.wrong}
        />
        <div style={{ marginLeft: '299px', marginTop: '15px' }}>
          <Timer timeout={60} />
        </div>
        <ResultDialog score="10" correct={this.state.openDialogCorrect} wrong={this.state.openDialogWrong} />
      </Layout>
    );
  }

}
