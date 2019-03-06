import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  template: `
  <mat-form-field>
    <input matInput type="email" placeholder="Email" required/>
  </mat-form-field>
  <mat-form-field>
    <input matInput type="password" placeholder="Password" required autocomplete="on"/>
  </mat-form-field>
    `
})
export class LoginFormComponent implements OnInit {
  emailControl = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

}
