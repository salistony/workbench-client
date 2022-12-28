import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { SignUpModel } from 'src/app/core/_models/login.model';
import { AuthService } from 'src/app/core/_services/data/auth.service';
import { NotificationService } from 'src/app/core/_services/notification.service';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  isLoading = false;
  emailVerified = false;
  emailToVerify: string = '';
  signUpModel: SignUpModel = {} as SignUpModel;
  signUpForm: FormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    defaultTheme: new FormControl()
  });

  constructor( private authService: AuthService,
    private messageService: MessageService,
    private themeService: ThemeService,
    private formBuilder: FormBuilder,
    private notificationService: NotificationService,
    private router: Router) { }

  ngOnInit(): void {
  }

  initForm(): void {
    this.signUpForm = this.formBuilder.group({
      name: [this.signUpModel.name, [
        Validators.required
      ]],
      email: [this.signUpModel.email, [
        Validators.required
      ]],
      password: [this.signUpModel.password, [
        Validators.required
      ]]
   });
  }

  verifyEmail() {
    this.isLoading = true;
    this.authService.verifyEmail(this.emailToVerify).subscribe(response => {
      this.emailVerified = response.content;
      this.isLoading = false;
      if(!response.content){
        this.notificationService.callError("Error", response.errorsFlat)
      }
    })
  }

  register(form: NgForm) {
    this.isLoading = true;
    this.signUpModel = {
      name: form.value.name,
      email: form.value.email,
      password: form.value.password,
      defaultTheme: 'saga-blue'
    }

    this.authService.createAccount(this.signUpModel).subscribe(response => {
      this.isLoading = false;
      if(response.content){
        this.notificationService.callSuccess("Success", "Utilizatorul a fost adăugat.")
        this.router.navigate(['/account/login']);
      }
      if(response.content === null){
        this.notificationService.callError("Error", response.errorsFlat)
      }
    })
  }
}
