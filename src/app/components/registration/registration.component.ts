import { Component, OnInit } from '@angular/core';
import { AccountRegistration } from 'src/app/commons/account-registration';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  accountRegistration: AccountRegistration = new AccountRegistration;
  errorMessage: Error = new Error;
  employeeClicked = false;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.accountRegistration.password === undefined || this.accountRegistration.password === '' ||
      this.accountRegistration.username === undefined || this.accountRegistration.username === '' ||
      this.accountRegistration.email === undefined || this.accountRegistration.email === '') {
      console.log('error', 'Bạn cần điền đầy đủ thông tin');
      return;
    }
    console.log(this.accountRegistration);
    this.accountService.registration(this.accountRegistration).subscribe(data => {
      console.log('success', 'Đăng ký tài khoản thành công!!');
    }, error => {
      this.errorMessage = error.error;
      console.log('error', this.errorMessage.message);
    });

  }

  onEmployeeClick() {
    this.employeeClicked = true;
  }

  onCustomerClick() {
    this.employeeClicked = false;
  }
}
