import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Credentials, LoginModel } from 'src/app/core/_models/login.model';
import { AuthService } from 'src/app/core/_services/data/auth.service';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoading = false;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });
  loginModel: LoginModel = {} as LoginModel;
  aplicationTokenId: string = '';
  hasUserCode: boolean = false;
  credentials: Credentials = {} as Credentials;
  invalidLogin: boolean = false;
  isDark: boolean = false;

  constructor( private authService: AuthService,
    private messageService: MessageService,
    private themeService: ThemeService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.isDark = false;
    this.changeTheme('saga-blue');
  }

  initForm(): void {
    this.loginForm = this.formBuilder.group({
      email: [this.loginModel.accountName, [
        Validators.required
      ]],
      password: [this.loginModel.password, [
        Validators.required
      ]]
   });
  }

  login(form: NgForm) {
    this.isLoading = true;

    this.credentials = {
      email: form.value.email,
      password: form.value.password
    }

    this.authService.login(this.credentials).subscribe(response => {
      if(response.content === null) {
        this.isLoading = false
        this.invalidLogin = true;
        this.messageService.add({severity:'error', summary: 'Error', detail:'Email sau Parolă greșită!'})
      } else {
        const token = response.content.token;
        const email = response.content.email;
        const name = response.content.name;
        const theme = response.content.defaultTheme;
        this.changeTheme(theme);
        localStorage.setItem("jwt", token);
        localStorage.setItem("email", email);
        localStorage.setItem("name", name);
        localStorage.setItem("theme", theme);
        this.router.navigate(["/dashboard"]);
        this.invalidLogin = false;
        this.isLoading = false;
      }
    })
  }

  signUp() {
    this.router.navigate(['/account/register'])
  }

  changeTheme(theme: string) {
    this.themeService.switchTheme(theme);
    if(theme === 'saga-blue')this.isDark = false;
    if(theme === 'arya-blue')this.isDark = true;
  }
}
