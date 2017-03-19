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
  Textfield,
} from 'react-mdl';
import Layout from '../../components/Layout';
import s from './styles.css';
import Link from '../../components/Link';
import history from '../history';
import mane from './mane.jpeg';
import holo from './holo.jpg';
import Timer from '../../components/Timer';


class AboutPage extends React.Component {
  componentWillMount() {
    document.body.style.backgroundColor = '#AA0000';
  }
  componentDidMount() {
    document.title = 'ՖԻԶԻԿԱԿԱՆ';
  }
  gotoCategories() {
    history.push({pathname: '/categories'}); // go to page function
  }
  gotoPhys() {
    history.push({pathname: '/phys'}); // go to page function
  }


  render() {
    return (
      <Layout className={s.content}>
        <h1 className={s.fontstyle1} style={{
          marginTop: '40px'
        }}><Grid className="demo-grid-1" style={{
          marginTop: '20px'
        }}>
          <Cell col={1}>
            <IconButton name="arrow_back" colored onClick={this.gotoCategories}/>
          </Cell>
          <Cell col={1}>ՖԻԶԻԿԱԿԱՆ</Cell>
            </Grid>
       </h1>
        <div style={{
          width: '100%',
          marginLeft: 'auto',
          fontSize: '30px'
        }}>
        <Grid className="demo-grid-1" style={{
          marginTop: '20px'
        }}>
          <Cell offset={2} col={4}>
            <Card onClick={this.gotoPhys} shadow={5} style={{ width: '300px', margin: 'auto' }}>
              <CardTitle style={{ color: '#fff', height: '200px', background: `url(${mane}) center / cover` }} />
            </Card>
          </Cell>
          <Cell col={1}>
            <Card onClick={this.gotoPhys} shadow={5} style={{ width: '300px', margin: 'auto' }}>
              <CardTitle style={{ color: '#fff', height: '200px', background: `url(${holo}) center / cover` }} />
            </Card>
          </Cell>
          </Grid>
        </div>

      </Layout>
    );
  }

}
export default AboutPage;
