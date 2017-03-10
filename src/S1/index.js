import React from 'react';
import {
  IconButton,
  Grid,
  Cell,
} from 'react-mdl';
import { shuffle } from 'underscore';
import Layout from '../../components/Layout';
import ResultDialog from '../../components/ResultDialog';
import s from '../Questionstyles.css';
import AnswerCard from '../../components/AnswerCard';
import history from '../history';
import Timer from '../../components/Timer';
import Questions from './questions';

export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openDialogCorrect: false,
      openDialogWrong: false,
    };
  }

  answer = (correct) => {
    this.setState({
      openDialogCorrect: correct,
      openDialogWrong: !correct,
    });
  }

  gotoScience = () => {
    history.push({ pathname: '/science' });
  }

  componentWillMount() {
    const id = parseInt(this.props.route.params.id, 10);
    this.question = Questions[id];
    this.answers = shuffle(this.question.answers);
  }

  componentDidMount() {
    document.title = 'Գ1';
  }

  render() {
    return (
      <Layout className={s.content}>
        <h1 className={s.fontstyle1} style={{ marginTop: '20px' }}>
          <Grid className="demo-grid-1" style={{ marginTop: '20px' }}>
            <Cell col={1}>
              <IconButton name="arrow_back" colored onClick={this.gotoScience} />
            </Cell>
            <Cell col={11} className={s.ScienceQuestionFont}>{this.question.text}</Cell>
          </Grid>
        </h1>

        <Grid style={{ marginLeft: '-10px' }} className="demo-grid-1">

          {this.answers.map((answer, i) =>
            (
              <Cell col={3} key={i}>
                <AnswerCard
                  color={'#0d47a1'}
                  text={answer.text}
                  onClick={() => this.answer(answer.correct)}
                  fontSize={answer.fontSize}
                />
              </Cell>
            ))}

        </Grid>
        <div style={{ marginLeft: '299px', marginTop: '15px' }}> <Timer timeout={5} /></div>
        <ResultDialog score="5" correct={this.state.openDialogCorrect} wrong={this.state.openDialogWrong} />
      </Layout>
    );
  }

}
