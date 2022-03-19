import React from 'react';
import './sponsors.scss';
import { Box } from '@material-ui/core';
import { Btn } from '../Top-division-components/Top-division-components.jsx';
import { SOCIALS } from '../../Module/General';

function SponsorsHead() {
  return <h1 className='shead'>Sponsors</h1>;
}

function Sponsor(props) {
  return (
    <div className='Sponsor '>
      <img src={props.srcx} alt='Limbo hacks'></img>
    </div>
  );
}

function SponsorUS() {
  return (
    <div className='joinT sponsorUS'>
      <h3>Interested in Sponsoring </h3>
      <Box m={4} />
      <a href={SOCIALS.sponsor}>
        <Btn class='sponsor_btn' type='Sponsor us' overlay='Send a mail' />
      </a>{' '}
    </div>
  );
}

export { SponsorsHead, Sponsor, SponsorUS };
