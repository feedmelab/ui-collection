import { Project } from './Project';

export const MOCK_PROJECTS = [
  new Project({
    id: 1,
    name: 'Podcaster',
    description:
      'Single Page Application connected to APPLE API tat offers a huge list of audio PODCAST available to listen and download for free from arround the world.',
    stack: 'REACT, JAVASCRIPT, HOOKS, REDUX TOOLKIT, STYLED COMPONENTS...',
    imageUrl: '/assets/placeimg_500_300_arch4.jpg',
    url: 'https://podcaster-omega.vercel.app',
    behaviour: true,
    contractTypeId: 3,
    contractSignedOn: '2023-07-04T18:39:41.473Z',
    budget: '****',
    isActive: false,
  }),
  new Project({
    id: 2,
    name: 'ECOSYSTEM',
    description:
      'Portfolio of my works in a Ecosystem environtment that interacts in real time based on API data from space.',
    stack: 'React, Typescript, CSS, WEBPACK, Perlin Noise.',
    imageUrl: '/assets/ecosystem_shot.png',
    url: 'https://ui-xtorner.vercel.app',
    behaviour: true,
    contractTypeId: 4,
    contractSignedOn: '2012-08-06T21:21:31.419Z',
    budget: 91638,
    isActive: true,
  }),

  new Project({
    id: 3,
    name: "ENCREUA'T",
    description:
      'PWA multiplayer game that allows players to compete against each others while learning how to spell a better Catalan',
    stack: 'Node, Express, Socket.io, API REST, React, Typescript, CSS',
    imageUrl: '/assets/placeimg_500_300_arch5.jpg',
    url: 'https://jocs.feedmelab.com',
    behaviour: true,
    contractTypeId: 4,
    contractSignedOn: '2013-05-26T01:10:42.344Z',
    budget: 45660,
    isActive: true,
  }),
  new Project({
    id: 4,
    name: 'AIKREATE SAAS',
    description:
      'SaaS application that audits school day by day students learning, control the evolution of the students knowledge grade during the course. Schedule agenda for mutiusers, with alumn and tutor correlation.',
    stack: 'NODE, TYPESCRIPT, REST API, VAGRANT, DOCKER.',
    imageUrl: '/assets/placeimg_500_300_arch12.jpg',
    url: 'Not Available',
    contractTypeId: 6,
    contractSignedOn: '2022-06-26T18:24:01.706Z',
    budget: 29729,
    isActive: true,
  }),
  new Project({
    id: 5,
    name: 'IMPERATIVELY',
    description:
      'VSCode Extension that helps you code your projects using your voice with AI GPT',
    stack:
      'Developed a JSON pseudo code that interacts with Chat GPT and your voice orders',
    imageUrl: '/assets/placeimg_500_300_arch12.jpg',
    url: 'Currently in development',
    contractTypeId: 2,
    contractSignedOn: '2009-12-18T21:46:47.944Z',
    budget: 81188,
    isActive: true,
  }),
];
