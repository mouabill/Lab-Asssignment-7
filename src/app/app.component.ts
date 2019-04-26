import { Component } from '@angular/core';
import { ToastService } from './toast/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toast-app';
  toastTypes: Array<string> = [];

  constructor(private toastService: ToastService) {
    this.toastTypes = ['success', 'info', 'danger', 'warning'];
    //success, info, danger, warning//
  }
  showToast() {

    const rand = Math.floor(Math.random() * 3);
    const toastType = this.toastTypes[rand];
    const toastMessage = 'Hello, this is a message! Your random Number is: ' + rand;
    const duration = 4000;
    this.toastService.showToast(toastType, toastMessage, duration);
  }

}
