import React from 'react';
import { Myinfo } from '../Top-division-components/Top-division-components.jsx';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import './about.css';
import { TopSection } from '../top-section/TopSection.jsx';
import Domains from '../domains/Domains.jsx';
import Format from '../format/Format.jsx';
import { Heading } from '../heading/heading.jsx';
import { Accordion } from '../FAQ/faq.jsx';
import { Sponsor, SponsorsHead, SponsorUS } from '../Sponsors/sponsors.jsx';

import { Box, useTheme, useMediaQuery } from '@material-ui/core';

import Footer from '../Footer/footer.jsx';

import {
  sponsorLogos,
  frequentlyAskedQuestions,
  TOP_SECTION,
} from '../../Module/General';

import AcmSvce from '../../Module/Assets/acm/svce-acm.jpeg';

// javascript Map for sponsors

function SponsorGroup(props) {
  return (
    <Row>
      {props.map((s) => (
        <Col className='' sm={12} lg={4} md={6}>
          {' '}
          <Sponsor srcx={s.src} />{' '}
        </Col>
      ))}
    </Row>
  );
}

function FrequentlyAsked(props) {
  return (
    <Row className='sf'>
      {props.map((s) => (
        <Col className='' sm={12} lg={6} md={6}>
          <Accordion panels={s} />
        </Col>
      ))}
    </Row>
  );
}

export default function HomePage() {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <div className='Whole_div'>
      <div className='color_sectiom' id='home'>
        <Container fluid>
          <Row className='Row info'>
            <Col className='info-div' sm={12} lg={7} md={8}>
              <Myinfo />
            </Col>
            <Col className='d-image' sm={12} lg={5} md={4}>
              {
                // add yah image here
              }
              {/* <img src={TOP_SECTION.IMG_SRC} alt='YAH! 2k22' /> */}
            </Col>
          </Row>
        </Container>
      </div>
      <Container fluid>
        {/* First section */}
        <Row className='logoSection'>
          <Col className='info-div' sm={12} lg={6} md={6}>
            <TopSection />
          </Col>
          <Col sm={12} lg={6} md={6}>
            <div
              style={{
                height: '315px',
                // marginTop: '30px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={AcmSvce}
                style={{
                  width: match ? '335px' : '435px',
                  height: '140px',
                  // paddingLeft: match ? '30px' : '0px',
                  // paddingRight: match ? '30px' : '0px',
                }}
                alt='acm-svce'
              />
            </div>
          </Col>
        </Row>
        {/* ********Domains here ***** */}
        <Box m={10} />
        <Row className='prizesection' id='domains'>
          <Heading type='Domains' />
          <Domains />
        </Row>
        {/* ********Format here ***** */}
        <Box m={10} />
        <Row className='prizesection' id='format'>
          <Heading type='Format' />
          <Format />
        </Row>

        <Box m={5} />
        {/* ********Frequently asked Questions here ***** */}
        <div className='Myfaqs' id='faq'>
          <Heading type='FAQs' />

          {frequentlyAskedQuestions.map(FrequentlyAsked)}
          {/* ********Frequently asked Questions ending here ***** */}
        </div>

        {/* ********Sponsors here ***** */}

        <Row className='sponsorSection' id='sponsors'>
          <SponsorsHead />
          <SponsorUS />
          {sponsorLogos.map(SponsorGroup)}
        </Row>
        {/* ********Sponsors ending here ***** */}

        {
          //contact
        }
        <Row id='contact'>
          <h3
            style={{
              fontWeight: 'bold',
              fontSize: '3.5rem',
            }}
          >
            Contact
          </h3>
          <h3>Still got questions? Get in touch with us</h3>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
