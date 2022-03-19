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
        registration form as usual. For the abstract, pick a domain of your
        choice and submit an idea. Note that you don't need to implement the
        same idea at the hackathon. We will simply use this to judge your
        problem solving skills and creativity. Your Github links (Or GitLab,
        BitBucket or even HackerRank) will sell us on your coding proficiency.
        If you don't have one of those, link us to something else that you've
        made. Maybe an app or a website. Registrations close at 11:59 PM, 17th
        September 2019. So don't delay too much.
      </p>
      <h2>2. The 24-Hour Hackathon</h2>
      <p>
        This is the on-site hackathon taking place at Cove, Kotturpuram from
        21st to 22nd September 2019. We'll give you all the required information
        regarding this if you do get selected for the round. But check out our
        FAQ which should cover most of your questions.
      </p>
    </div>
  );
};

export default Format;
