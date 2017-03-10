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
  DialogActions
} from 'react-mdl';
import Layout from '../../components/Layout';
import ResultDialog from '../../components/ResultDialog';
import s from '../Questionstyles.css';
import Link from '../../components/Link';
import AnswerCard from '../../components/AnswerCard';
import history from '../history';
import Timer from '../../components/Timer';
import Questions from './questions.js';


export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openDialogCorrect: false,
      openDialogWrong: false,
    };
  }

  componentDidMount() {
    document.title = 'Գ1';
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

  gotoScience = () => {
    history.push({ pathname: '/science' });
  }

  render() {
    let answerColor = '#0d47a1';
    let x = 0;
    if (x === 1) {
      answerColor = 'green';
    }

    const id = parseInt(this.props.route.params.id, 10);
    const question = Questions[id];

    return (
      <Layout className={s.content}>
        <h1 className={s.fontstyle1} style={{marginTop: '20px'}}>
          <Grid className="demo-grid-1" style={{marginTop: '20px'}}>
            <Cell col={1}>
              <IconButton name="arrow_back" colored onClick={this.gotoScience}/>
            </Cell>
            <Cell col={11} className={s.ScienceQuestionFont}>{question.text}</Cell>
          </Grid>
        </h1>

        <Grid style={{marginLeft: '-10px'}} className="demo-grid-1">
          <Cell col={3}><AnswerCard color={'#0d47a1'} text={question.answers[0]} onClick={this.correct} fontSize={question.fontSize} /></Cell>
          <Cell col={3}><AnswerCard color={'#0d47a1'} text={question.answers[1]} onClick={this.wrong} /></Cell>
          <Cell col={3}><AnswerCard color={'#0d47a1'} text={question.answers[2]} onClick={this.wrong} /></Cell>
          <Cell col={3}><AnswerCard color={'#0d47a1'} text={question.answers[3]} onClick={this.wrong} /></Cell>
        </Grid>
        <div style={{ marginLeft: '299px', marginTop: '15px' }}> <Timer timeout={5} /></div>
        <ResultDialog score="5" correct={this.state.openDialogCorrect} wrong={this.state.openDialogWrong} />
      </Layout>
    );
  }

}
