import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';

class Navbar extends Component {
  state = { activeItem: '' };

  handleClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Container>
        <Menu borderless fluid pointing secondary stackable size="large">
          <Menu.Menu position="left">
            <Menu.Item
              header
              as={NavLink}
              to="/"
              index={1}
              content="Workflow"
            />
            <Menu.Item
              as={NavLink}
              to="/features"
              index={2}
              content="Features"
              name="features"
              active={activeItem === 'features'}
              onClick={this.handleClick}
            />
            <Menu.Item
              as={NavLink}
              to="/pricing"
              index={3}
              content="Pricing"
              name="pricing"
              active={activeItem === 'pricing'}
              onClick={this.handleClick}
            />
            <Menu.Item
              as={NavLink}
              to="/contact"
              index={4}
              content="Contact us"
              name="contact"
              active={activeItem === 'contact'}
              onClick={this.handleClick}
            />
          </Menu.Menu>
          <Menu.Menu position="right">
            <Menu.Item
              as={NavLink}
              to="/register"
              index={5}
              content="Sign up"
              name="register"
              active={activeItem === 'register'}
              onClick={this.handleClick}
            />
            <Menu.Item
              as={NavLink}
              to="/login"
              index={6}
              content="Log in"
              name="login"
              active={activeItem === 'login'}
              onClick={this.handleClick}
            />
          </Menu.Menu>
        </Menu>
      </Container>
    );
  }
}

export default Navbar;
