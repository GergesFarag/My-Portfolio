import { Component } from '@angular/core';
import { SkillModel } from '../../models/skill-model';
import { SkillsService } from '../../services/skills.service';

@Component({
  selector: 'app-skills',
  standalone: false,
  
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills!:SkillModel[];
  constructor(private skillService:SkillsService){}
  ngOnInit(): void {
    this.skills = this.skillService.getSkills;
  }
}
