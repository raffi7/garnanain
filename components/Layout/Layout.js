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
import cx from 'classnames';
import Header from './Header';
import Footer from '../Footer';
import s from './Layout.css';
import mainPic from './main.jpg';

class Layout extends React.Component {

  static propTypes = {
    className: PropTypes.string
  };

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
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
            <div {...this.props} className={cx(s.content, this.props.className)}/>
          </main>
        </div>
      </div>
    );
  }
}

export default Layout;
