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
import BigTimer from '../../components/BigTimer';

class AboutPage extends React.Component {
  componentWillMount() {
    document.body.style.backgroundColor = '#AA0000';
  }
  componentDidMount() {
    document.title = 'ՖԻԶԻԿԱԿԱՆ';
  }
  gotoPhysical = () => {
    history.push({ pathname: '/physical' });
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
            <IconButton name="arrow_back" colored onClick={this.gotoPhysical}/>
          </Cell>
            </Grid>
       </h1>

        <div style={{ marginLeft: '299px', marginTop: '15px' }}>
          <BigTimer timeout={60}/>
        </div>
      </Layout>
    );
  }

}
export default AboutPage;
