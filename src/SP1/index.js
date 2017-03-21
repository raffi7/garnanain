import React from 'react';
import {
  IconButton,
  Grid,
  Cell,
  Dialog,
  DialogTitle,
  DialogContent,
  Icon,
  Spinner,
} from 'react-mdl';
import { shuffle } from 'underscore';
import Layout from '../../components/Layout';
import ResultDialog from '../../components/ResultDialog';
import s from '../Questionstyles.css';
import AnswerCard from '../../components/AnswerCard';
import history from '../history';
import Timer from '../../components/Timer';
import Questions from './questions';
import time from './time.gif';

export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openDialogCorrect: false,
      openDialogWrong: false,
      openDialogWait: false,
      reveal: false,
      pauseTimer: false,
    };
  }

  componentWillMount() {
    const id = parseInt(this.props.route.params.id, 10);
    this.question = Questions[id];
    this.answers = shuffle(this.question.answers);
  }

  componentDidMount() {
    document.title = this.question.id;
  }
  showResult = (correct) => {
    this.setState({
      openDialogCorrect: correct,
      openDialogWrong: !correct,
      openDialogWait: false,
      reveal: true,
    });
  }

  answer = (correct) => {
    this.setState({ openDialogWait: true, pauseTimer: true });
    setTimeout(this.showResult, 2500, correct);
  }

  gotoSport = () => {
    history.push({ pathname: '/sport' });
  }

  render() {
    return (
      <Layout className={s.content}>
        <h1 className={s.fontstyle1} style={{ marginTop: '55px' }}>
          <Grid className="demo-grid-1" style={{ marginTop: '20px' }}>
            <Cell col={1}>
              <IconButton name="arrow_back" colored onClick={this.gotoSport} />
            </Cell>
            <Cell col={11} className={s.ScienceQuestionFont}
              style={{ fontSize: this.question.fontsize}}>{this.question.text}
            </Cell>
          </Grid>
        </h1>
        <Grid style={{ fontSize: '30px', marginTop: '50px',marginBottom: '-47px'  }} className="demo-grid-1">
          <Cell offset={1} col={1} style={{ zIndex: '2' }}>
            <Icon style={{ color: '#E91E63', fontSize: '60px', marginLeft: '90px' }} name="looks_one" />
          </Cell>
          <Cell offset={2} col={1} style={{ zIndex: '2' }}>
            <Icon style={{ color: '#E91E63', fontSize: '60px', marginLeft: '90px' }} name="looks_two" />
          </Cell>
          <Cell offset={2} col={1} style={{ zIndex: '2' }}>
            <Icon style={{ color: '#E91E63', fontSize: '60px', marginLeft: '90px' }} name="looks_3" />
          </Cell>
          <Cell offset={2} col={1} style={{ zIndex: '2' }}>
            <Icon style={{ color: '#E91E63', fontSize: '60px', marginLeft: '90px' }} name="looks_4" />
          </Cell>
        </Grid>
        <Grid style={{marginLeft: '-10px'}} className="demo-grid-1">

          {this.answers.map((answer, i) =>
            (
              <Cell col={3} key={i}>
                <AnswerCard
                  color={(this.state.reveal && answer.correct) ? '#2E7D32' : '#0d47a1'}
                  text={answer.text}
                  onClick={() => this.answer(answer.correct)}
                  fontSize={answer.fontSize}
                />
              </Cell>
            ))}

        </Grid>
        <div style={{ marginLeft: '299px', marginTop: '15px' }}> <Timer timeout={20} pause={this.state.pauseTimer} /></div>
          <Dialog style={{ textAlign: 'center',background: `url(${time}) center / cover`, minHeight: '200px' }} open={this.state.openDialogWait}>
          </Dialog>
          <ResultDialog score="5" correct={this.state.openDialogCorrect} wrong={this.state.openDialogWrong} />

      </Layout>
    );
  }

}
