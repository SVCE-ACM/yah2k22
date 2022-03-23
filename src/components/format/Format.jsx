import React from 'react';

const Format = () => {
  return (
    <div
      style={{
        textAlign: 'left',
        padding: '20px',
        // fontFamily: 'Nunito, sans-serif',
        lineHeight: 1.6,
      }}
    >
      <h2>1. Online Screening Round</h2>
      <p>
        There's no special work needed for this round. Just fill in the
        registration form once the registrations open. For the abstract, pick a domain of your
        choice and submit an idea. Note that you don't need to implement the
        same idea at the hackathon. We will simply use this to judge your
        problem solving skills and creativity. Your Github links (Or GitLab,
        BitBucket or even HackerRank) will sell us on your coding proficiency.
        If you don't have one of those, link us to something else that you've
        made. Maybe an app or a website.
      </p>
      <h2>2. The 24-Hour Hackathon</h2>
      <p>
        This is an on-site hackathon. We'll give you all the required information
        regarding this if you do get selected for the round. But check out our
        FAQ which should cover most of your questions.
      </p>
    </div>
  );
};

export default Format;
