export class Portfolio {
  constructor(
    public id: number,
    public projectName: string,
    public coverImg: string,
    public client: string,
    public workingPeriod: { start: Date, end?: Date },
    public overview: string,
    public projectDetail: { header: string, description: string },
    public featuredSkills: string[],
    public skills: { front: string[], back: string[], others: string[] },
    public responsibilities: string[],
    public gitUrl: string,
    public demoVideoUrl: string,
    public demoUrl?: string,
  ) { }
}

