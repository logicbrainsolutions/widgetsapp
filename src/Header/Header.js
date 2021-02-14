import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const HeaderView = () => {
  return (

    <div className="container loggedOutView">
      <Link to="/" className="nav-link home">
        Home
          </Link>
      <Link to="/add-widget" data-testid="add-widget-btn" className="nav-link">
        Add Widget
          </Link>

    </div>


  );
};

class Header extends React.Component {
  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.props.resetToken({
        token: localStorage.getItem('token'),
        userId: localStorage.getItem('userId')
      })
    }
  }

  render() {
    return (
      <nav className="header">
        <div className="container">
          {
            <HeaderView />}
        </div>
      </nav>
    );
  }
}


export default Header;