import { Injectable } from '@angular/core';
import { Portfolio } from '../models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private portfolios: Portfolio[] = [
    new Portfolio(
      1, 'Rush2Brush', 'assets/images/portfolio-images/r2b_cover.png', 'School Project',
      { start: new Date('2018-05-01'), end: new Date('2018-06-01') },
      'RESTful API built with PHP and consumed with Angular',
      {
        header: 'RESTful API built with PHP and consumed with Angular',
        description: 'This assignment required students to build a RESTful API with an instructional document that is to be used by other students for developing a single page application (SPA). I created a Color Palette API that returns combinations of the colors from the end-point. Also, as a consumer, I am using used my partner\'s brush API and implement search functionality with Angular 6.'
      },
      ['Angular6', 'PHP', 'MySQL'],
      {
        front: ['HTML', 'CSS'],
        back: ['PHP', 'MySQL',],
        others: ['Angular6', 'Bootstrap4', 'npm', 'git', 'Documentation']
      },
      ['Color Palette RESTful API development', 'Create a documentation for API', 'Front-end development with Angular'],
      'https://github.com/terumik/ng-collor-palette-api',
      'assets/videos/r2b-demo.mp4',
      'https://rush2brush.tkusaka.com',
    ),
    new Portfolio(
      2, 'Backseat Driver', 'assets/images/portfolio-images/bsd_cover.png', 'School Project',
      { start: new Date('2018-05-01'), end: new Date('2018-06-01') },
      'Backseat Driver is an application built with MEAN Stack and GoogleAPI',
      {
        header: 'Backseat Driver is an application built with MEAN Stack and GoogleAPI',
        description: 'The objective of this project was to understand the trends in the modern web development scenes and learn it on our own to establish a learning habit. Our team decided to build a location finder application with MongoDB, Express, Angular6, Node.js and Google APIs.'
      },
      ['Angular6', 'Node.js', 'MongoDB'],
      {
        front: ['TypeScript', 'JavaScript'],
        back: ['MongoDB', 'Node.js'],
        others: ['Angular6', 'Express', 'Google Map API', 'npm', 'git', 'Bootstrap4']
      },
      ['User Registration Form (Angular)', 'Manual Location Search (Angular)', 'Favourite List (Node.js and MongoDB)', 'Heroku Deployment'],
      'https://github.com/mmwny/bsd',
      'assets/videos/bsd-demo.mp4',
      'https://bsdriver.herokuapp.com/',
    ),
    new Portfolio(
      3, 'Smart Space', 'assets/images/portfolio-images/smsp_cover.png', 'School Project',
      { start: new Date('2018-01-01'), end: new Date('2018-04-01') },
      'Integrated Social Network Service for Students and Employers',
      {
        header: 'Integrated Social Network Service for Students and Employers',
        description: 'To understand the complex structures of social network services (SNS), our team decided to build our own SNS by using PHP. The website allows students to communicate with other users, including employers, as well as manage their tasks.'
      },
      ['PHP', 'MySQL', 'AJAX'],
      {
        front: ['HTML', 'CSS', 'JavaScript'],
        back: ['PHP', 'MySQL'],
        others: ['jQuery, jQuery UI', 'AJAX', 'git', 'Bootstrap3']
      },
      ['Student Profile', 'Resume Uploading', 'Task Management', 'and Related Pages'],
      'https://github.com/HTTP-5202-0NA-winter2018/smartspace',
      'assets/videos/smsp-demo.mp4',
      'https://smart-space.herokuapp.com/authorization',
    ),
    new Portfolio(
      4, 'Humber and District Hospital', 'assets/images/portfolio-images/hdh_cover.png', 'School Project',
      { start: new Date('2018-02-01'), end: new Date('2018-04-01') },
      'Accessible and Beneficial Hospital Website',
      {
        header: 'Accessible and Beneficial Hospital Website',
        description: 'This hospital redesign project was a team project that aimed to redesign the existing hospital website to be more beneficial, accessible and user-friendly so that it can be a new revenue source. The former website has an outdated design with multiple broken links. Users had difficulty to navigate to the information they needed. Our team solved this problem by collaborating with the students from UX design program. We made new header navigation and prioritized the information based on users input and feedback. We also added various features to the website so it can be an inquiry center for the users and the hospital. This will reduce the monotonous and repetitive tasks that the hospital staff needs to handle, as well as save patients precious time. I was in charge of a patient portal page. Patient portal is a core feature in order to provide tailored information for the patients.'
      },
      ['C#', 'MSSQL', 'Entity Framework'],
      {
        front: ['HTML', 'CSS', 'JavaScript'],
        back: ['C#', 'MSSQL', 'Azure Database'],
        others: ['Entity Framework', 'jQuery', 'AJAX', 'git', 'Bootstrap4']
      },
      ['Patient Portal including login page for admins and patients, patient registration form, and lab report'],
      'https://github.com/terumik/kdh',
      'assets/videos/hdh-demo.mp4',
      'https://humberdistricthospital.azurewebsites.net/',
    ),
  ];

  constructor() { }

  getPortfolios() {
    return this.portfolios.slice();
  }

  getPortfolioById(id: number) {
    return this.portfolios.find(p => p.id === id);
  }

}
