import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-filter-users',
  templateUrl: './filter-users.component.html',
  styleUrls: ['./filter-users.component.css']
})
export class FilterUsersComponent implements OnInit {
 
  @Input()
  channelName?: String ;

  @Output()
  updatedlist= new EventEmitter();
  

  constructor() { }

  ngOnInit(): void {
  }

  updateuser(){
    console.log("Clicked on update user");
    
  }

}