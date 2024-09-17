import { Injectable } from '@angular/core';
import { user } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  user : user[] = [
    new user(1,'srk','srk','111111'),
    new user(2,'tsv','tsv','111111'),
    new user(1,'em','em','111111'),
    new user(1,'ev','ev','111111'),
  ]
}
