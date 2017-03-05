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
  DialogActions
} from 'react-mdl';
import Layout from '../../components/Layout';
import s from './styles.css';
import Link from '../../components/Link';
import history from '../history';

class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }

  componentDidMount() {
    document.title = 'Գիտական';
    setInterval(this.addCounter, 1000);
  }

  handleOpenDialog() {
    this.setState({
      openDialog: true
    });
  }
  handleCloseDialog() {
    this.setState({
      openDialog: false
    });
  }

  render() {
    return (
      <Layout className={s.content}>
        <h1 className={s.questionFont} style={{
          marginTop: '30px'
        }}>Հարց առաջին... </h1>
        <div style={{
          width: '100%',
          fontSize: '30px'
        }}>
        <Button colored onClick={this.handleOpenDialog} raised ripple>Show Dialog</Button>
      <Dialog open={this.state.openDialog}>
        <DialogTitle>Allow data collection?</DialogTitle>
        <DialogContent>
          <p>Allowing us to collect data will let us get you the information you want faster.</p>
        </DialogContent>
        <DialogActions>
          <Button type='button' onClick={this.handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>
        </div>
      </Layout>
    );
  }

}

export default AboutPage;
