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
      href: '../',
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
    name: '',
    skills: [
      {
        name: '',
        level: 9,
      },
      {
        name: '',
        level: 7,
      },
      {
        name: '',
        level: 6,
      },
    ],
  },
  {
    name: '',
    skills: [
      {
        name: '',
        level: 8,
      },
      {
        name: '',
        level: 5,
      },
      {
        name: '',
        level: 4,
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
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
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
  }
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
