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
    document.title = 'TEST PAGE';
  }

  gotoCategories() {
    history.push({pathname: '/categories'});
  }

  render() {
    return (
      <Layout className={s.content}>

      </Layout>
    );
  }

}

export default AboutPage;
