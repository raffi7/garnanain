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
  Tooltip
} from 'react-mdl';
import db from 'localforage';
import Layout from '../../components/Layout';
import s from './styles.css';
import homepic from './homepic.jpeg';
import Link from '../../components/Link';
import history from '../history';

class AboutPage extends React.Component {

  componentDidMount() {
    document.title = 'Home';
  }

  gotoCategories() {
    history.push({ pathname: '/categories' });
  }

  clearDb = () => {
    db.setItem('science', {})
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
        <h1 className={s.fontstyle1}>Տուն</h1>
        <div style={{
          width: '100%',
          margin: 'auto'
        }}>
          <Grid className="demo-grid-1" style={{
            marginTop: '20px'
          }}>
            <Cell col={12}>
              <Card shadow={5} style={{
                width: '400px',
                margin: 'auto'
              }}>
                <CardTitle style={{
                  color: '#fff',
                  height: '176px',
                  background: `url(${homepic}) center / cover`
                }}>
                </CardTitle>
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
                    <IconButton name="toys" style={{color: '#607d8b'}} onClick={this.clearDb} />
                  </Tooltip>

                </CardMenu>
              </Card>
            </Cell>
          </Grid>

        </div>
      </Layout>
    );
  }

}

export default AboutPage;
