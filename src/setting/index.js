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
    db.setItem('images', {})
    .catch((err) => {
      console.log(err);
    });
    db.setItem('musics', {})
    .catch((err) => {
      console.log(err);
    });
    db.setItem('sport', {})
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
  gotoHome() {
    history.push({pathname: '/'}); // go to page function
  }

  render() {
    return (
      <Layout className={s.content}>
        <h1 className={s.fontstyle1} style={{
          marginTop: '45px'
        }}>
        <Grid className="demo-grid-1" style={{
          marginTop: '10px'
        }}>
          <Cell col={1}>
            <IconButton name="home" colored onClick={this.gotoHome}/>
          </Cell>
          <Cell col={1}>Setting</Cell>
            </Grid>
       </h1>
       <Grid className="demo-grid-2" style={{
         marginTop: '-45px'
       }}>
         <Cell col={6}>
           <List>
             <ListItem><span style={{fontSize: '25px'}}>Score Manual Setting</span></ListItem>
             <ListItem>
               <span style={{marginRight: '20px'}}>
                 <FABButton colored style={{color: '#eceff1', backgroundColor: '#f44336'}} mini>
                   -5
                 </FABButton>
                 <FABButton colored
                   style={{color: '#eceff1',
                           backgroundColor: '#388e3c',
                           marginLeft: '5px'}} mini>
                   +5
                 </FABButton>
              </span>
               Team1
              </ListItem>
              <ListItem>
                <span style={{marginRight: '20px'}}>
                  <FABButton colored style={{color: '#eceff1', backgroundColor: '#f44336'}} mini>
                    -5
                  </FABButton>
                  <FABButton colored
                    style={{color: '#eceff1',
                            backgroundColor: '#388e3c',
                            marginLeft: '5px'}} mini>
                    +5
                  </FABButton>
               </span>
                 Team2
               </ListItem>
               <ListItem>
                 <span style={{marginRight: '20px'}}>
                   <FABButton colored style={{color: '#eceff1', backgroundColor: '#f44336'}} mini>
                     -5
                   </FABButton>
                   <FABButton colored
                     style={{color: '#eceff1',
                             backgroundColor: '#388e3c',
                             marginLeft: '5px'}} mini>
                     +5
                   </FABButton>
                </span>
                  Team3
                </ListItem>
                <ListItem>
                  <span style={{marginRight: '20px'}}>
                    <FABButton colored style={{color: '#eceff1', backgroundColor: '#f44336'}} mini>
                      -5
                    </FABButton>
                    <FABButton colored
                      style={{color: '#eceff1',
                              backgroundColor: '#388e3c',
                              marginLeft: '5px'}} mini>
                      +5
                    </FABButton>
                 </span>
                   Team4
                 </ListItem>
                 <ListItem>
                   <span style={{marginRight: '20px'}}>
                     <FABButton colored style={{color: '#eceff1', backgroundColor: '#f44336'}} mini>
                       -5
                     </FABButton>
                     <FABButton colored
                       style={{color: '#eceff1',
                               backgroundColor: '#388e3c',
                               marginLeft: '5px'}} mini>
                       +5
                     </FABButton>
                  </span>
                    Team5
                  </ListItem>
          </List>
         </Cell>
         <Cell col={6}>
       <List>
         <ListItem><span style={{fontSize: '25px'}}>General Setting</span></ListItem>
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
      </Cell>
</Grid>

      </Layout>
    );
  }

}
