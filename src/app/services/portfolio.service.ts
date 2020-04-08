import { Injectable } from '@angular/core';
import { Portfolio } from '../models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private portfolios: Portfolio[] = [
    new Portfolio(
      1, 'Rush2Brush', 'assets/images/portfolio-images/r2b_cover.png', 'School Project',
      new Date('2018-05-01'), new Date('2018-06-01'),
      {
        title: 'RESTful API built with PHP and consumed with Angular',
        text: 'This assignment required students to build a RESTful API with an instructional document that is to be used by other students for developing a single page application (SPA). I created a Color Palette API that returns combinations of the colors from the end-point. Also, as a consumer, I am using used my partner\'s brush API and implement search functionality with Angular 6.'
      },
      ['Angular6', 'PHP', 'MySQL'],
      { front: ['HTML', 'CSS'], back: ['PHP', 'MySQL'], others: ['Angular6', 'Bootstrap4', 'npm', 'git', 'Documentation'] },
      ['Color Palette RESTful API development', 'Create a documentation for API', 'Front-end development with Angular'],
      'https://rush2brush.tkusaka.com', 'https://github.com/terumik/AngularWithAPI',
      [
        { title: 'Color Palette API Documentation', imgUrl: 'assets/images/portfolio-images/r2b_feature_1.png', text: 'Created a detailed documentation for other peer developers to consume my RESTful API' },
        { title: 'Brushes Page', imgUrl: 'assets/images/portfolio-images/r2b_feature_2.png', text: 'Consumed an API developed by the other student and used it for developing SPA with Angular 6' },
        { title: 'Rush2Brush Website', imgUrl: 'assets/images/portfolio-images/r2b_feature_3.png', text: 'Created the front-end pages developed in Angular in order to understand core concepts of the framework such as components, services, observables, directives, and routing' }
      ]
    ),
    new Portfolio(
      2, 'Backseat Driver', 'assets/images/portfolio-images/bsd_cover.png', 'School Project',
      new Date('2018-05-01'), new Date('2018-06-01'),
      {
        title: 'Backseat Driver is an application built with MEAN Stack and GoogleAPI',
        text: 'The objective of this project was to understand the trends in the modern web development scenes and learn it on our own to establish a learning habit. Our team decided to build a location finder application with MongoDB, Express, Angular6, Node.js and Google APIs.'
      },
      ['Angular6', 'Node.js', 'MongoDB'],
      { front: ['TypeScript', 'JavaScript'], back: ['MongoDB', 'Node.js'], others: ['Angular6', 'Express', 'Google Map API', 'npm', 'git', 'Bootstrap4'] },
      ['User Registration Form (Angular)', 'Manual Location Search (Angular)', 'Favourite List (Node.js and MongoDB)', 'Heroku Deployment'],
      'https://bsdriver.herokuapp.com/', 'https://github.com/mmwny/bsd',
      [
        { title: 'MEAN Stack', imgUrl: 'assets/images/portfolio-images/bsd_feature_1.png', text: 'This project allowed me to understand how front-end and back-end connected in MEAN stack' },
        { title: 'Heroku Deployment', imgUrl: 'assets/images/portfolio-images/bsd_feature_2.png', text: 'Familiarize with Heroku, package.json and npm to solve the errors occurred in the deployment phase' },
      ]
    ),
    new Portfolio(
      3, 'Smart Space', 'assets/images/portfolio-images/smsp_cover.png', 'School Project',
      new Date('2018-01-01'), new Date('2018-04-01'),
      {
        title: 'Integrated Social Network Service for Students and Employers',
        text: 'To understand the complex structures of social network services (SNS), our team decided to build our own SNS by using PHP. The website allows students to communicate with other users, including employers, as well as manage their tasks.'
      },
      ['PHP', 'MySQL', 'AJAX'],
      { front: ['HTML', 'CSS', 'JavaScript'], back: ['PHP', 'MySQL'], others: ['jQuery, jQuery UI', 'AJAX', 'git', 'Bootstrap3'] },
      ['Student Profile', 'Resume Uploading', 'Task Management', 'and Related Pages'],
      'https://smart-space.herokuapp.com/authorization', 'https://github.com/HTTP-5202-0NA-winter2018/smartspace',
      [
        { title: 'Profile Page', imgUrl: 'assets/images/portfolio-images/smsp_feature_1.png', text: 'Display dropdown options based on users\' selection using AJAX' },
        { title: 'Task Management Page', imgUrl: 'assets/images/portfolio-images/smsp_feature_2.png', text: 'Update task status without reloading the page using AJAX' },
      ]
    ),
    new Portfolio(
      4, 'Humber and District Hospital', 'assets/images/portfolio-images/hdh_cover.png', 'School Project',
      new Date('2018-02-01'), new Date('2018-04-01'),
      {
        title: 'Accessible and Beneficial Hospital Website',
        text: 'This hospital redesign project was a team project that aimed to redesign the existing hospital website to be more beneficial, accessible and user-friendly so that it can be a new revenue source. The former website has an outdated design with multiple broken links. Users had difficulty to navigate to the information they needed. Our team solved this problem by collaborating with the students from UX design program. We made new header navigation and prioritized the information based on users input and feedback. We also added various features to the website so it can be an inquiry center for the users and the hospital. This will reduce the monotonous and repetitive tasks that the hospital staff needs to handle, as well as save patients precious time. I was in charge of a patient portal page. Patient portal is a core feature in order to provide tailored information for the patients.'
      },
      ['C#', 'MSSQL', 'Entity Framework'],
      { front: ['HTML', 'CSS', 'JavaScript'], back: ['C#', 'MSSQL', 'Azure Database'], others: ['Entity Framework', 'jQuery', 'AJAX', 'git', 'Bootstrap4'] },
      ['Patient Portal including login page for admins and patients, patient registration form, and lab report'],
      'https://humberdistricthospital.azurewebsites.net/', 'https://github.com/terumik/kdh',
      [
        { title: 'Patient Registration', imgUrl: 'assets/images/portfolio-images/hdh_feature_1.png', text: 'Easy to register a new patient with their email address. Patients will receive an invitation email with a unique link that navigates to the online user registration page. Passwords are hashed and securely stored in the database' },
        { title: 'Lab Report', imgUrl: 'assets/images/portfolio-images/hdh_feature_2.png', text: 'Online lab reports are now available for the portal users. Administrators can add new reports and results for the patients. Administrators can also add new test types that will reduce repetitive form entry' },
      ]
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
