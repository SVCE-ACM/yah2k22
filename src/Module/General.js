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
    "Yet Another Hackathon 2k22 conducted by the SVCE ACM Student Chapter is back for it's third edition. Gear up for the 24-hour hackathon!",

  IMG_SRC: YahLogo,
  HACKERS_REGISTRATION_FORM_LINK: 'https://localhost:3000',
};

const SOCIALS = {
  instagram: 'https://www.instagram.com/svceacm/',
  github: 'https://github.com/SVCE-ACM',
  facebook: 'https://www.facebook.com/SVCEACM/',
  linkedIn: 'https://www.linkedin.com/company/svceacm',
  email: 'mailto:acm.svcecse@gmail.com',
  mail: 'acm.svcecse@gmail.com',
  sponsor: 'mailto:acm.svcecse@gmail.com',
};

const MIDDLE_SECTION = {
  TITLE: 'About YAH! 2k22',
  LONG_DESCRIPTION:
    "Yet Another Hackathon is a 24-hour student-run hackathon aimed at engineering students eager to solve real world problems. Students with varying levels of programming and conceptual expertise will gather to create products and solutions for today’s challenges and to build a sustainable future. Participants can select any problem statement of their choice from the list of domains provided. YAH'22 will offer attendees an inclusive, diverse environment to share their ideas and turn them to realities.",

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
  // 'Finance and technology',
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
        label: 'Who can participate?',
        content:
          'YAH 2022 is open to all engineering students, looking to create impactful and cutting edge products.',
      },
      {
        label: 'How much does it cost?',
        content:
          "Rs. 450 per person. We'll take care of all your meals & refreshments! You'll pay this only if you're selected for the on-campus round. Online round is free of cost!",
      },
      {
        label: 'What do we need to bring?',
        content:
          "A hackathon is a very hands-on and grassroots event. You will need to bring your laptops, mobile phones and any other devices that you need to design your product. But above all, come in with a proper night's sleep. Make sure you have your college ID card and your covid vaccination certificate.",
      },
      {
        label: 'How many people can be on each team?',
        content:
          'You can have a team of 3-5 members from the same or from different institutions. We recommend to have a balanced team with a mixture of designers and developers.',
      },
      {
        label: 'When is the last date to register',
        content:
          "Registrations will close at 11:59 PM, 3rd June, 2022. We will announce the shortlisted teams shortly after that. If selected, you'll be expected to make the payment before 8th June, 2022.",
      },
      {
        label: 'How will the shortlisting be done in the online round?',
        content:
          'Our team will evaluate both your abstract to test your problem solving skills and creativity as well as your GitHub (Or GitLab or BitBucket or anything else). Based on a combination of both of these, we will shortlist teams.',
      },
      {
        label: 'What do I get out of this hackathon?',
        content:
          'You get a great opportunity for peer networking, compete to win massive cash prizes, chances to gain internships or job offers from some cool companies, an amazing learning experience, punny jokes and some awesome memories. ;)',
      },
    ],
    [
      {
        label: 'Is there reimbursement for travel?',
        content: 'No, we do not offer any reimbursement for travel expenses.',
      },
      {
        label: 'Who owns my project and IP?',
        content:
          'You do! The team that develops the project is the owner of the project and IP. You can make it open source, form a company with others you met during the event or put it in a repo and never use it again :P. Its upto YOU!',
      },
      {
        label: 'Can I use frameworks and APIs?',
        content:
          'Of course! As long as your final product is something original, there is no harm in using something to help you achieve that.',
      },
      {
        label: 'Is there Wi-Fi?',
        content: 'YES!',
      },
      {
        label: 'Will I get help if I face any problems?',
        content:
          'Of course! We have a lot of mentors coming in from many different fields and all of them are there to help you out.',
      },

      {
        label: 'What is the judging criteria?',
        content:
          "Our judges will be evaluating teams on the 3 I's - Innovation (Originality & Creativity of the idea), Implementation (Technical challenge & completeness of the project), and Impact (Business or Social Impact.)",
      },
      {
        label: 'What about food?',
        content:
          "Our judges will be evaluating teams on the 3 I's - Innovation (Originality & Creativity of the idea), Implementation (Technical challenge & completeness of the project), and Impact (Business or Social Impact.)",
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
