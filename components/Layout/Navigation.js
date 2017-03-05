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
import Link from '../Link';
import {IconButton, MenuItem, Menu, Tooltip } from 'react-mdl';

class Navigation extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <nav className="mdl-navigation" ref={node => (this.root = node)}>
        <Link className="mdl-navigation__link" to="/">Home</Link>
        <Tooltip label="Setting" position="bottom">
          <div style={{position: 'relative'}}>
    <IconButton name="more_vert" id="demo-menu-lower-right" />
    <Menu target="demo-menu-lower-right" align="right" ripple>
      <MenuItem><Link style={{color: '#000'}}className="mdl-navigation__link" to="/categories">** Categories **</Link></MenuItem>
      <MenuItem><Link style={{color: '#000'}}className="mdl-navigation__link" to="/science">* Science *</Link></MenuItem>
      <MenuItem><Link style={{color: '#000'}}className="mdl-navigation__link" to="/sport">* Sport *</Link></MenuItem>
      <MenuItem><Link style={{color: '#000'}}className="mdl-navigation__link" to="/images">* Images *</Link></MenuItem>
      <MenuItem><Link style={{color: '#000'}}className="mdl-navigation__link" to="/musics">* Musics *</Link></MenuItem>
      <MenuItem><Link style={{color: '#000'}}className="mdl-navigation__link" to="/physical">* Activities *</Link></MenuItem>
    </Menu>
</div>
</Tooltip>
      </nav>
    );
  }

}

export default Navigation;
