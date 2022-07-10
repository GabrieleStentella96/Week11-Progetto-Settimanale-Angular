import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ISignupData } from '../interfaces/isignup-data';

@Component({
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {

  @ViewChild('f') form!: NgForm;
  error = undefined;
  hide = true;

  loginForm = this._formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private authService: AuthService, private router: Router,private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    console.log("Sono in ngOnInit");
    this.authService.authSubject.subscribe(val => console.log(val?.user) )
  }

  onSubmit() {
    let temp: ISignupData = {
      email : this.loginForm.value.email || '',
      password : this.loginForm.value.password || '',
    }
    console.log(this.loginForm.value);
    this.authService.login(temp).subscribe(
      resp => {
        console.log(resp);
        this.error = undefined;
        this.router.navigate(['home'])
      },
      err  => {
        console.log(err.error);
        this.error = err.error;
      }
    )
  }

}
