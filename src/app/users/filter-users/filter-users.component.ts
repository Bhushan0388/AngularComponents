import { Component, EventEmitter,Input, OnInit, Output } from '@angular/core';

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
    const userobj={user:10,username:'Bhushan Khaladkar'};
    
    this.updatedlist.emit(userobj);
  }

}
