import { Injectable } from '@angular/core';
import { Inquiry } from '../models/inquiry.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InquiryService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient,
  ) { }


  sendInquiry(inquiry: Inquiry): Observable<{ isEmailSent: boolean, isEmptyContent: boolean, serverRes: string }> {
    const url = 'https://tkusaka.com/api/mailer.php';

    // information send back to contact.component.ts
    return this.http.post<{ isEmailSent: boolean, isEmptyContent: boolean, serverRes: string }>(url, inquiry, this.httpOptions);
  }
}
