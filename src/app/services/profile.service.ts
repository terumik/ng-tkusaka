import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http: HttpClient,
  ) { }

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>('https://tkusaka.com/api/profileApi.php');
  }

}
