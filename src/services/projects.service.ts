import { Injectable } from '@angular/core';
import { ProjectModel } from '../models/project-model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects!:ProjectModel[];
  constructor() { 
    this.projects = [
      {
        title: 'My Protfolio',
        thumbnail: 'portfolio.png',
        date: 'JAN 2025',
        githubLink: 'DUMMY LINK'
      },
      {
        title: 'Plantry E-Commerce',
        thumbnail: 'plantry.png',
        date: 'DEC 2024',
        githubLink: 'https://github.com/GergesFarag/Plantry_eCommerce'
      },
      {
        title: 'JS Quiz Page',
        thumbnail: 'quiz.png',
        date: 'SEP 2024',
        githubLink: 'https://github.com/GergesFarag/Online-Quiz-App'

      },
      {
        title: 'Client Management CRUD System',
        thumbnail: 'management.png',
        date: 'JUNE 2024',
        githubLink: 'https://github.com/GergesFarag/CRUD_SYSTEM_PROJECT'
      },
      {
        title: 'Praying Timing APIs Page',
        thumbnail: 'praying.png',
        date: 'JAN 2024',
        githubLink: 'https://github.com/GergesFarag/Praying_Time_Website'
      },
      {
        title: 'Furnitia Website Design',
        thumbnail: 'furnitia.png',
        date: 'DEC 2023',
        githubLink: 'https://github.com/GergesFarag/Furnitia_Website'
      },
    ]
  }
  get getProjects(): ProjectModel[]{
    return this.projects;
  }
}
