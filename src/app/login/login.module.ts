import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { LoginComponent } from './login.component';
import {LoginRouting} from './login.routing';
import {MaterialsModule} from '../materials/materials.module';



@NgModule({
  declarations: [SignInComponent, LoginComponent],
  imports: [
    CommonModule,
    LoginRouting,
    MaterialsModule
  ]
})
export class LoginModule { }
