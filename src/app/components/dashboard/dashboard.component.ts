import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SalisWorkbenchService } from 'src/app/core/_services/data/salisworkbench.service';
import { DialogService } from 'primeng/dynamicdialog';
import { TicketDialogComponent } from '../ticket-dialog/ticket-dialog.component';
import { Dashboard } from 'src/app/core/_models/salisworkbench/dashboard';
import { MenuItem } from 'primeng/api';
import { ThemeService } from 'src/app/theme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salisterra',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
  providers: [DialogService]
})
export class DashboardComponent implements OnInit {

  checked = false;
  subscription!: Subscription;
  isDark: boolean = false;
  sidebar: boolean = false;
  now = Date.now();
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
      target: '_blank'
      // command: (event) => this.logOut()
    }],
  }];
  dashbord: Dashboard[] = [];
  isLoading = false;
  display: boolean = false;
  dataLoaded: boolean = false;
  allowedToRefresh: boolean = true;
  noDataAvailable: boolean = false;

  constructor(private salisWorkbenchService: SalisWorkbenchService,
    private themeService: ThemeService,
    private router: Router,
    private dialogservice: DialogService) { }

  ngOnInit(): void {
    this.getTehnicieni();
    setInterval( ()=> {
      this.salisWorkbenchService.getTehnicieni().subscribe(response => {
        this.dashbord = response;
      })
    }, 5000)
  }

  isUserAuthentificated() {
    const token = localStorage.getItem('Jwt');

    if(token) {
      return true
    } else {
      return false;
    }
  }

  logOut() {
    localStorage.removeItem('Jwt');
  }

  changeTheme(theme: string) {
    this.themeService.switchTheme(theme);
    if(theme === 'saga-blue')this.isDark = false;
    if(theme === 'arya-blue')this.isDark = true;
  }

onLogoSelect() {
  this.router.navigateByUrl('')
  }

  openTicketDialog(id: number) {
    this.dialogservice.open(TicketDialogComponent, {
      data: {id},
			width: '1400px',
			styleClass: 'dynamic-dialog',
			header: 'Tickete MC În Așteptare',
      dismissableMask: true
    })
  }

  getTehnicieni(){
    this.isLoading = true;
    this.salisWorkbenchService.getTehnicieni().subscribe(response => {
      this.dashbord = response;
      this.isLoading = false;
      this.dataLoaded = true;
    })
  }
}
