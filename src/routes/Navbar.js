import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0',
  padding: '0',
  minHeight: '7vh',
};

<<<<<<< HEAD
const Navbar = () => (
  <Container style={style}>
    <Menu borderless fluid pointing secondary stackable size="large">
      <Menu.Menu position="left">
        <Menu.Item
          header
          as={NavLink}
          exact
          to="/"
          index={1}
          content="Workflow"
        />
        <Menu.Item as={NavLink} to="/about" index={2} content="About" />
        <Menu.Item as={NavLink} to="/features" index={3} content="Features" />
        <Menu.Item as={NavLink} to="/pricing" index={4} content="Pricing" />
        <Menu.Item as={NavLink} to="/contact" index={5} content="Contact us" />
      </Menu.Menu>
      <Menu.Menu position="right">
        <Menu.Item as={NavLink} to="/register" index={6} content="Sign up" />
        <Menu.Item as={NavLink} to="/login" index={7} content="Log in" />
      </Menu.Menu>
    </Menu>
  </Container>
);
=======
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
>>>>>>> de541ed8feadbac01622100d5b394f045cc67199

export default Navbar;
