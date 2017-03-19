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
    document.title = 'Մարզական';
    db.getItem('sport').then((state) => {
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

    db.setItem('sport', this.state)
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
          marginTop: '30px'
        }}>
          <Cell col={1}>
            <IconButton name="arrow_back" colored onClick={this.gotoCategories}/>
          </Cell>
          <Cell col={1}>Մարզական</Cell>
            </Grid>
       </h1>
        <div style={{
          width: '100%',
          marginLeft: '40px',
          marginTop: '-20px'
        }}>
        <Grid className="demo-grid-1" style={{
        }}>
          <Cell col={2}>
            <QButton text="1" onClick={() => this.makeSeen(1)} goto="/sport/0" seen={this.state.seen[1]}/>
          </Cell>
          <Cell col={2}>
            <QButton text="2" onClick={() => this.makeSeen(2)} goto="/sport/1" seen={this.state.seen[2]}/>
          </Cell>
          <Cell col={2}>
            <QButton text="3" onClick={() => this.makeSeen(3)} goto="/sport/2" seen={this.state.seen[3]}/>
          </Cell>
          <Cell col={2}>
            <QButton text="4" onClick={() => this.makeSeen(4)} goto="/sport/3" seen={this.state.seen[4]}/>
          </Cell>
          <Cell col={2}>
            <QButton text="5" onClick={() => this.makeSeen(5)} goto="/sport/4" seen={this.state.seen[5]}/>
          </Cell>
          <Cell col={2}>
            <QButton text="6" onClick={() => this.makeSeen(6)} goto="/sport/5" seen={this.state.seen[6]}/>
          </Cell>
        </Grid>
        <Grid className="demo-grid-1" style={{
          marginTop: '5px'
        }}>
          <Cell col={2}>
            <QButton text="7" onClick={() => this.makeSeen(7)} goto="/sport/6" seen={this.state.seen[7]}/>
          </Cell>
          <Cell col={2}>
            <QButton text="8" onClick={() => this.makeSeen(8)} goto="/sport/7" seen={this.state.seen[8]}/>
          </Cell>
          <Cell col={2}>
            <QButton text="9" onClick={() => this.makeSeen(9)} goto="/sport/8" seen={this.state.seen[9]}/>
          </Cell>
          <Cell col={2}>
            <QButton text="10" onClick={() => this.makeSeen(10)} goto="/sport/9" seen={this.state.seen[10]}/>
          </Cell>
          <Cell col={2}>
            <QButton text="11" onClick={() => this.makeSeen(11)} goto="/sport/10" seen={this.state.seen[11]}/>
          </Cell>
          <Cell col={2}>
            <QButton text="12" onClick={() => this.makeSeen(12)} goto="/sport/11" seen={this.state.seen[12]}/>
          </Cell>
        </Grid>
        <Grid className="demo-grid-1" style={{
          marginTop: '5px'
        }}>
          <Cell col={2}>
            <QButton text="13" onClick={() => this.makeSeen(13)} goto="/sport/12" seen={this.state.seen[13]}/>
          </Cell>
          <Cell col={2}>
            <QButton text="14" onClick={() => this.makeSeen(14)} goto="/sport/13" seen={this.state.seen[14]}/>
          </Cell>
          <Cell col={2}>
            <QButton text="15" onClick={() => this.makeSeen(15)} goto="/sport/14" seen={this.state.seen[15]}/>
          </Cell>
          <Cell col={2}>
            <QButton text="16" onClick={() => this.makeSeen(16)} goto="/sport/15" seen={this.state.seen[16]}/>
          </Cell>
          <Cell col={2}>
            <QButton text="17" onClick={() => this.makeSeen(17)} goto="/sport/16" seen={this.state.seen[17]}/>
          </Cell>
          <Cell col={2}>
            <QButton text="18" onClick={() => this.makeSeen(18)} goto="/sport/17" seen={this.state.seen[18]}/>
          </Cell>
        </Grid>
        <Grid className="demo-grid-1" style={{
          marginTop: '5px'
        }}>
          <Cell col={2}>
            <QButton text="19" onClick={() => this.makeSeen(19)} goto="/sport/18" seen={this.state.seen[19]}/>
          </Cell>
          <Cell col={2}>
            <QButton text="20" onClick={() => this.makeSeen(20)} goto="/sport/19" seen={this.state.seen[20]}/>
          </Cell>
          <Cell col={2}>
            <QButton text="21" onClick={() => this.makeSeen(21)} goto="/sport/20" seen={this.state.seen[21]}/>
          </Cell>
          <Cell col={2}>
            <QButton text="22" onClick={() => this.makeSeen(22)} goto="/sport/21" seen={this.state.seen[22]}/>
          </Cell>
          <Cell col={2}>
            <QButton text="23" onClick={() => this.makeSeen(23)} goto="/sport/22" seen={this.state.seen[23]}/>
          </Cell>
          <Cell col={2}>
            <QButton text="24" onClick={() => this.makeSeen(24)} goto="/sport/23" seen={this.state.seen[24]}/>
          </Cell>
        </Grid>
        <Grid className="demo-grid-1" style={{
          marginTop: '5px'
        }}>
          <Cell col={2}>
            <QButton text="25" onClick={() => this.makeSeen(25)} goto="/sport/24" seen={this.state.seen[25]}/>
          </Cell>
          <Cell col={2}>
            <QButton text="26" onClick={() => this.makeSeen(26)} goto="/sport/25" seen={this.state.seen[26]}/>
          </Cell>
          <Cell col={2}>
            <QButton text="27" onClick={() => this.makeSeen(27)} goto="/sport/26" seen={this.state.seen[27]}/>
          </Cell>
          <Cell col={2}>
            <QButton text="28" onClick={() => this.makeSeen(28)} goto="/sport/27" seen={this.state.seen[28]}/>
          </Cell>
          <Cell col={2}>
            <QButton text="29" onClick={() => this.makeSeen(29)} goto="/sport/28" seen={this.state.seen[29]}/>
          </Cell>
          <Cell col={2}>
            <QButton text="30" onClick={() => this.makeSeen(30)} goto="/sport/29" seen={this.state.seen[30]}/>
          </Cell>
        </Grid>
        <Grid className="demo-grid-1" style={{
          marginTop: '5px'
        }}>
          <Cell col={2}>
            <QButton text="31" onClick={() => this.makeSeen(31)} goto="/sport/30" seen={this.state.seen[31]}/>
          </Cell>
          <Cell col={2}>
            <QButton text="32" onClick={() => this.makeSeen(32)} goto="/sport/31" seen={this.state.seen[32]}/>
          </Cell>
          <Cell col={2}>
            <QButton text="33" onClick={() => this.makeSeen(33)} goto="/sport/32" seen={this.state.seen[33]}/>
          </Cell>
        </Grid>
            </div>
      </Layout>
    );
  }

}

export default AboutPage;
