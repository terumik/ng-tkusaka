import { Injectable } from '@angular/core';
import { Education } from '../models/education.model';
import { WorkExperience } from '../models/work-experience.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private frontendSkills: string[] = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Angular',
    'Flutter',
    'Dart',
    'XML',
  ];
  private backendSkills: string[] = [
    'C#',
    'PHP',
    'MSSQL',
    'MySQL',
    'Oracle SQL',
    'Firebase'
  ];
  private otherSkills: string[] = [
    'Bootstrap4',
    'Angular Material',
    'jQuery',
    'ASP.NET',
    'Entity Framework',
    'MEAN Stack',
    'Git',
    'npm'
  ];

  private educations: Education[] = [
    {
      fieldOfStudy: 'Web Development',
      schoolName: 'Humber College',
      schoolLocation: 'Toronto, Canada',
      start: new Date(2017, 8),
      end: new Date(2018, 7),
    },
    {
      fieldOfStudy: 'Social Service Worker',
      schoolName: 'George Brown College',
      schoolLocation: 'Toronto, Canada',
      start: new Date(2013, 8),
      end: new Date(2015, 3),
    },
    {
      fieldOfStudy: 'Art and Media Studies',
      schoolName: 'Meiji Gakuin University',
      schoolLocation: 'Tokyo, Japan',
      start: new Date(2007, 3),
      end: new Date(2011, 2),
    },
  ];

  private workExperiences: WorkExperience[] = [
    {
      title: 'Software Developer',
      companyName: 'Sipher Inc.',
      companyLocation: 'Toronto, Canada',
      start: new Date(2018, 9),
      end: new Date(2020, 2),
      duties: [
        'Worked closely with a senior web developer to produce the websites',
        'Researched and testing different software programs and libraries as required for the project',
        'Implemented user management functionalities by using Angular, Flutter and Firebase',
        'Had an open mind to learn new technologies',
      ]
    },
    {
      title: 'Legal and Marketing Assistant',
      companyName: 'Orange LLP',
      companyLocation: 'Toronto, Canada',
      start: new Date(2015, 4),
      end: new Date(2017, 5),
      duties: [
        'Built and maintained a cooperate WordPress website',
        'Performed intake processes and basic consultations; provided assistance to clients according to their needs'
      ]
    },
  ];


  constructor() { }

  getFrontendSkills() {
    return this.frontendSkills.slice();
  }
  getBackendSkills() {
    return this.backendSkills.slice();
  }
  getOtherSkills() {
    return this.otherSkills.slice();
  }

  getEducations() {
    return this.educations.slice();
  }
  getWorkExperience() {
    return this.workExperiences.slice();
  }
}
