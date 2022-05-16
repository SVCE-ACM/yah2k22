// Importing all sponsors logos from Assets

import YahLogo from './Assets/acm/yahlogo.png';

import CasaRetail from './Assets/sponsers/casa_retail.jpeg';
import MadStreetDen from './Assets/sponsers/mad_street_den.jpeg';
import Flip from './Assets/sponsers/flip.jpeg';

/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

const TOP_SECTION = {
  TITLE: 'Yet Another Hackathon! 2k22',
  Typed_effect: [
    'YAH! 2k22',
    '24-hour hackathon',
    '70k worth of Cash Prize!',
    'Amazing Internship opportunity',
  ],
  SHORT_DESCRIPTION:
    "Yet Another Hackathon 2k22 conducted by the ACM Student Chapter of Sri Venkateswara College of Engineering is back for it's third edition. Gear up for the 24-hour hackathon!",

  IMG_SRC: YahLogo,
  REGISTRATION_FORM_LINK: 'https://register-yah2k22.netlify.app',
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
  'Clean & Green Technology',
  'Agriculture, FoodTech & Rural Development',
  'Blockchain / FinanceTech',
  'Fitness & Sports',
  'MedTech / BioTech / HealthTech',
  'Smart Education',
];

/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsorLogos = [
  [{ src: CasaRetail }, { src: MadStreetDen }, { src: Flip }], //Array 1
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
          "Rs. 650 per person. We'll take care of all your meals & refreshments! You'll pay this only if you're selected for the on-campus round. Online round is free of cost!",
      },
      {
        label: 'Will we get any discounts?',
        content:
          'As an initiative taken by the SVCE-ACM W to promote equal participation, we are offering Rs.150 per person discount if your team comprises of only women.',
      },
      {
        label: 'What do we need to bring?',
        content:
          "A hackathon is a very hands-on and grassroots event. You will need to bring your laptops, mobile phones and any other devices that you need to design your product. But above all, come in with a proper night's sleep. Make sure you have your college ID card and your covid vaccination certificate.",
      },
      {
        label: 'Can I use frameworks and APIs?',
        content:
          'Of course! As long as your final product is something original, there is no harm in using something to help you achieve that.',
      },

      {
        label: 'Is there reimbursement for travel?',
        content: 'No, we do not offer any reimbursement for travel expenses.',
      },

      {
        label: 'How will the shortlisting be done in the online round?',
        content:
          'Our team will evaluate both your abstract to test your problem solving skills and creativity as well as your GitHub (Or GitLab or BitBucket or anything else). Based on a combination of both of these, we will shortlist teams.',
      },
      {
        label: 'Will I get help if I face any problems?',
        content:
          'Of course! We have a lot of mentors coming in from many different fields and all of them are there to help you out.',
      },
    ],
    [
      {
        label: 'What do I get out of this hackathon?',
        content:
          'You get a great opportunity for peer networking, compete to win massive cash prizes, chances to gain internships or job offers from some cool companies, an amazing learning experience, punny jokes and some awesome memories. ;)',
      },
      {
        label: 'Where is the hackathon being conducted?',
        content:
          'It is being conducted at Sri Venkateswara College of Engineering, Sriperumbudur. Please scroll down to find the exact location.',
      },

      {
        label: 'When is the last date to register',
        content:
          "Registrations will close at 11:59 PM, 31st May, 2022. We will announce the shortlisted teams shortly after that. If selected, you'll be expected to make the payment before 3rd June, 2022.",
      },
      {
        label: 'How many people can be on each team?',
        content:
          'You can have a team of 3-5 members from the same or from different institutions. We recommend to have a balanced team with a mixture of designers and developers.',
      },
      {
        label: 'What about food?',
        content:
          "We'll be providing you with lunch & dinner on day 1 and breakfast & lunch on day 2. We'll also have a stash of snacks and refreshments available for everyone round the clock.",
      },

      {
        label: 'Is there Wi-Fi?',
        content: 'YES!',
      },

      {
        label: 'What is the judging criteria?',
        content:
          "Our judges will be evaluating teams on the 3 I's - Innovation (Originality & Creativity of the idea), Implementation (Technical challenge & completeness of the project), and Impact (Business or Social Impact.)",
      },
      {
        label:
          'Do we have to implement the same idea that was mentioned in our abstract?',
        content:
          "No it's not necessary for you to implement the same idea mentioned in your abstract. You are free to implement a different idea on the day of the hackathon",
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
