import { Injectable } from '@angular/core';
import { SkillModel } from '../models/skill-model';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private skills:SkillModel[];
  constructor() { 
    this.skills = [
      {name: 'HTML', level: 9, class:"fa-brands fa-html5"},
      {name: 'CSS', level: 9, class: "fa-brands fa-css3-alt"},
      {name: 'JavaScript', level: 8, class: "fa-brands fa-js"},
      {name: 'Angular', level: 8, class: "fa-brands fa-angular"},
      {name: 'Node.js', level: 7, class: "fa-brands fa-node"},
      {name: 'MongoDB', level: 7, class: "fa-solid fa-database"},

    ]
  }
  get getSkills(): SkillModel[] {
    return this.skills;
  }
}
