import { Education } from './education.model';
import { WorkExperience } from './work-experience.model';

export class Profile {
  constructor(
    public overview: string[],
    public backendSkills: string[],
    public educations: Education[],
    public frontendSkills: string[],
    public otherSkills: string[],
    public workExperiences: WorkExperience[],
  ) { }
}

