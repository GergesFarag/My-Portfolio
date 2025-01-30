import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: false,
  
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  @Input() projectDate!:string;
  @Input() projectTitle!:string;
  @Input() githubLink!:string;
  @Input() projectImage!:string;
}
