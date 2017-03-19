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
import history from '../history';
import BigTimer from '../../components/BigTimer';
import ReactAudioPlayer from 'react-audio-player';
import song from './test.ogg';


class AboutPage extends React.Component {
  componentWillMount() {
    document.body.style.backgroundColor = '#AA0000';
  }
  componentDidMount() {
    document.title = 'Ֆիզիկական';
  }
  gotoPhysical = () => {
    history.push({ pathname: '/physical' });
  }


  render() {
    return (
      <Layout className={s.content}>
        <h1 className={s.fontstyle1} style={{
          marginTop: '50px'
        }}><Grid className="demo-grid-1" style={{
          marginTop: '20px'
        }}>
          <Cell col={1}>
            <IconButton name="arrow_back" colored onClick={this.gotoPhysical}/>
          </Cell>
          <Cell offset={3} col={1}>
            <ReactAudioPlayer src={song}/>
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
