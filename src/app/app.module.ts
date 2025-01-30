import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from '../components/nav/nav.component';
import { AboutComponent } from '../components/about/about.component';
import { LandingComponent } from '../components/landing/landing.component';
import { FooterComponent } from '../components/footer/footer.component';
import { SkillsComponent } from '../components/skills/skills.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { HireComponent } from '../components/hire/hire.component';
import { SkillComponent } from '../components/skill/skill.component';
import { ProjectComponent } from '../components/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    LandingComponent,
    FooterComponent,
    SkillsComponent,
    ProjectsComponent,
    HireComponent,
    SkillComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
