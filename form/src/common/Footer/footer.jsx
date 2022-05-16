import React from 'react';
import './footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const SOCIALS = {
  instagram: 'https://www.instagram.com/svceacm/',
  github: 'https://github.com/SVCE-ACM',
  facebook: 'https://www.facebook.com/SVCEACM/',
  linkedIn: 'https://www.linkedin.com/company/svceacm',
  email: 'mailto:acm.svcecse@gmail.com',
  mail: 'acm.svcecse@gmail.com',
  sponsor: 'mailto:acm.svcecse@gmail.com',
};

export default function Footer({ socials }) {
  return (
    <div>
      <div className='footer'>
        {socials && (
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
              <a rel='noreferrer' target='_blank' href={SOCIALS.linkedIn}>
                <LinkedInIcon
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
        )}

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
