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
  Chip,
  ChipContact
} from 'react-mdl';
import Chart from 'react-highcharts';
import db from 'localforage';
import Layout from '../../components/Layout';
import ResultDialog from '../../components/ResultDialog';
import s from './styles.css';
import Link from '../../components/Link';
import AnswerCard from '../../components/AnswerCard';
import history from '../history';
import teams from '../teams';

export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = { scores: [] };
  }
  componentWillMount() {
    this.updateScores();
  }
  componentDidMount() {
    document.title = 'Setting';
    setInterval(this.addCounter, 1000);
  }
  gotoHome() {
    history.push({ pathname: '/' });
  }
  updateScores = () => {
    db.getItem('scores').then((scores) => {
      if (scores != null) {
        this.setState({ scores });
      }
    });
  }

  render() {
    return (
      <Layout className={s.content}>
        <h1 className={s.fontstyle1} style={{
          marginTop: '45px'
        }}>
        <Grid className="demo-grid-1" style={{
          marginTop: '20px'
        }}>
          <Cell col={1}>
            <IconButton name="home" colored onClick={this.gotoHome}/>
          </Cell>
          <Cell col={1}>Results</Cell>
            </Grid>
       </h1>
       <Grid style={{ marginTop: '20px',marginLeft: '10px'}}>
     {teams.map(team => (
       <Cell col={1} style={{marginLeft: '50px'}} >
       <Card shadow={0} style={{width: '110px', minHeight: '150px', backgroundColor: team.backColor, margin: 'auto'}}>
         <CardTitle expand style={{fontSize: '67px',color: 'white'}}>{this.state.scores[team.id]}</CardTitle>
         <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
           <span style={{color: '#fff', fontSize: '26px', fontWeight: '500'}}>
        {team.name}
    </span>
         </CardActions>
       </Card>
       </Cell>
        ))}
        </Grid>
      </Layout>
    );
  }

}
