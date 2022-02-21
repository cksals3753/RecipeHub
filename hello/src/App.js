import React from 'react';
import Title from './components/Title';
import Search from './components/Search';
import Logo from './components/logo';
//import Add from './components/add';
//import MySearchBar from './components/SearchBar';

const menuList = {
  0: <Mail />,
  1: <Cafe />,
};

function App(props) {

  super();

  this.state = {
    menu: 0,
  };

  changeMenu = (menuIndex) => {
    this.setState({ menu: menuIndex });
  }
  return (
    <div className="wrap">
      <Title />
      <div className="menuBar">
        <ul className="tabs">
          <li className={`${this.state.menu === 0 ? 'active' : ''}`} onClick={() => this.changeMenu(0)}>Mail</li>
          <li className={`${this.state.menu === 1 ? 'active' : ''}`} onClick={() => this.changeMenu(1)}>Cafe</li>
        </ul>
      </div>
      <div className="contentArea">
        {menuList[this.state.menu]}
      </div>
    </div>
  )

}



export default App;
