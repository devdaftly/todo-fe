import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import IconButton from '../../../../components/icon-button/IconButton';

import { AppState } from '../../../../store';
import { expandMenu, collapseMenu } from '../../store/actions';
import { MenuState } from '../../store/types';

import './Menu.scss';

interface MenuProps {
  expandMenu: typeof expandMenu,
  collapseMenu: typeof collapseMenu,
  state: MenuState
}

class Menu extends React.Component<MenuProps> {
  toggleMenu = () => {
    if (this.props.state.menuCollapsed) {
      this.props.expandMenu();
    } else {
      this.props.collapseMenu();
    }
  }

  render() {
    return (
      <div className={classNames({
        menu: true,
        collapse: this.props.state.menuCollapsed
      })}>
        <div className='menu-row toggle-button-row'>
          <IconButton
            icon={this.props.state.menuCollapsed ? 'bars' : 'chevron-left'}
            size='med'
            onClick={this.toggleMenu}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  state: state.menu
});

export default connect(
  mapStateToProps,
  { expandMenu, collapseMenu }
)(Menu);
