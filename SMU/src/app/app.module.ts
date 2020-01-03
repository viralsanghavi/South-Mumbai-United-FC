import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
// import { SliderModule } from 'angular-image-slider';
// import { NgImageSliderModule } from 'ng-image-slider';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGem } from '@fortawesome/free-regular-svg-icons';
import { faCircle, faAt, faCertificate, faTrophy, faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub,faTwitterSquare, faCodepen, faInstagram, faYoutube, faLinkedin, faMedium, faHtml5, faCss3Alt, faJsSquare, faReact, faAngular, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { ResumeComponent } from './components/resume/resume.component';
// import { SliderComponent } from './compon  ents/slider/slider.component';


library.add(faTwitter, faFacebook, faInstagram, faYoutube, faLinkedin, faMedium, faHtml5, faCss3Alt, faJsSquare, faReact, faAngular, faCircle, faAt, faCertificate, faTrophy, faBars, faGem);

const appRoutes: Routes = [
  { path: 'resume', component: ResumeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    ResumeComponent
    // SliderComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes, 
      { enableTracing: true } //debugging
    ),
    // NgImageSliderModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    // SliderModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
