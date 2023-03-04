import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountLogin } from 'src/app/commons/account-login';
import { AccountService } from 'src/app/services/account.service';
import { JwtResponse } from './../../commons/response/jwt-response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  accountLogin: AccountLogin = new AccountLogin;
  jwtResponse: JwtResponse = new JwtResponse;

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

  async authentication() {
    this.accountService.authentication(this.accountLogin).subscribe(data => {
      this.jwtResponse = data;
      sessionStorage.setItem('jwtToken', JSON.stringify(this.jwtResponse));

      console.log(this.jwtResponse.roles[0] == "ROLE_ADMIN");
      if ("ROLE_ADMIN" == this.jwtResponse.roles[0]) {
        this.router.navigate(['/admin-home']);
      } else {
        this.router.navigate(['']);
      }

      console.log('success', 'Đăng nhập thành công!!');
      setTimeout(() => location.reload(), 800);
    },
      error => {
        console.log(error);
      });
  }

  onSubmit() {
    if (this.accountLogin.password === undefined || this.accountLogin.password === '' || this.accountLogin.username === undefined || this.accountLogin.username === '') {
      console.log('Bạn phải điền đầy đủ cả tên tài khoản và mật khẩu!!');
      return;
    }
    this.authentication();
  }
}
