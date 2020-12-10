import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {path : "", component: AboutComponent},
  {path : "about", redirectTo: "/" ,pathMatch: "full"},
  // {path : "experiance", component: EducationComponent},
  {path : "education", component: EducationComponent},
  {path : "training", component: EducationComponent},
  {path : "projects", component: ProjectsComponent},
  {path : "skill", component: EducationComponent},
  {path : "experiance", component: EducationComponent},
  {path : "contact", component: ContactComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
