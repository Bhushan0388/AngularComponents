import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpclinet: HttpClient) { }

  userdata(){

    // return this.httpclinet.get('http://your-api-endpoint');
    const userlist=[
      {userID:10,Username:'Bob'},
      {userID:11,Username:'test'},
      {userID:12,Username:'test'},
    ]

    return userlist;
  }
}
