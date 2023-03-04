import { AccountService } from 'src/app/services/account.service';
import { Account } from './../../commons/response/account';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  accounts!: Account[]; 

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.getAllAccounts();
  }

  displayedColumns: string[] = ['id', 'email', 'username', 'role'];

  dataSource = new MatTableDataSource<Account>();

  getAllAccounts(){
    this.accountService.getAllAccounts().subscribe(data => {
      this.accounts = data;
      this.dataSource.data = data;
      console.log(this.dataSource.data);
    }, error => {
      console.log(error);
    });
  }

}
