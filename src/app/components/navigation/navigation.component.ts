import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  isDark: boolean = false;
  sidebar: boolean = false;
  profileItems: MenuItem[] = [{
    label: '',
    icon: 'pi pi-user',
    items: [{
      label: 'Setări',
      icon: 'pi pi-cog',
      routerLink: '/settings',
      // command: () => this.openEchipamenteDialog()
    },
    {
      label: 'Logout',
      icon: 'pi pi-pw pi-power-off',
      target: '_blank',
      command: (event) => this.logOut()
    }],
  }];

  constructor(private themeService: ThemeService, private router: Router) { }

  ngOnInit(): void {
  }


  changeTheme(theme: string) {
    this.themeService.switchTheme(theme);
    if(theme === 'saga-blue')this.isDark = false;
    if(theme === 'arya-blue')this.isDark = true;
  }

  onLogoSelect() {
    this.router.navigateByUrl('/dashboard')
  }

  logOut() {
    localStorage.removeItem('jwt');
    this.router.navigateByUrl('/login');
  }
}
