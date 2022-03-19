import React from 'react';
import './TopSection.css';

import { MIDDLE_SECTION } from '../../Module/General';

function TopSection() {
  return (
    <div className='LogoSectionAbout'>
      <h1>{MIDDLE_SECTION.TITLE}</h1>
      <p>{MIDDLE_SECTION.LONG_DESCRIPTION}</p>
    </div>
  );
}

export { TopSection };
