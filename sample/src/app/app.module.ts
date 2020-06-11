import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { CookieService } from 'ngx-cookie-service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { CreateprojectComponent } from './createproject/createproject.component';
//import { RelatedProjectsComponent } from './related-projects/related-projects.component';
import { DetectBiasComponent } from './detect-bias/detect-bias.component';
//import { FaqComponent } from './faq/faq.component';
//import { MitigateBiasComponent } from './mitigate-bias/mitigate-bias.component';
//import { ResultsComponent } from './results/results.component';
import { NgSelectModule } from '@ng-select/ng-select';
//import { FormsModule,FormBuilder, FormGroup, Validators,NgForm } from '@angular/forms';
//import { CommonService } from './common.service';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    CreateprojectComponent,
    //RelatedProjectsComponent,
    DetectBiasComponent,
    //FaqComponent,
    //MitigateBiasComponent,
    //ResultsComponent
    //CommonService
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NgSelectModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
