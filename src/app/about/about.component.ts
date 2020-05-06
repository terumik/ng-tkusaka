import { Component, OnInit, OnDestroy } from '@angular/core';
import { Education } from '../models/education.model';
import { WorkExperience } from '../models/work-experience.model';
import { Animations } from '../shared/animation';
import { ProfileService } from '../services/profile.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [Animations.fadeIn, Animations.slideIn]
})
export class AboutComponent implements OnInit, OnDestroy {

  profileSub: Subscription;

  overview: string[];
  frontendSkills: string[];
  backendSkills: string[];
  otherSkills: string[];

  educations: Education[];
  workExperiences: WorkExperience[];

  constructor(
    private profileService: ProfileService,
  ) { }

  ngOnInit(): void {

    this.profileSub = this.profileService.getProfile().subscribe(
      (data) => {
        this.overview = data.overview;
        this.frontendSkills = data.frontendSkills;
        this.backendSkills = data.backendSkills;
        this.otherSkills = data.otherSkills;
        this.educations = data.educations;
        this.workExperiences = data.workExperiences;
      }
    );
  }

  ngOnDestroy(): void {
    this.profileSub.unsubscribe();
  }

}
