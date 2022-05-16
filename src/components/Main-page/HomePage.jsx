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
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';

import { Box, useTheme, useMediaQuery } from '@material-ui/core';

import Footer from '../Footer/footer.jsx';

import {
  sponsorLogos,
  frequentlyAskedQuestions,
  TOP_SECTION,
} from '../../Module/General';

import AcmSvce from '../../Module/Assets/acm/image.jpg';
import AcmWSvce from '../../Module/Assets/acm/acm-w.jpeg';

import { TopSection2 } from '../top-section-2/TopSection2.jsx';

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
  const match = useMediaQuery(theme.breakpoints.down('sm'));

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
              <img src={TOP_SECTION.IMG_SRC} alt='YAH! 2k22' />
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
                  width: match ? '335px' : '505px',
                  // height: '140px',
                  paddingTop: match ? '0px' : '100px',
                  // paddingLeft: match ? '30px' : '0px',
                  // paddingRight: match ? '30px' : '0px',
                }}
                alt='acm-svce'
              />
            </div>
          </Col>
        </Row>
        <Row className='logoSection' style={{ paddingTop: '8px' }}>
          <Col className='info-div' sm={12} lg={6} md={6}>
            <TopSection2 />
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
                src={AcmWSvce}
                style={{
                  width: match ? '335px' : '435px',
                  marginTop: match ? '0px' : '50px',
                  // height: '140px',
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
          {sponsorLogos.map(SponsorGroup)}
          <SponsorUS />
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
          <a href='tel:+919176550708'>
            <h3>
              <PhoneIphoneIcon
                style={{
                  width: '20px',
                  height: '18px',
                }}
              />{' '}
              Nikhilesh S: 9176550708
            </h3>
          </a>
          <a href='tel:+917904438056'>
            <h3>
              <PhoneIphoneIcon
                style={{
                  width: '20px',
                  height: '18px',
                }}
              />{' '}
              Sandhya V: 7904438056
            </h3>
          </a>
          <a href='tel:+919360424277'>
            <h3>
              <PhoneIphoneIcon
                style={{
                  width: '20px',
                  height: '18px',
                }}
              />{' '}
              Benita Majo: 9360424277
            </h3>
          </a>
        </Row>
        <Row id='venue'>
          <h3
            style={{
              fontWeight: 'bold',
              fontSize: '3.5rem',
              marginBottom: '10px',
            }}
          >
            Venue
          </h3>

          <iframe
            title='Venue'
            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7775.5084565668685!2d79.9758079381529!3d12.987565279809372!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3294da3faad96a9!2sSri%20Venkateswara%20College%20of%20Engineering%20(SVCE)!5e0!3m2!1sen!2sin!4v1652712108679!5m2!1sen!2sin'
            width={match ? '400' : '800'}
            height={match ? '300' : '500'}
            style={{ border: 0 }}
            allowfullscreen=''
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
          ></iframe>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
