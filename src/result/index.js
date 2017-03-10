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
  ProgressBar,
  IconToggle,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem
} from 'react-mdl';
import db from 'localforage';
import Layout from '../../components/Layout';
import Chart from 'react-highcharts';
import ResultDialog from '../../components/ResultDialog';
import s from './styles.css';
import Link from '../../components/Link';
import AnswerCard from '../../components/AnswerCard';
import history from '../history';

export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.config = {
      chart: {
        type: 'column'
    },
    title: {
        text: 'Ardioonkner'
    },
    xAxis: {
        categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Population (millions)',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' millions'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Year 1800',
        data: [107]
    }, {
        name: 'Year 1900',
        data: [133]
    }, {
        name: 'Year 2012',
        data: [1052]
    }]
    };
  }

  componentDidMount() {
    document.title = 'Setting';
    setInterval(this.addCounter, 1000);
  }
  gotoHome() {
    history.push({pathname: '/'}); // go to page function
  }

  render() {
    return (
      <Layout className={s.content}>
        <h1 className={s.fontstyle1} style={{
          marginTop: '45px'
        }}>
        <Grid className="demo-grid-1" style={{
          marginTop: '20px'
        }}>
          <Cell col={1}>
            <IconButton name="home" colored onClick={this.gotoHome}/>
          </Cell>
          <Cell col={1}>Results</Cell>
            </Grid>
       </h1>

       <Chart config={this.config}></Chart>


      </Layout>
    );
  }

}
