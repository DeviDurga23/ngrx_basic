import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User} from './Models/user.model';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http : HttpClient) { }

  private apiUrl = "https://jsonplaceholder.typicode.com/users";
  addUser(user : User){
        // return this.http.post(this.apiUrl,user)
        return this.http.post(`${this.apiUrl}`, user);
  }

  getUser()
  {
    return this.http.get(this.apiUrl).pipe(delay(400));
  }

  deleteUser(id:number)
  {
     return this.http.delete(`${this.apiUrl}/${id}`);
  }
  
}
