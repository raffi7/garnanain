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
import Layout from '../../components/Layout';
import s from './styles.css';
import Link from '../../components/Link';
import history from '../history';
import ReactAudioPlayer from 'react-audio-player';

class AboutPage extends React.Component {

  componentDidMount() {
    document.title = 'Երաժշտական';
  }

  componentWillMount() {
    document.body.style.backgroundColor = '#AA0000';
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
            <FABButton ripple colored style={{ backgroundColor: '#4db6ac', fontSize: '32px' }}>
              1
            </FABButton>
          </Cell>
          <Cell col={2}>
            <FABButton ripple colored style={{ backgroundColor: '#4db6ac', fontSize: '32px' }}>
              2
            </FABButton>
          </Cell>
          <Cell col={2}>
            <FABButton ripple colored style={{ backgroundColor: '#4db6ac', fontSize: '32px' }}>
              3
            </FABButton>
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
        </Grid>
        <Grid className="demo-grid-1" style={{
          marginTop: '25px'
        }}>
        <Cell col={2}>
          <FABButton ripple colored style={{ backgroundColor: '#4db6ac', fontSize: '32px' }}>
            6
          </FABButton>
        </Cell>
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
          </Cell></Grid>
          <Grid className="demo-grid-1" style={{
            marginTop: '100px'
          }}>
            <Cell col={12}>
          <ReactAudioPlayer
  src="https://upload.wikimedia.org/wikipedia/en/4/45/ACDC_-_Back_In_Black-sample.ogg"
/>
</Cell> </Grid>
        </div>
      </Layout>
    );
  }

}

export default AboutPage;
