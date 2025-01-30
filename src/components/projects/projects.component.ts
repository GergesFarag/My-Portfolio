import { Component } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { ProjectModel } from '../../models/project-model';

@Component({
  selector: 'app-projects',
  standalone: false,
  
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects:ProjectModel[];
  constructor(private projectService:ProjectsService){
    this.projects = this.projectService.getProjects;
  };

}
