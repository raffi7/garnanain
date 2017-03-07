/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, {PropTypes} from 'react';
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
import cx from 'classnames';
import Header from './Header';
import Footer from '../Footer';
import s from './Layout.css';
import mainPic from './main.jpg';
import db from 'localforage';

class Layout extends React.Component {
constructor() {
  super();
  this.state = { scores: [] };
}
  static propTypes = {
    className: PropTypes.string
  };

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  addScore = (n) => {
    let scores = this.state.scores;
    scores[n] = (scores[n] || 0) + 5;
    console.log(scores);

    this.setState({ scores  });

    db.setItem('scores', this.state.scores)
    .catch((err) => {
      console.log(err);
    });
  }

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
    db.getItem('scores').then((scores) => {
      if (scores != null) {
        this.setState({ scores });
      }
    })
  }

  render() {
    return (
      <div className="mdl-layout mdl-js-layout" ref={node => (this.root = node)}>
        <div className="mdl-layout__inner-container">
          <Header/>
          <main style={{
              background: `url(${mainPic}) center / cover`
          // backgroundColor: '#fff'
          }} className="mdl-layout__content">
          <Card shadow={3} className={s.scoreBoard}>
            <div style={{width: '80%', margin: 'auto'}}>
      <Grid className="demo-grid-ruler">
          <Cell col={2}>
            <Button raised ripple onClick={() => this.addScore(1)}>
              <span style={{color: 'red', fontSize: '20px' }}>+</span>{this.state.scores[1]}
              </Button>
              </Cell>
          <Cell col={2}><Button raised ripple><span style={{color: 'blue', fontSize: '20px' }}>+</span>Team2 56</Button></Cell>

      </Grid>
  </div>

          </Card>
            <div {...this.props} className={cx(s.content, this.props.className)}/>
              </main>
            </div>
      </div>
    );
  }
}

export default Layout;
