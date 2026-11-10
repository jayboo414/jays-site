import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { PhotosPageComponent } from './photos-page/photos-page.component';
import { WritingPageComponent } from './writing-page/writing-page.component';
import { GamesPageComponent } from './games-page/games-page.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'photos', component: PhotosPageComponent },
  { path: 'writing', component: WritingPageComponent },
  { path: 'games', component: GamesPageComponent }
];
