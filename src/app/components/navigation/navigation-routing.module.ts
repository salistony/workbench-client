import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/_guards/auth.guard';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { SettingsComponent } from '../settings/settings.component';

const routes: Routes = [
  { path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent },
  { path: '404', component: NotFoundComponent },
  { path: 'settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
