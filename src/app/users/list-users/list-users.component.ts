import { importType } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import {UsersService} from './../../service/users.service'

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  Cname='New'  
  user={};
  userlist={};

  constructor(private userservice: UsersService) { }

  ngOnInit(): void {
    this.userlist=this.userservice.userdata();
    
  }

  UpdatetheUser(event:any){
    console.log(event);
    this.user=event;

  }

}
