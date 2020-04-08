import { Injectable } from '@angular/core';
import { Inquiry } from '../models/inquiry.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InquiryService {

  constructor(
    private http: HttpClient,
  ) { }

  sendInquiry(inquiry: Inquiry): Observable<{isEmailSent: boolean, isEmptyContent: boolean, serverRes: string}> {
    const url = 'http://localhost:3000/api/contact';
    return this.http.post<{ isEmailSent: boolean, isEmptyContent: boolean, serverRes: string }>(url, inquiry);
  }
}
