import { Injectable } from '@angular/core';
import { MessageService } from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private messageService: MessageService) { }
  
  private doToastMessage(type: string, summary: string, detail: string, sticky = false) {
    this.messageService.add({ severity: type, summary, detail, sticky });
  }
  
  callSuccess(title: string, body: string, sticky = false) {
    this.doToastMessage('success', title, body, sticky);
  }
  
  callInfo(title: string, body: string, sticky = false) {
    this.doToastMessage('info', title, body, sticky);
  }
  
  callWarning(title: string, body: string, sticky = false) {
    this.doToastMessage('warn', title, body, sticky);
  }
  
  callError(title: string, body: string, sticky = false) {
    this.doToastMessage('error', title, body, sticky);
  }
}
