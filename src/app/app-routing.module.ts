import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountRoutingModule } from './account/account-routing.module';
import { AccountComponent } from './account/account.component';
import { NavigationRoutingModule } from './components/navigation/navigation-routing.module';
import { AuthService } from './core/_services/data/auth.service';

const routes: Routes = [
  { path: '', redirectTo: 'account', pathMatch: 'full' },
  { path: 'account', component: AccountComponent },
  { path: '**', redirectTo: 'account', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    NavigationRoutingModule,
    AccountRoutingModule
  ],
  exports: [RouterModule],
  providers: [AuthService]
})
export class AppRoutingModule { }
