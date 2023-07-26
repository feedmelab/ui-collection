import { Project } from './Project';

export const MOCK_PROJECTS = [
  new Project({
    id: 1,
    name: 'Podcaster',
    description:
      'SPA CONECTED TO A APPLE API THAT SHOWS A HUGE LIST OF FREE PODCAST AVALIABLE, TSTACK:REACT, JAVASCRIPT, FECTH, PROMISES, ASYNC/AWAIT, STYLED COMPONENTS...',
    imageUrl: '/assets/placeimg_500_300_arch4.jpg',
    contractTypeId: 3,
    contractSignedOn: '2023-07-04T18:39:41.473Z',
    budget: '****',
    isActive: false,
  }),
  new Project({
    id: 2,
    name: 'ECOSYSTEM',
    description:
      'Portfolio of my works in a Ecosustem environtment that interacts in real time based on API data from space. TSTACK: React, Typescript, CSS, WEBPACK, Perlin Noise.',
    imageUrl: '/assets/placeimg_500_300_arch1.jpg',
    contractTypeId: 4,
    contractSignedOn: '2012-08-06T21:21:31.419Z',
    budget: 91638,
    isActive: true,
  }),
  new Project({
    id: 3,
    name: 'AIKREATE SAAS',
    description:
      'SaaS APPLICATION TO AUDIT SCHOOL DAY BY DAY WORK, CONTROL THE EVOLUTION OF ALUMN KNOWLEDGE DURING THE COURSE. TSTACK: NODE, TYPESCRIPT, REST API, VAGRANT, DOCKER. ',
    imageUrl: '/assets/placeimg_500_300_arch12.jpg',
    contractTypeId: 6,
    contractSignedOn: '2022-06-26T18:24:01.706Z',
    budget: 29729,
    isActive: true,
  }),
  new Project({
    id: 4,
    name: 'Purdy, Keeling and Smitham',
    description:
      'Innovative 6th generation model. Perferendis libero qui iusto et ullam cum sint molestias vel.',
    imageUrl: '/assets/placeimg_500_300_arch5.jpg',
    contractTypeId: 4,
    contractSignedOn: '2013-05-26T01:10:42.344Z',
    budget: 45660,
    isActive: true,
  }),
  new Project({
    id: 5,
    name: 'Kreiger - Waelchi',
    description:
      'Managed logistical migration. Qui quod praesentium accusamus eos hic non error modi et.',
    imageUrl: '/assets/placeimg_500_300_arch12.jpg',
    contractTypeId: 2,
    contractSignedOn: '2009-12-18T21:46:47.944Z',
    budget: 81188,
    isActive: true,
  }),
  new Project({
    id: 6,
    name: 'Lesch - Waelchi',
    description:
      'Profound mobile project. Rem consequatur laborum explicabo sint odit et illo voluptas expedita.',
    imageUrl: '/assets/placeimg_500_300_arch1.jpg',
    contractTypeId: 3,
    contractSignedOn: '2016-09-23T21:27:25.035Z',
    budget: 53407,
    isActive: false,
  }),
];
