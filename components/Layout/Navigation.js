/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import history from '../../src/history';
import Link from '../Link';
import {IconButton, MenuItem, Menu, Tooltip, Icon } from 'react-mdl';

class Navigation extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }
  gotoResult() {
    history.push({ pathname: '/result' });
  }


  render() {
    return (
      <nav className="mdl-navigation" ref={node => (this.root = node)}>
        <Link className="mdl-navigation__link" to="/categories">Categories</Link>
        <Link className="mdl-navigation__link" to="/">Home</Link>
        <Tooltip label="Results" position="bottom">
        <IconButton onClick={this.gotoResult} name="timeline"/></Tooltip>
          <div style={{position: 'relative'}}>
    <IconButton name="more_vert" id="demo-menu-lower-right" />
    <Menu target="demo-menu-lower-right" align="right" ripple>
      <MenuItem><Link style={{color: '#000'}}className="mdl-navigation__link" to="/science">Science</Link></MenuItem>
      <MenuItem><Link style={{color: '#000'}}className="mdl-navigation__link" to="/sport">Sport</Link></MenuItem>
      <MenuItem><Link style={{color: '#000'}}className="mdl-navigation__link" to="/images">Images</Link></MenuItem>
      <MenuItem><Link style={{color: '#000'}}className="mdl-navigation__link" to="/musics">Musics</Link></MenuItem>
      <MenuItem><Link style={{color: '#000'}}className="mdl-navigation__link" to="/physical">Activities</Link></MenuItem>
      <MenuItem><Link style={{color: '#000'}}className="mdl-navigation__link" style={{fontSize: '18px', color: '#607d8b'}} to="/setting">Setting</Link></MenuItem>
    </Menu>
        </div>
      </nav>
    );
  }

}

export default Navigation;
