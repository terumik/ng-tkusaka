import { Component, OnInit } from '@angular/core';
import { Education } from '../models/education.model';
import { WorkExperience } from '../models/work-experience.model';
import { Animations } from '../shared/animation';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [Animations.fadeIn, Animations.slideIn]
})
export class AboutComponent implements OnInit {
  frontendSkills: string[];
  backendSkills: string[];
  otherSkills: string[];

  educations: Education[];
  workExperiences: WorkExperience[];

  constructor(
    private profileService: ProfileService,
  ) { }

  ngOnInit(): void {

    this.frontendSkills = this.profileService.getFrontendSkills();
    this.backendSkills = this.profileService.getBackendSkills();
    this.otherSkills = this.profileService.getOtherSkills();

    this.educations = this.profileService.getEducations();
    this.workExperiences = this.profileService.getWorkExperience();
  }



}
