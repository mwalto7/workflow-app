import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  state = { activeItem: 'about' };

  handleClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu secondary pointing borderless stackable size="huge">
        <Menu.Menu position="left">
          <Menu.Item
            name="about"
            content="About"
            active={activeItem === 'about'}
            onClick={this.handleClick}
            as={Link}
            to="/about"
          />
          <Menu.Item
            name="features"
            content="Features"
            active={activeItem === 'features'}
            onClick={this.handleClick}
            as={Link}
            to="/features"
          />
          <Menu.Item
            name="pricing"
            content="Pricing"
            active={activeItem === 'pricing'}
            onClick={this.handleClick}
            as={Link}
            to="/pricing"
          />
          <Menu.Item
            name="contact"
            content="Contact Us"
            active={activeItem === 'contact'}
            onClick={this.handleClick}
            as={Link}
            to="/contact"
          />
        </Menu.Menu>
        <Menu.Menu position="right">
          <Menu.Item
            name="register"
            content="Sign up"
            as={Link}
            to="/register"
          />
          <Menu.Item
            name="login"
            content="Login"
            as={Link}
            to="/login"
          />
        </Menu.Menu>
      </Menu>
    );
  }
}

export default Navbar;
