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
import s from './styles.css';
import Link from '../../components/Link';
import AnswerCard from '../../components/AnswerCard';
import history from '../history';

class AboutPage extends React.Component {
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

  handleOpenDialogCorrect = () => {
    this.setState({
      openDialogCorrect: true,
      openDialogWrong: false,
    });
  }
  handleOpenDialogWrong = () => {
    this.setState({
      openDialogWrong: true,
      openDialogCorrect: false,
    });
  }
  handleCloseDialog = () => {
    this.setState({
      openDialogCorrect: false,
      openDialogWrong: false
    });
  }


  render() {
    return (
      <Layout className={s.content}>
        <h1 className={s.questionFont}>Հարց առաջին... </h1>
          <Grid className="demo-grid-1">
          <Cell col={3}><AnswerCard text="1st Answer" onClick={this.handleOpenDialogCorrect} /></Cell>
          <Cell col={3}><AnswerCard text="2st Answer" onClick={this.handleOpenDialogCorrect} /></Cell>
          <Cell col={3}><AnswerCard text="3rd Answer" onClick={this.handleOpenDialogWrong} /></Cell>
          <Cell col={3}><AnswerCard text="4th Answer" onClick={this.handleOpenDialogWrong} /></Cell>

</Grid>
<ResultDialog correct={this.state.openDialogCorrect} wrong={this.state.openDialogWrong}></ResultDialog>

      </Layout>
    );
  }

}

export default AboutPage;
