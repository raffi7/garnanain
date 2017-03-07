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
import db from 'localforage';
import Layout from '../../components/Layout';
import ResultDialog from '../../components/ResultDialog';
import s from './styles.css';
import Link from '../../components/Link';
import AnswerCard from '../../components/AnswerCard';
import history from '../history';

export default class Question extends React.Component {


  componentDidMount() {
    document.title = 'Setting';
    setInterval(this.addCounter, 1000);
  }
  clearDb = () => {
    db.setItem('science', {})
    .catch((err) => {
      console.log(err);
    });
  }
  clearScoreDb = () => {
    db.setItem('scores', {})
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <Layout className={s.content}>
        <h1 className={s.fontstyle1} style={{
         marginTop: '60px'
        }}>Setting</h1>
       <List>
         <ListItem>
           <span style={{marginRight: '20px'}}>
             <FABButton onClick={this.clearDb} colored style={{color: '#37474f', backgroundColor: '#eceff1'}} mini>
               <Icon name="delete" />
             </FABButton>
          </span>
            Clear Question Arrangement
          </ListItem>
        <ListItem>
          <span style={{ marginRight: '20px' }}>
            <FABButton onClick={this.clearScoreDb} colored style={{ color: '#37474f', backgroundColor: '#eceff1' }} mini>
              <Icon name="delete" />
              </FABButton>
            </span>
            Clear Score Arrangement
          </ListItem>
      </List>


      </Layout>
    );
  }

}
