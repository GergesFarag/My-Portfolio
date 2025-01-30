import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  standalone: false,
  
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css'
})
export class SkillComponent {
  @Input() skillClass!:string;
  @Input() skillName!: string;
  @Input() skillLevel!: number;
  get range(){
    return Array(10);
  }
}
