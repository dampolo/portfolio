import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  showFocus = false;
  checkboxState = false;
  checkboxChecked = false;

  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  post = {
    endPoint: 'https://damianpoloczek.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  contactMe() {
    this.showFocus = true;
  }

  onSubmit(ngForm: NgForm) {
    debugger
    if (!this.checkboxState) {
      this.checkboxChecked = true;
    } else if (ngForm.submitted && ngForm.form.valid) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            window.location.replace('/sent-message-confirmation');
            ngForm.resetForm();
            this.checkboxChecked = false;
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    }
  }
}
