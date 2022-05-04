// Importing all sponsors logos from Assets

import YahLogo from './Assets/acm/yahlogo.png';

/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

const TOP_SECTION = {
  TITLE: 'Yet Another Hackathon! 2k22',
  Typed_effect: ['YAH! 2k22', '24-hour hackathon'],
  SHORT_DESCRIPTION:
    'Yet Another Hackathon 2k22, is the third edition of YAH conducted by the SVCE ACM Student Chapter. Gear up for the 24-hour hackathon!',

  IMG_SRC: YahLogo,
  HACKERS_REGISTRATION_FORM_LINK: 'https://localhost:3000',
};

const SOCIALS = {
  instagram: 'https://www.instagram.com/svceacm/',
  github: 'https://github.com/SVCE-ACM',
  facebook: 'https://www.facebook.com/SVCEACM/',
  email: 'mailto:acm.svcecse@gmail.com',
  mail: 'acm.svcecse@gmail.com',
  sponsor: 'mailto:acm.svcecse@gmail.com',
};

const MIDDLE_SECTION = {
  TITLE: 'About YAH! 2k22',
  LONG_DESCRIPTION:
    "YAH '22, Yet Another Hackathon is a 24-hour student-run hackathon aimed at students in the field. Eager students with varying levels of programming and conceptual expertise will gather to create products and solutions for today’s challenges. Participants can select any problem statement of their choice from the list of domains provided. YAH'22 will offer attendees an inclusive, diverse environment to share unique ideas and make them realities.",

  LOGO_EFFECT: true,
  LOGO: '',
};

const Domain = [
  'Agriculture, FoodTech & Rural Development',
  'Clean & Green Technology',
  'Blockchain & Cybersecurity',
  'MedTech / BioTech / HealthTech',
  'Fitness & Sports',
  'Smart Vehicles/ Smart Education',
  'Finance and technology',
];

/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsorLogos = [
  // [{ src: cfc }, { src: sublime }, { src: echoAR }], //Array 1
  // [{ src: taskade }, { src: Replit }, { src: qoom }], //Array 2
  // [{ src: interviewC }, { src: pass }, { src: glimpse }], //Array 3
  // [{ src: egg }, { src: ll }, { src: ACF }], //Array 4
];

/** Instructions
 * Follow the strcuture provided below to add as many as FAQ's you want
 */
const frequentlyAskedQuestions = [
  [
    [
      {
        label: 'What is a hackathon?',
        content:
          'A hackathon is an event, where young creative minds come together  to collaborate on projects related to software and hardware. The creativity of the participants are put to the test as they come up with creative solutions for problems.',
      },

      {
        label: 'Who can attend?',
        content:
          'YAH 2022 is open to all engineering students, looking to build up a strong career in coding.',
      },
      {
        label: 'What is the judging criteria?',
        content:
          "Our judges will be evaluating teams on the 3 I's - Innovation (Originality & Creativity of the idea), Implementation (Technical challenge & completeness of the project), and Impact (Business or Social Impact).",
      },
      {
        label: 'I am a first time hacker, what should I do?',
        content:
          'It is never too late to start something new. To begin with, knowledge of basic programming in c/c++/ python/ java is good enough to get you started.',
      },
      {
        label: 'How team formation works?',
        content:
          'A team of minimum 3 to maximum 5 members will have to work together for 24 hours to create prototype solutions to real world problems.',
      },
    ],
    [
      {
        label: 'How do I register?',
        content:
          'Registration opens soon. Stay tuned!',
      },
      {
        label: 'Is there Wi-Fi?',
        content: 'Of course!',
      },
      {
        label: 'I have more questions?',
        content: 'Feel free to contact our team at acm.svcecse@gmail.com.',
      },
      {
        label: 'Will we get help if we face any issues?',
        content:
          'Yes, we have mentors from different fields to help you during the event.',
      },
    ],
  ],
];

export {
  TOP_SECTION,
  MIDDLE_SECTION,
  SOCIALS,
  Domain,
  sponsorLogos,
  frequentlyAskedQuestions,
};
