import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RosterComponent }   from './roster/roster.component';
import { SitterDetailComponent }   from './sitter-detail/sitter-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  { 
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'roster',
    component: RosterComponent
  },
  {
    path: 'sitters/:id',
    component: SitterDetailComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
