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
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
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
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://brandonjturner.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://brandonjturner.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://brandonjturner.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://brandonjturner.com',
    image: porfolioImage5,
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage11,
  },
];


export const education: TimelineItem[] = [
  {
    date: 'date',
    location: 'location',
    title: 'title',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'date',
    location: 'location',
    title: 'title',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'date',
    location: 'location',
    title: 'title',
    content: (
      <p>
        description
      </p>
    ),
  },
  {
    date: 'date',
    location: 'location',
    title: 'title',
    content: (
      <p>
        description
      </p>
    ),
  },
];

export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'name',
      text: 'endorsment',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'name',
      text: 'endorsment',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'name',
      text: 'endorsment',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
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
