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


class AboutPage extends React.Component {
  constructor() {
    super();
    this.state = { seen: [] };
  }

  componentDidMount() {
    document.title = 'Գիտական';
    db.getItem('science').then((state) => {
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

    db.setItem('science', this.state)
    .catch((err) => {
      console.log(err);
    });
  }


  render() {
    return (
      <Layout className={s.content}>
        <h1 className={s.fontstyle1} style={{
          marginTop: '20px'
        }}><Grid className="demo-grid-1" style={{
          marginTop: '30px'
        }}>
          <Cell col={1}>
            <IconButton name="arrow_back" colored onClick={this.gotoCategories}/>
          </Cell>
          <Cell col={7}>Գիտական</Cell>
            </Grid>
       </h1>
        <div style={{
          width: '100%',
          marginLeft: '40px'
        }}>
          <Grid className="demo-grid-1">
            <Cell col={2}>
              <QButton text="1" onClick={() => this.makeSeen(1)} goto="/science/0" seen={this.state.seen[1]}/>
            </Cell>
            <Cell col={2}>
              <QButton text="2" onClick={() => this.makeSeen(2)} goto="/science/1" seen={this.state.seen[2]}/>
            </Cell>
            <Cell col={2}>
              <QButton text="3" onClick={() => this.makeSeen(3)} goto="/science/2" seen={this.state.seen[3]}/>
            </Cell>
            <Cell col={2}>
              <QButton text="4" onClick={() => this.makeSeen(4)} goto="/science/3" seen={this.state.seen[4]}/>
            </Cell>
            <Cell col={2}>
              <QButton text="5" onClick={() => this.makeSeen(5)} goto="/science/4" seen={this.state.seen[5]}/>
            </Cell>
            <Cell col={2}>
              <QButton text="6" onClick={() => this.makeSeen(6)} goto="/science/5" seen={this.state.seen[6]}/>
            </Cell>
          </Grid>
          <Grid className="demo-grid-1" style={{
            marginTop: '5px'
          }}>
            <Cell col={2}>
              <QButton text="7" onClick={() => this.makeSeen(7)} goto="/science/6" seen={this.state.seen[7]}/>
            </Cell>
            <Cell col={2}>
              <QButton text="8" onClick={() => this.makeSeen(8)} goto="/science/7" seen={this.state.seen[8]}/>
            </Cell>
            <Cell col={2}>
              <QButton text="9" onClick={() => this.makeSeen(9)} goto="/science/8" seen={this.state.seen[9]}/>
            </Cell>
            <Cell col={2}>
              <QButton text="10" onClick={() => this.makeSeen(10)} goto="/science/9" seen={this.state.seen[10]}/>
            </Cell>
            <Cell col={2}>
              <QButton text="11" onClick={() => this.makeSeen(11)} goto="/science/10" seen={this.state.seen[11]}/>
            </Cell>
            <Cell col={2}>
              <QButton text="12" onClick={() => this.makeSeen(12)} goto="/science/11" seen={this.state.seen[12]}/>
            </Cell>
          </Grid>
          <Grid className="demo-grid-1" style={{
            marginTop: '5px'
          }}>
            <Cell col={2}>
              <QButton text="13" onClick={() => this.makeSeen(13)} goto="/science/12" seen={this.state.seen[13]}/>
            </Cell>
            <Cell col={2}>
              <QButton text="14" onClick={() => this.makeSeen(14)} goto="/science/13" seen={this.state.seen[14]}/>
            </Cell>
            <Cell col={2}>
              <QButton text="15" onClick={() => this.makeSeen(15)} goto="/science/14" seen={this.state.seen[15]}/>
            </Cell>
            <Cell col={2}>
              <QButton text="16" onClick={() => this.makeSeen(16)} goto="/science/15" seen={this.state.seen[16]}/>
            </Cell>
            <Cell col={2}>
              <QButton text="17" onClick={() => this.makeSeen(17)} goto="/science/16" seen={this.state.seen[17]}/>
            </Cell>
            <Cell col={2}>
              <QButton text="18" onClick={() => this.makeSeen(18)} goto="/science/17" seen={this.state.seen[18]}/>
            </Cell>
          </Grid>
          <Grid className="demo-grid-1" style={{
            marginTop: '5px'
          }}>
            <Cell col={2}>
              <QButton text="19" onClick={() => this.makeSeen(19)} goto="/science/18" seen={this.state.seen[19]}/>
            </Cell>
            <Cell col={2}>
              <QButton text="20" onClick={() => this.makeSeen(20)} goto="/science/19" seen={this.state.seen[20]}/>
            </Cell>
            <Cell col={2}>
              <QButton text="21" onClick={() => this.makeSeen(21)} goto="/science/20" seen={this.state.seen[21]}/>
            </Cell>
            <Cell col={2}>
              <QButton text="22" onClick={() => this.makeSeen(22)} goto="/science/21" seen={this.state.seen[22]}/>
            </Cell>
            <Cell col={2}>
              <QButton text="23" onClick={() => this.makeSeen(23)} goto="/science/22" seen={this.state.seen[23]}/>
            </Cell>
            <Cell col={2}>
              <QButton text="24" onClick={() => this.makeSeen(24)} goto="/science/23" seen={this.state.seen[24]}/>
            </Cell>
          </Grid>
          <Grid className="demo-grid-1" style={{
            marginTop: '5px'
          }}>
            <Cell col={2}>
              <QButton text="25" onClick={() => this.makeSeen(25)} goto="/science/24" seen={this.state.seen[25]}/>
            </Cell>
            <Cell col={2}>
              <QButton text="26" onClick={() => this.makeSeen(26)} goto="/science/25" seen={this.state.seen[26]}/>
            </Cell>
            <Cell col={2}>
              <QButton text="27" onClick={() => this.makeSeen(27)} goto="/science/26" seen={this.state.seen[27]}/>
            </Cell>
            <Cell col={2}>
              <QButton text="28" onClick={() => this.makeSeen(28)} goto="/science/27" seen={this.state.seen[28]}/>
            </Cell>
            <Cell col={2}>
              <QButton text="29" onClick={() => this.makeSeen(29)} goto="/science/28" seen={this.state.seen[29]}/>
            </Cell>
            <Cell col={2}>
              <QButton text="30" onClick={() => this.makeSeen(30)} goto="/science/29" seen={this.state.seen[30]}/>
            </Cell>
          </Grid>

        </div>
      </Layout>
    );
  }

}

export default AboutPage;
