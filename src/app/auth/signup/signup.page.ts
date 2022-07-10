import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ISignupData } from '../interfaces/isignup-data';

@Component({
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  selector: 'form-field-prefix-suffix-example',
})
export class SignupPage implements OnInit {

  @ViewChild('f') form!: NgForm;
  error = undefined;

  FormGroup1 = this._form.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
  });
  FormGroup2 = this._form.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  hide = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private _form: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    let temp: ISignupData = {
      firstname : this.FormGroup1.value.firstname || '',
      lastname : this.FormGroup1.value.lastname || '',
      email : this.FormGroup2.value.email || '',
      password : this.FormGroup2.value.password || '',
    }
    this.authService.signup(temp).subscribe(
      resp => {
        console.log(resp);
        this.error = undefined;
        this.router.navigate(['/login'])
      },
      err  => {
        console.log(err.error);
        this.error = err.error;
      }
    )
  }

}
