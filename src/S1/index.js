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

export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openDialogCorrect: false,
      openDialogWrong: false
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
    history.push({ pathname: '/science'});
  }


  render() {
    return (
      <Layout className={s.content}>
        <h1 className={s.fontstyle1} style={{
        marginTop: '20px'
      }}><Grid className="demo-grid-1" style={{
        marginTop: '20px'
      }}>
        <Cell col={1}>
          <IconButton name="arrow_back" colored onClick={this.gotoScience}/>
        </Cell>
        <Cell col={11} className={s.ScienceQuestionFont}>Որ Երաժիշտ և երքահանն էր խլականջ</Cell>
          </Grid>
     </h1>

        <Grid className="demo-grid-1">
          <Cell col={3}><AnswerCard text="1st Answer" fontSize={'10px'} onClick={this.correct} /></Cell>
          <Cell col={3}><AnswerCard text="2st Answer" onClick={this.wrong} /></Cell>
          <Cell col={3}><AnswerCard text="3rd Answer" onClick={this.wrong} /></Cell>
          <Cell col={3}><AnswerCard text="4th Answer" onClick={this.wrong} /></Cell>
        </Grid>
        <Timer timeout={5}/>
        <ResultDialog score="5" correct={this.state.openDialogCorrect} wrong={this.state.openDialogWrong} />
      </Layout>
    );
  }

}
