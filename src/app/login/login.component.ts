import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AuthService } from '../authentic/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
errorMsg ='';
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(public authService: AuthService,public router: Router, private spinnerService: Ng4LoadingSpinnerService) { }
  ngOnInit() {
    this.redirectOn();
  }
  onSubmit() {
    this.spinnerService.show();
    this.authService.userLogin(this.loginForm.value.username, this.loginForm.value.password)
    .subscribe(
      (res)=>{
        this.spinnerService.hide();
        if(res.responseCode== 200 && res.responseMessage==='success'){
          localStorage.setItem("Elogin","logged");
          this.redirectOn();
        }
        else if((res.responseCode===200) && (res.responseMessage!=='success')){
            this.errorMsg = res.responseMessage;
        }
      },
      (error)=>{
          this.errorMsg = error.error.responseMessage;
      }
    );
    
  }
  redirectOn(){
  if(localStorage.getItem('Elogin')){
    this.router.navigate(['/csvupload']);
  }else{
      this.router.navigate(['/csvupload']);
  }
  }

}
