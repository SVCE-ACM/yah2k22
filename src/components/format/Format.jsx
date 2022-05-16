import React from 'react';

const Format = () => {
  return (
    <div
      style={{
        textAlign: 'left',
        padding: '1rem',
        paddingTop: '0px',
        lineHeight: 1.6,
      }}
    >
      <h2>1. Online Screening Round</h2>
      <p>
        The first step is to fill the registration form with your abstract. For
        the abstract, pick an impactful problem statement from the domain of
        your choice. Please note that the abstract that you submit will be
        highly instrumental in determining your selection for the next round. It
        is a bonus if you could add your Github links (Or GitLab, BitBucket or
        even LeetCode) that will sell us on your coding proficiency. If you
        don't have one of those, link us to something else that you've made,
        maybe an app or a website.
      </p>
      <h2>2. The 24-Hour Hackathon</h2>
      <p>
        This is an on-campus hackathon conducted at Sri Venkateswara college of
        Engineering on June 11 & 12. We'll give you all the required information
        regarding this if you do get selected for the round. But check out our
        FAQ which should cover most of your questions.
      </p>
    </div>
  );
};

export default Format;
