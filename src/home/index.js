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
import backSong from './backSong.mp3';

class AboutPage extends React.Component {

  componentDidMount() {
    document.title = 'Home';
  }

  gotoCategories() {
    history.push({ pathname: '/categories' });
  }

  playSong = () => {
    const audio = new Audio(backSong);
    audio.play();
  }

  render() {
    return (
      <Layout className={s.content}>
        <div style={{
          width: '100%',
          margin: 'auto',
          marginTop: '110px'
        }}>
          <div className={s.musicControl}>
          <IconButton name="play_circle_outline" onClick={this.playSong} style={{ color: '#00838f' }} colored />
          </div>
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
                  <Button
                    colored style={{
                      fontSize: 20
                    }} onClick={this.gotoCategories}
                  >
                  start
                </Button>
                </CardActions>
              </Card>
            </Cell>
          </Grid>
        </div>
      </Layout>
    );
  }

}

export default AboutPage;
