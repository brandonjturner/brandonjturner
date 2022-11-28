import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import portfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import portfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import portfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import portfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';


export const homePageMeta: HomepageMeta = {
  title: 'brandonjturner.com',
  description: "My personal portfolio website.",
};


export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Brandon J Turner.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Southern California based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currrently looking for <strong className="text-stone-100">new projects</strong> to dive into.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can see me playing <strong className="text-stone-100">volleyball</strong>,
        on a wall somewhere <strong className="text-stone-100">rock climbing</strong>, or in the mountains {' '}
        <strong className="text-stone-100">backpacking</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1v6ONjTz9oOhEcq_JLZNowvR5DEJnUrMF/view?usp=share_link',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

export const aboutData: About = {
  profileImageSrc: profilepic,
  description: ``,
  aboutItems: [
    {label: 'Location', text: 'Southern California', Icon: MapIcon},
    {label: 'Age', text: '34', Icon: CalendarIcon},
    {label: 'Interests', text: 'Volleyball, Climbing, Backpacking', Icon: SparklesIcon},
    {label: 'Study', text: 'Moorpark College/UCLA Extension', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Looking for new projects to take on.', Icon: OfficeBuildingIcon},
  ],
};

export const skills: SkillGroup[] = [
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 8,
      },
      {
        name: 'Next.js',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend Development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'MongoDB',
        level: 6,
      },
      {
        name: 'PHP',
        level: 6,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'www.brandonjturner.com',
    description: 'Built with React, Next.js and TailwindCss',
    url: 'https://brandonjturner.com',
    image: portfolioImage1,
  },
  {
    title: 'Football Win Picker',
    description: "Using free sports API's and MongoDB to produce football predictions based off the data.",
    url: 'https://github.com/brandonjturner/project3',
    image: portfolioImage2,
  },
  {
    title: 'Hack 4 LA',
    description: 'Code for America: Hack 4 LA website',
    url: 'https://github.com/brandonjturner/hack4la',
    image: portfolioImage3,
  },
  {
    title: 'Vanride',
    description: 'Created a Vanpool signup website that could generate tax refund milage receipts as well for a refund.',
    url: 'https://github.com/brandonjturner/project2',
    image: portfolioImage4,
  },
];


export const education: TimelineItem[] = [
  {
    date: 'November 2018',
    location: 'Full Stack Software Engineer Certificate',
    title: 'UCLA Extension',
    content: <p>Keeping myself current on the latest full stack technologies which were covered extensively at 
    UCLA Extension</p>, },
  {
    date: 'June 2008',
    location: 'Completed general education',
    title: 'Moorpark College',
    content: <p>Great experience of higher education from Moorpark Community College.</p>,
  },
  {
    date: 'June 2006',
    location: 'Diploma',
    title: 'Westlake High School',
    content: <p>Attended the WIT (Westlake Information Technology) Academy integrated with the high school. 
    The program introduced us to front end development and visual basic in 10th grade. I also 
    learned about video editing, graphic design and Microsoft Access.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'January 2015 to August 2022',
    location: 'MAXON Computer Software',
    title: 'Sofware Engineer',
    content: (
      <p>
<ul>
  <li>•Used PHP to manage student database for the Americas</li>
  <li>•Worked with QA troubleshooting and escalating software bugs</li>
  <li>•Maintained technical documentation for latest policies and procedures</li>
  <li>•Worked closely with the Development team, Sales team, Technical support, and 
Management teams to ensure technical operations were accurate to maintain 
application efficiency.</li>
<li>•Worked closely with the Development team, Sales team, Technical support, and 
Management teams to ensure technical operations were accurate to maintain 
application efficiency.</li>
<li>•Tackled day to day tasks such as Account Management, Process Monitoring, Data 
Collection, and Troubleshooting/coordinating Network Connections.</li>
<li>•Educated teachers and professors on methods of teaching Cinema 4D</li>
<li>•Managed education material, license servers and latest versions for schools in 
North/South America support for deploying Cinema4D in any environment</li>
<li>•Manage render servers on AWS, multiple cloud services and private configurations</li>
</ul>
      </p>
    ),
  },
  {
    date: 'November 2018 to Current',
    location: 'Code for America: Hack 4 LA(non-profit)',
    title: 'Software Engineer',
    content: (
      <p><ul>
        <li>•Working with people from all sides of the tech industry to help bring social services and 
information to the citizens of Los Angeles</li>
<li>•Utilizing the latest technologies to update HackforLA.com to the industry standard </li>
<li>•Assists in product management and work flow optimization and overall efficiency</li>
</ul>
      </p>
    ),
  },
  {
    date: 'June 2011 to December 2014',
    location: 'Jonestrading',
    title: 'Systems Engineer',
    content: (
      <p><ul>
        <li>•Managed 3 IT Support Employees</li>
  <li>•Manage communication and prioritization of projects with multiple departments with 
high dollar value</li>
  <li>•Liaison to Software Database Employees</li>
  <li>•Create custom computer software setup for each Wall Street Trader for their individual 
needs</li>   <li>•Server and Network support and backups, Exchange Server (Email), phone system 
support</li>
   <li>•Deploy Software Application and Operating System updates to over 200 computers and 
300 IP Phones</li>
   <li>•Real-time tech support of problems across multiple complex trading software systems 
and platforms for very demanding Wall Street Traders</li>
</ul>
      </p>
    ),
  },
  {
    date: 'March 2011 to June 2011',
    location: 'Sage Publishing',
    title: 'Front End Developer',
    content: (
      <p><ul>
        <li>•Website Development and final testing before all website updates</li>
        <li>•Designed frame work for templates to be used internally</li>
        <li>•Front end specialist creating the next generation of Sage website</li>
      
</ul>
      </p>
    ),
  },
  {
    date: 'January 2002 to Current',
    location: 'TurnerWebDev',
    title: 'Software Engineer',
    content: (
      <p><ul>
<li>•Consulting for computer Hardware, Software and Network maintenance</li>
<li>•Full Stack Web Development, web design, video design, directing and editing and 
photography with great feedback from customers</li>
<li>•Created MySQL database to track a companies VanPool service for its employees</li>
<li>•Created a front end for the MySQL database displaying the data on a secure reactive 
front end</li>
</ul>
      </p>
    ),
  },
  {
    date: 'January 2002 to December 2007',
    location: 'WV Communications',
    title: 'Software Support/Soldering',
    content: (
      <p><ul>
        <li>•Computer hardware, software and network systems. Circuit board production, Accounts 
Payable, Receiving and payroll. Microsoft Word, Excel, Access and light scripting</li>
</ul>
      </p>
    ),
  },
];

export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    
  ],
};

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Thank you.',
  items: [
    {
      type: ContactType.Email,
      text: 'me@brandonjturner.com',
      href: 'mailto:me@brandonjturner.com',
    },
    {
      type: ContactType.Location,
      text: 'Southern California',
      href: 'https://www.google.com/maps/place/Southern+California,+CA/data=!4m2!3m1!1s0x80c325a785c9a649:0x7223c333f40c68d8?sa=X&ved=2ahUKEwiqk-HWtND7AhVQL0QIHSQcBd0Q8gF6BAgREAE',
    },
    {
      type: ContactType.Instagram,
      text: '@ibrandonjturner',
      href: 'https://www.linkedin.com/in/brandonjturner/',
    },
    {
      type: ContactType.Github,
      text: 'brandonjturner',
      href: 'https://github.com/brandonjturner',
    },
  ],
};

export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/brandonjturner'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/brandonjturner/'},
];
