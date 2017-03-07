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
import Layout from '../../components/Layout';
import s from './styles.css';
import Link from '../../components/Link';
import history from '../history';
import QButton from '../../components/QButton';


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
    history.push({ pathname: '/categories'}); // go to page function
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
          marginTop: '20px'
        }}>
          <Cell col={1}>
            <IconButton name="arrow_back" colored onClick={this.gotoCategories}/>
          </Cell>
          <Cell col={7}>Գիտական</Cell>
            </Grid>
       </h1>
        <div style={{
          width: '100%',
          marginLeft: 'auto'
        }}>
          <Grid className="demo-grid-1" style={{
          }}>
            <Cell col={2}>
              <QButton text="1" onClick={() => this.makeSeen(1)} goto="/S1" seen={this.state.seen[1]}/>
            </Cell>
            <Cell col={2}>
            <QButton text="2" onClick={() => this.makeSeen(2)} goto="/S1" seen={this.state.seen[2]}/>
            </Cell>
            <Cell col={2}>
              <QButton text="3" onClick={() => this.makeSeen(3)} seen={this.state.seen[3]}/>
            </Cell>
            <Cell col={2}>
              <FABButton ripple colored style={{ backgroundColor: '#4db6ac', fontSize: '32px' }}>
                4
              </FABButton>
            </Cell>
            <Cell col={2}>
              <FABButton ripple colored style={{ backgroundColor: '#4db6ac', fontSize: '32px' }}>
                5
              </FABButton>
            </Cell>
            <Cell col={2}>
              <FABButton ripple colored style={{ backgroundColor: '#4db6ac', fontSize: '32px' }}>
                6
              </FABButton>
            </Cell>
          </Grid>
          <Grid className="demo-grid-1" style={{
            marginTop: '5px'
          }}>
            <Cell col={2}>
              <FABButton ripple colored style={{ backgroundColor: '#4db6ac', fontSize: '32px' }}>
                7
              </FABButton>
            </Cell>
            <Cell col={2}>
              <FABButton ripple colored style={{ backgroundColor: '#4db6ac', fontSize: '32px' }}>
                8
              </FABButton>
            </Cell>
            <Cell col={2}>
              <FABButton ripple colored style={{ backgroundColor: '#4db6ac', fontSize: '32px' }}>
                9
              </FABButton>
            </Cell>
            <Cell col={2}>
              <FABButton ripple colored style={{ backgroundColor: '#4db6ac', fontSize: '32px' }}>
                10
              </FABButton>
            </Cell>
            <Cell col={2}>
              <FABButton ripple colored style={{ backgroundColor: '#4db6ac', fontSize: '32px' }}>
                11
              </FABButton>
            </Cell>
            <Cell col={2}>
              <FABButton ripple colored style={{ backgroundColor: '#4db6ac', fontSize: '32px' }}>
                12
              </FABButton>
            </Cell>
          </Grid>
          <Grid className="demo-grid-1" style={{
            marginTop: '5px'
          }}>
            <Cell col={2}>
              <FABButton ripple colored style={{ backgroundColor: '#4db6ac', fontSize: '32px' }}>
                13
              </FABButton>
            </Cell>
            <Cell col={2}>
              <FABButton ripple colored style={{ backgroundColor: '#4db6ac', fontSize: '32px' }}>
                14
              </FABButton>
            </Cell>
            <Cell col={2}>
              <FABButton ripple colored style={{ backgroundColor: '#4db6ac', fontSize: '32px' }}>
                15
              </FABButton>
            </Cell>
            <Cell col={2}>
              <FABButton ripple colored style={{ backgroundColor: '#4db6ac', fontSize: '32px' }}>
                16
              </FABButton>
            </Cell>
            <Cell col={2}>
              <FABButton ripple colored style={{ backgroundColor: '#4db6ac', fontSize: '32px' }}>
                17
              </FABButton>
            </Cell>
            <Cell col={2}>
              <FABButton ripple colored style={{ backgroundColor: '#4db6ac', fontSize: '32px' }}>
                18
              </FABButton>
            </Cell>
          </Grid>
          <Grid className="demo-grid-1" style={{
            marginTop: '5px'
          }}>
            <Cell col={2}>
              <FABButton ripple colored style={{ backgroundColor: '#4db6ac', fontSize: '32px' }}>
                19
              </FABButton>
            </Cell>
            <Cell col={2}>
              <FABButton ripple colored style={{ backgroundColor: '#4db6ac', fontSize: '32px' }}>
                20
              </FABButton>
            </Cell>
            <Cell col={2}>
              <FABButton ripple colored style={{ backgroundColor: '#4db6ac', fontSize: '32px' }}>
                21
              </FABButton>
            </Cell>
            <Cell col={2}>
              <FABButton ripple colored style={{ backgroundColor: '#4db6ac', fontSize: '32px' }}>
                22
              </FABButton>
            </Cell>
            <Cell col={2}>
              <FABButton ripple colored style={{ backgroundColor: '#4db6ac', fontSize: '32px' }}>
                23
              </FABButton>
            </Cell>
            <Cell col={2}>
              <FABButton ripple colored style={{ backgroundColor: '#4db6ac', fontSize: '32px' }}>
                24
              </FABButton>
            </Cell>
          </Grid>
          <Grid className="demo-grid-1" style={{
            marginTop: '5px'
          }}>
            <Cell col={2}>
              <FABButton ripple colored style={{ backgroundColor: '#4db6ac', fontSize: '32px' }}>
                25
              </FABButton>
            </Cell>
            <Cell col={2}>
              <FABButton ripple colored style={{ backgroundColor: '#4db6ac', fontSize: '32px' }}>
                26
              </FABButton>
            </Cell>
            <Cell col={2}>
              <FABButton ripple colored style={{ backgroundColor: '#4db6ac', fontSize: '32px' }}>
                27
              </FABButton>
            </Cell>
            <Cell col={2}>
              <FABButton ripple colored style={{ backgroundColor: '#4db6ac', fontSize: '32px' }}>
                28
              </FABButton>
            </Cell>
            <Cell col={2}>
              <FABButton ripple colored style={{ backgroundColor: '#4db6ac', fontSize: '32px' }}>
                29
              </FABButton>
            </Cell>
            <Cell col={2}>
              <FABButton ripple colored style={{ backgroundColor: '#4db6ac', fontSize: '32px' }}>
                30
              </FABButton>
            </Cell>
          </Grid>

        </div>
      </Layout>
    );
  }

}

export default AboutPage;
