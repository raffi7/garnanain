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
  ListItem,
  ListItemContent
} from 'react-mdl';
import Layout from '../../components/Layout';
import ResultDialog from '../../components/ResultDialog';
import s from './styles.css';
import Link from '../../components/Link';
import AnswerCard from '../../components/AnswerCard';
import history from '../history';

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
    setInterval(this.addCounter, 1000);
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
        <Cell col={11} className={s.questionFont}>Հարց առաջին...kjlgkjtregrthth <br/>rgregt </Cell>
          </Grid>
     </h1>
     <List>
  <ListItem>
    <IconButton name="star" onClick={this.gotoScience}></IconButton>
  </ListItem>
  <ListItem>
    <ListItemContent><IconButton name="star" onClick={this.gotoScience} /> Aaron Paul</ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent icon="person">Bob Odenkirk</ListItemContent>
  </ListItem>
</List>

        <Grid className="demo-grid-1">
          <Cell col={3}><AnswerCard text="1st Answer" onClick={this.correct} /></Cell>
          <Cell col={3}><AnswerCard text="2st Answer" onClick={this.wrong} /></Cell>
          <Cell col={3}><AnswerCard text="3rd Answer" onClick={this.wrong} /></Cell>
          <Cell col={3}><AnswerCard text="4th Answer" onClick={this.wrong} /></Cell>
        </Grid>
        <ResultDialog score="10" correct={this.state.openDialogCorrect} wrong={this.state.openDialogWrong} />
      </Layout>
    );
  }

}
