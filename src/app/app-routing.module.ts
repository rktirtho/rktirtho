import { EducationComponent } from './education/education.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path : "about", component: EducationComponent},
  {path : "experiance", component: EducationComponent},
  {path : "training", component: EducationComponent},
  {path : "project", component: EducationComponent},
  {path : "skill", component: EducationComponent},
  {path : "experiance", component: EducationComponent},
  {path : "contact", component: EducationComponent},
  
  
  {path : "education", component: EducationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
