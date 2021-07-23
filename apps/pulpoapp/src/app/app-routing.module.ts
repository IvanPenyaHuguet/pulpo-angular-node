import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ShowservicesComponent } from './pages/showservices/showservices.component';
import { CreateservicesComponent } from './pages/createservices/createservices.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/services',
    pathMatch: 'full',
  },
  {
    path: 'services',
    component: ShowservicesComponent,
    pathMatch: 'full',
  },
  {
    path: 'services/add',
    component: CreateservicesComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
