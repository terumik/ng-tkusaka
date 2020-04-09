import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InquiryService } from '../services/inquiry.service';
import { Inquiry } from '../models/inquiry.model';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {

  inquirySub: Subscription;
  isProgress = false;

  constructor(
    public inquiryService: InquiryService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {

    this.isProgress = true;

    if (form.value.msg.search(':/|www') !== -1) {
      this._snackBar.open('Please remove a link from your message for sending an inquiry.', 'OK');
    } else {
      const inquiry = new Inquiry(form.value.name, form.value.email, form.value.msg);

      this.inquirySub = this.inquiryService.sendInquiry(inquiry).subscribe((resData) => {
        console.log('Response from server ', resData); // success

        if (resData.isEmptyContent) {
          this._snackBar.open(resData.serverRes, 'OK');
        } else {
          if (resData.isEmailSent) {
            this._snackBar.open(resData.serverRes, 'OK');
            form.resetForm();
          } else if (!resData.isEmailSent) {
            this._snackBar.open(resData.serverRes, 'OK');
          }
        }

      });
    }

    this.isProgress = false;
  }

  onCancel() {
    this.inquirySub.unsubscribe();
    this.isProgress = false;
  }

  ngOnDestroy() {
    if (this.inquirySub) {
      this.inquirySub.unsubscribe();
    }
    this.isProgress = false;
  }

}
