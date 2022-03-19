// Importing all sponsors logos from Assets

/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

const TOP_SECTION = {
  TITLE: 'Yet Another Hackathon! 2k22',
  Typed_effect: ['sed do eiusmod tempor ', 'tempora incidunt ut labore'],
  SHORT_DESCRIPTION:
    'quasi architecto beatae vitae dicta sunt explicabo. Nemo enit asperna cui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet',
  IMG_SRC: '',
  HACKERS_REGISTRATION_FORM_LINK: 'https://localhost:3000',
};

const SOCIALS = {
  instagram: 'https://www.instagram.com/svceacm/',
  github: 'https://github.com/SVCE-ACM',
  facebook: 'https://www.facebook.com/SVCEACM/',
  email: 'mailto:contact@svce.acm.org',
  mail: 'contact@svce.acm.org',
  sponsor: 'mailto:sponsors@svce.acm.org',
};

const MIDDLE_SECTION = {
  TITLE: 'About YAH! 2k22',
  LONG_DESCRIPTION:
    'quasi architecto beatae vit vitae dicta sunt explicabo vitae dicta sunt explicabo vitae dicta sunt explicabo vitae dicta sunt explicabo vitae dicta sunt explicaboae dicta sunt explicabo vitae dicta sunt explicabo vitae dicta sunt explicabo vitae dicta sunt explicabo. Nemo enit asperna cui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet',

  LOGO_EFFECT: true,
  LOGO: '',
};

const Domain = [
  'lorem ipsum',
  'ipsum lorem',
  'Road safety and motor vehicles',
  'blockchain',
  'Artificial Intelligence',
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
          'A hackathon is a 24 hour event where "hackers" all over the globe will collaborate on creating a functioning software and hardware by the end of the event.',
      },

      {
        label: 'Who can attend?',
        content:
          'Limbo Hacks is open to all undergraduate, high school students and middle school students from all schools.',
      },
      {
        label: 'I am a first time hacker, what should I do?',
        content:
          'No worries, we love to welcome first time hackers and start their hacking journey from a hackathon. We have some awesome workshops and events which will help you get started with hackathon and hacking in general.',
      },
      {
        label: 'How team formation works?',
        content:
          "You can form team with 4 members in it at maximum. If you don't have a team, there'll be plenty of opportunities for you to meet hackers and form a team!",
      },
    ],
    [
      {
        label: 'How to register myself in the hackathon?',
        content:
          'All you need is to fill our form above and join Discord, we will guide you through everything there',
      },
      {
        label: 'I have more questions?',
        content: 'Reach us directly at we would happy to help you.',
      },
      {
        label: 'Can i volunteer?',
        content:
          'Yes we are actively looking for volunteers, fill the form (in footer section) we will be glad to have you.',
      },
      {
        label: 'Will there be swag?',
        content: 'Yes!',
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
