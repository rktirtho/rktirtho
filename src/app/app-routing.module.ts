import { SkillsComponent } from './skills/skills.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
  {path : "home", component : HomeComponent},
  // {path : "/", redirectTo:"home", pathMatch : "full"},
  {path : "about", component: AboutComponent},
  // {path : "experiance", component: EducationComponent},
  {path : "education", component: EducationComponent},
  {path : "training", component: EducationComponent},
  {path : "projects", component: ProjectsComponent},
  {path : "skills", component: SkillsComponent},
  {path : "experiance", component: EducationComponent},
  {path : "contact", component: ContactComponent},

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
