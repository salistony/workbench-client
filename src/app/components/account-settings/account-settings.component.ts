import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { SelectItem } from 'primeng/api';
import { AccountSettingsModel } from 'src/app/core/_models/account-settings';
import { AuthService } from 'src/app/core/_services/data/auth.service';
import { NotificationService } from 'src/app/core/_services/notification.service';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {

  isLoading = false;
  user: string | null = '';
  isDark = localStorage.getItem('theme') === 'arya-blue' ? true : false;
  theme: string = '';
  settingsModel: AccountSettingsModel = {} as AccountSettingsModel;
  accountSettingsForm: FormGroup = new FormGroup({
    email: new FormControl(),
    oldPassword: new FormControl(),
    newPassword: new FormControl(),
    theme: new FormControl()
  });


  constructor(private themeService: ThemeService,
    private formBuilder: FormBuilder,
    private notificationService: NotificationService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('name');
    this.theme = localStorage.getItem('theme') || '{}';
  }

  initForm(): void {
    this.accountSettingsForm = this.formBuilder.group({
      email: [this.settingsModel.email, [
        Validators.required
      ]],
      oldPassword: [this.settingsModel.oldPassword, [
        Validators.required
      ]],
      newPassword: [this.settingsModel.newPassWord, [
        Validators.required
      ]]
   });
  }

  changeTheme(theme: string) {
    this.themeService.switchTheme(theme);
    if(theme === 'saga-blue')this.isDark = false;
    if(theme === 'arya-blue')this.isDark = true;
    this.theme = theme;
    localStorage.removeItem('theme')
    localStorage.setItem('theme', theme)
  }

  saveChanges(form: NgForm) {
    this.isLoading = true;
    this.settingsModel = {
      email: localStorage.getItem('email') || '',
      oldPassword: form.value.oldPassword,
      newPassWord: form.value.newPassword,
      theme: this.theme
    }

    this.authService.editAccount(this.settingsModel).subscribe(response => {
      if (response.content){
        this.notificationService.callSuccess('Success', response.messagesFlat);
      }
      if(response.content === null) {
        this.notificationService.callError('Error', response.errorsFlat);
      }

      form.reset();
      form.value.oldPassword = '';
      form.value.newPassWord = '';

      this.isLoading = false;
    })
  }
}
