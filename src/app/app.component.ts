import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isDark: boolean = false;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.changeTheme(localStorage.getItem('theme') || '')
  }


  changeTheme(theme: string) {
    this.themeService.switchTheme(theme);
    if(theme === 'saga-blue')this.isDark = true;
    if(theme === 'arya-blue')this.isDark = true;
  }
}
