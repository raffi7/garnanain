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
  DialogActions,
  Badge,
  Chip,
  ChipContact
} from 'react-mdl';
import cx from 'classnames';
import Header from './Header';
import Footer from '../Footer';
import s from './Layout.css';
import mainPic from './main.jpg';
import db from 'localforage';
import adara from './adara.mp3';


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
    const audio = new Audio(adara);
    audio.play();
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
            <div style={{width: '97%', margin: 'auto'}}>
                <Chip onClick={() => this.addScore(1)} style={{backgroundColor: '#f8bbd0'}}>
                <ChipContact className="mdl-color mdl-color-text--white" style={{backgroundColor: '#d81b60'}}>
                  {this.state.scores[1]}</ChipContact>
                Team1
                </Chip>
                <Chip onClick={() => this.addScore(2)} style={{backgroundColor: '#e1bee7',marginLeft: '10px'}}>
                <ChipContact className="mdl-color mdl-color-text--white" style={{backgroundColor: '#8e24aa'}}>
                  {this.state.scores[2]}</ChipContact>
                Team2
                </Chip>
                <Chip onClick={() => this.addScore(3)} style={{backgroundColor: '#bbdefb',marginLeft: '10px'}}>
                <ChipContact className="mdl-color mdl-color-text--white" style={{backgroundColor: '#0277bd'}}>
                  {this.state.scores[3]}</ChipContact>
                Team3
                </Chip>
                <Chip onClick={() => this.addScore(4)} style={{backgroundColor: '#dcedc8',marginLeft: '10px'}}>
                <ChipContact className="mdl-color mdl-color-text--white" style={{backgroundColor: '#8bc34a'}}>
                  {this.state.scores[4]}</ChipContact>
                Team4
                </Chip>
                <Chip onClick={() => this.addScore(5)} style={{backgroundColor: '#fff9c4',marginLeft: '10px'}}>
                <ChipContact className="mdl-color mdl-color-text--white" style={{backgroundColor: '#fbc02d'}}>
                  {this.state.scores[5]}</ChipContact>
                Team5
                </Chip>
                <Chip onClick={() => this.addScore(6)} style={{backgroundColor: '#ffe0b2',marginLeft: '10px'}}>
                <ChipContact className="mdl-color mdl-color-text--white" style={{backgroundColor: '#fb8c00'}}>
                  {this.state.scores[6]}</ChipContact>
                Team6
                </Chip>
                <Chip onClick={() => this.addScore(7)} style={{backgroundColor: '#ffcdd2',marginLeft: '10px'}}>
                <ChipContact className="mdl-color mdl-color-text--white" style={{backgroundColor: '#e53935'}}>
                  {this.state.scores[7]}</ChipContact>
                Team7
                </Chip>
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
