import { Feature } from './feature.model';

export class Portfolio {
  constructor(
    public id: number,
    public projectName: string,
    public coverImg: string,
    public client: string,
    public durationStart: Date,
    public durationEnd: Date,
    public description: { title: string, text: string },
    public featuredSkills: string[],
    public skills: { front: string[], back: string[], others: string[] },
    public responsibilities: string[],
    public demoUrl: string,
    public gitUrl: string,
    public features: Feature[]
  ) { }

}
