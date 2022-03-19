import React from 'react';
import HomePage from '../Main-page/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles.scss';
import CustomAppbar from './Appbar';

const NAVBAR = () => {
  return (
    <Router>
      {/* <nav className='nav_bar' style={{ backgroundColor: color }}>
        <Wrapper toggle={toggle}>
          <div ref={navigation}>
            <ul>
              <li>
                <Link to={`#home`}>
                  <span className='links'>Home </span>{' '}
                </Link>
              </li>
              <li>
                <Link to={`#faq`}>
                  <span className='links'>FAQ </span>{' '}
                </Link>
              </li>
              <li>
                <Link to={`#prizes`}>
                  <span className='links'>prizes </span>{' '}
                </Link>
              </li>
              <li>
                <Link to={`#sponsors`}>
                  <span className='links'>sponsors </span>{' '}
                </Link>
              </li>
              <li>
                <Link to={`#team`}>
                  <span className='links'>team </span>{' '}
                </Link>
              </li>
              <img
                className='s-close'
                onClick={() => setToggle(true)}
                src={logoClose}
              />
            </ul>
          </div>
          <div className='ease' />
        </Wrapper>
        <img
          className='s-open'
          onClick={() => setToggle(false)}
          src={hamLogo}
        />
      </nav> */}
      <CustomAppbar />

      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default NAVBAR;
