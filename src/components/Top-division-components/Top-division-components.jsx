import React from 'react';
import './top-division-c.css';
import MytypedComponent from '../typing-effect/typing.js';

import { TOP_SECTION } from '../../Module/General';

function Btn(props) {
  return (
    <button className={props.class}>
      <i className={props.ico}></i>
      {props.type}
      <div className='overlay'>
        <div className='overlay-text'>{props.overlay}</div>
      </div>
    </button>
  );
}

function About() {
  return (
    <div className='AboutMe'>
      <h2>{TOP_SECTION.TITLE}</h2>
      <MytypedComponent />
    </div>
  );
}

function Myinfo() {
  return (
    <div className='Myinfo'>
      <About />
      {/* <div className='join_dis' style={{ color: '#222944' }}>
        h
      </div> */}

      <p> {TOP_SECTION.SHORT_DESCRIPTION}</p>
      {/* <div className='join_dis' style={{ color: '#222944' }}>
        h
      </div> */}

      <p
        style={{
          marginTop: '3rem',
        }}
      >
        Registrations opening soon.
      </p>

      {/* <a href={TOP_SECTION.HACKERS_REGISTRATION_FORM_LINK} style={{}}>
        <Btn
          style={{
            width: '22rem',
            height: '6rem',
          }}
          class='register'
          type='Register '
          overlay='Register Now'
        />
      </a> */}
    </div>
  );
}

export { Btn, Myinfo };
