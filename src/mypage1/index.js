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
  Cell
} from 'react-mdl';
import Layout from '../../components/Layout';
import s from './styles.css';
import Picture from './pic1.png';
import Link from '../../components/Link';
import history from '../history';

class AboutPage extends React.Component {

  componentDidMount() {
    document.title = 'my txt';
  }

  gotoCategories() {
    history.push({pathname: '/categories'}); // go to page function
  }

  render() {
    return (
      <Layout className={s.content}>
        <h1 className={s.fontstyle1}>Ընդհանուր Գլուխ</h1>
        <div style={{
          width: '100%',
          margin: 'auto'
        }}>
          <Grid className="demo-grid-1" style={{
            marginTop: '100px'
          }}>
            <Cell col={6}>
              <Card shadow={0} style={{
                width: '300px',
                margin: 'auto'
              }}>
                <CardTitle style={{
                  color: '#fff',
                  height: '176px',
                  backgroundColor: '#009688'
                }}>
                  Մարզիկներ
                </CardTitle>
                <CardActions border>
                  <Button colored style={{
                    fontSize: 20
                  }} onClick={this.gotoCategories}>start</Button>
                </CardActions>
              </Card>
            </Cell>
            <Cell col={6}>
              <Card shadow={0} style={{
                width: '300px',
                margin: 'auto'
              }}>
                <CardTitle style={{
                  color: '#fff',
                  height: '176px',
                  backgroundColor: '#FFC107'
                }}>
                  Հաւելեալ</CardTitle>
                <CardActions border>
                  <Button colored style={{
                    fontSize: 20
                  }} onClick={this.gotoCategories}>start</Button>
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
