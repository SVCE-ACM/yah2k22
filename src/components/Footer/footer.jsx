import React from 'react';
import './footer.scss';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

import { SOCIALS } from '../../Module/General';

export default function Footer() {
  return (
    <div>
      <div className='footer'>
        <div className='social-icons-container'>
          <div className='social-icon'>
            <a rel='noreferrer' target='_blank' href={SOCIALS.instagram}>
              <InstagramIcon
                style={{
                  width: '50px',
                  height: '50px',
                  color: 'black',
                }}
              />
            </a>
          </div>

          <div className='social-icon'>
            <a rel='noreferrer' target='_blank' href={SOCIALS.facebook}>
              <FacebookIcon
                style={{
                  width: '50px',
                  height: '50px',
                  color: 'black',
                }}
              />
            </a>
          </div>
          <div className='social-icon'>
            <a rel='noreferrer' target='_blank' href={SOCIALS.github}>
              <GitHubIcon
                style={{
                  width: '45px',
                  height: '45px',
                  color: 'black',
                }}
              />
            </a>
          </div>
          <div className='social-icon'>
            <a rel='noreferrer' target='_blank' href={SOCIALS.email}>
              <EmailIcon
                style={{
                  width: '50px',
                  height: '50px',
                  color: 'black',
                }}
              />
            </a>
          </div>
        </div>

        <div className='footer_info'>
          <p>
            Contact us{' '}
            <a href={SOCIALS.email}>
              <em>{SOCIALS.mail}</em>
            </a>{' '}
          </p>

          <p>Made with ❤️ by SVCE ACM Web Team</p>
        </div>
      </div>
    </div>
  );
}
