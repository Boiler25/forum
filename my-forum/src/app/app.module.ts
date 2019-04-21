import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainWallComponent } from 'src/app/components/main-wall/main-wall.component';
import { TopicComponent } from './components/topic/topic.component';
import { Routes, RouterModule } from '@angular/router';
import { TopicCreatorComponent } from './components/topic-creator/topic-creator.component';

const appRoutes: Routes = [
  { path: '', component: MainWallComponent},
  { path: 'about', component: TopicCreatorComponent},
  // { path: 'about', component: AboutComponent},
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainWallComponent,
    TopicComponent,
    TopicCreatorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
