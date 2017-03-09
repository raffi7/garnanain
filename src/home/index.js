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
  Cell,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from 'react-mdl';
import db from 'localforage';
import Layout from '../../components/Layout';
import s from './styles.css';
import homepic from './29G.jpg';
import Link from '../../components/Link';
import history from '../history';

class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.OpenDialog = this.OpenDialog.bind(this);
    this.CloseDialog = this.CloseDialog.bind(this);
  }

  componentDidMount() {
    document.title = 'Home';
  }
  OpenDialog() {
    this.setState({
      openDialog: true
    });
  }
  CloseDialog() {
    this.setState({
      openDialog: false
    });
  }
  agreeClearDb = () => {
    this.clearDb();
    this.CloseDialog();
  }

  gotoCategories() {
    history.push({ pathname: '/categories' });
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
    db.setItem('scores', {})
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <Layout className={s.content}>
        <h1 className={s.fontstyle1}>Home</h1>
        <div style={{
          width: '100%',
          margin: 'auto',
        }}>
          <Grid className="demo-grid-1" style={{
          }}>
            <Cell col={12}>
              <Card shadow={5} style={{
                width: '358px',
                margin: 'auto',
              }}>
                <CardTitle style={{
                  color: '#fff',
                  height: '400px',
                  background: `url(${homepic}) center / cover`
                }}/>
                <CardText>
                29-րդ Գարնանային խաղեր
                </CardText>
                <CardActions border>
                  <Button colored style={{
                    fontSize: 20
                  }} onClick={this.gotoCategories}>start</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <Tooltip label="Restart Game" position="left">
                    <IconButton name="toys" style={{color: '#4a6d4b'}} onClick={this.OpenDialog} />
                  </Tooltip>

                </CardMenu>
              </Card>
            </Cell>
          </Grid>
          <div>
        <Dialog open={this.state.openDialog}>
          <DialogTitle>Are You Sure Want To Restart the Game?</DialogTitle>
          <DialogContent>
            <p>If you prees AGREE all Question and Scores Arrangements will delete.</p>
            <p>prees CANCEL to close.</p>
          </DialogContent>
          <DialogActions>
            <Button type='button' onClick={this.agreeClearDb}>Agree</Button>
            <Button type='button' onClick={this.CloseDialog}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
        </div>
      </Layout>
    );
  }

}

export default AboutPage;
