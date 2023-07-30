import { Project } from './Project';

export const MOCK_PROJECTS = [
  new Project({
    id: 1,
    name: 'Podcaster',
    description:
      'SPA CONECTED TO A APPLE API THAT SHOWS A HUGE LIST OF FREE PODCAST AVALIABLE.',
    stack:
      'TSTACK:REACT, JAVASCRIPT, FECTH, PROMISES, ASYNC/AWAIT, STYLED COMPONENTS...',
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
    name: 'AIKREATE SAAS',
    description:
      'SaaS application that audits school day by day students learning, control the evolution of the students knowledge grade during the course. Schedule agenda for mutiusers, with alumn and tutor correlation.',
    stack: 'NODE, TYPESCRIPT, REST API, VAGRANT, DOCKER.',
    imageUrl: '/assets/placeimg_500_300_arch12.jpg',
    url: '',
    contractTypeId: 6,
    contractSignedOn: '2022-06-26T18:24:01.706Z',
    budget: 29729,
    isActive: true,
  }),
  new Project({
    id: 4,
    name: 'Testing',
    description:
      'Innovative 6th generation model. Perferendis libero qui iusto et ullam cum sint molestias vel.',
    stack: 'TSTACK: React, Typescript, CSS, WEBPACK, Perlin Noise.',
    imageUrl: '/assets/placeimg_500_300_arch5.jpg',
    url: 'https://jocs.feedmelab.com',
    behaviour: true,
    contractTypeId: 4,
    contractSignedOn: '2013-05-26T01:10:42.344Z',
    budget: 45660,
    isActive: true,
  }),
  new Project({
    id: 5,
    name: 'Testing',
    description:
      'Managed logistical migration. Qui quod praesentium accusamus eos hic non error modi et.',
    stack: '',
    imageUrl: '/assets/placeimg_500_300_arch12.jpg',
    url: '',
    contractTypeId: 2,
    contractSignedOn: '2009-12-18T21:46:47.944Z',
    budget: 81188,
    isActive: true,
  }),
  new Project({
    id: 6,
    name: 'LTesting',
    description:
      'Profound mobile project. Rem consequatur laborum explicabo sint odit et illo voluptas expedita.',
    stack: '',
    imageUrl: '/assets/placeimg_500_300_arch1.jpg',
    url: '',
    contractTypeId: 3,
    contractSignedOn: '2016-09-23T21:27:25.035Z',
    budget: 53407,
    isActive: false,
  }),
];
