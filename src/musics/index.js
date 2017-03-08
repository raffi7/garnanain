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
  Cell
} from 'react-mdl';
import db from 'localforage';
import QButton from '../../components/QButton';
import Layout from '../../components/Layout';
import s from './styles.css';
import Link from '../../components/Link';
import history from '../history';
import ReactAudioPlayer from 'react-audio-player';
import Timer from '../../components/Timer';

class AboutPage extends React.Component {

  constructor() {
    super();
    this.state = { seen: [] };
  }

  componentDidMount() {
    document.title = 'Երաժշտական';
    db.getItem('musics').then((state) => {
      this.setState(state);
    }).catch((err) => {
      console.log(err);
    })
  }
  gotoCategories() {
    history.push({ pathname: '/categories'});
  }

  makeSeen = (number) => {
    const seen = this.state.seen;
    seen[number] = true;
    this.setState({ seen });

    db.setItem('musics', this.state)
    .catch((err) => {
      console.log(err);
    });
  }

  gotoCategories() {
    history.push({pathname: '/categories'}); // go to page function
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
            <IconButton name="arrow_back" colored onClick={this.gotoCategories}/>
          </Cell>
          <Cell col={1}>Երաժշտական</Cell>
            </Grid>
       </h1>
        <div style={{
          width: '100%',
          marginLeft: 'auto',
          fontSize: '30px'
        }}>
        <Grid className="demo-grid-1" style={{
          marginTop: '10px'
        }}>
          <Cell col={2}>
            <QButton text="1" onClick={() => this.makeSeen(1)} goto="/M1" seen={this.state.seen[1]}/>
          </Cell>
          <Cell col={2}>
            <QButton text="2" onClick={() => this.makeSeen(2)} goto="/M2" seen={this.state.seen[2]}/>
          </Cell>
          <Cell col={2}>
            <QButton text="3" onClick={() => this.makeSeen(3)} goto="/M3" seen={this.state.seen[3]}/>
          </Cell>
          <Cell col={2}>
            <QButton text="4" onClick={() => this.makeSeen(4)} goto="/M4" seen={this.state.seen[4]}/>
          </Cell>
          <Cell col={2}>
            <QButton text="5" onClick={() => this.makeSeen(5)} goto="/M5" seen={this.state.seen[5]}/>
          </Cell>
        </Grid>
        <Grid className="demo-grid-1" style={{
          marginTop: '25px'
        }}>
        <Cell col={2}>
          <QButton text="6" onClick={() => this.makeSeen(6)} goto="/M6" seen={this.state.seen[6]}/>
        </Cell>
          <Cell col={2}>
            <QButton text="7" onClick={() => this.makeSeen(7)} goto="/M7" seen={this.state.seen[7]}/>
          </Cell>
          <Cell col={2}>
            <QButton text="8" onClick={() => this.makeSeen(8)} goto="/M8" seen={this.state.seen[8]}/>
          </Cell>
          <Cell col={2}>
            <QButton text="9" onClick={() => this.makeSeen(9)} goto="/M9" seen={this.state.seen[9]}/>
          </Cell>
          <Cell col={2}>
            <QButton text="10" onClick={() => this.makeSeen(10)} goto="/M10" seen={this.state.seen[10]}/>
          </Cell></Grid>
          <Grid className="demo-grid-1" style={{
            marginTop: '100px'
          }}>
            <Cell col={12}>
          <ReactAudioPlayer
  src="https://upload.wikimedia.org/wikipedia/en/4/45/ACDC_-_Back_In_Black-sample.ogg"
/>
</Cell> </Grid>
<Timer timeout={5}/>

        </div>
      </Layout>
    );
  }

}

export default AboutPage;
