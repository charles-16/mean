import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

//import { HomeComponent } from './home/home.component';
//import { NavBarComponent } from './nav-bar/nav-bar.component';
//import { RelatedProjectsComponent } from './related-projects/related-projects.component';
import {CreateprojectComponent} from './createproject/createproject.component';
import { DetectBiasComponent } from './detect-bias/detect-bias.component';
const routes: Routes = [ 
  
  { path: '', component: CreateprojectComponent },
  { path: 'createProject', component: CreateprojectComponent },
  { path: 'detectbias', component: DetectBiasComponent },
  { path: 'detectbias/:id', component: DetectBiasComponent },
  //{ path: 'relatedProject', component: RelatedProjectsComponent },
  //{ path: 'relatedProject/:id', component: RelatedProjectsComponent }

  ]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
