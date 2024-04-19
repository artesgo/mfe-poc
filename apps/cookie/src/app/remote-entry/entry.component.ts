import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieComponent } from '../route/cookie.component';

@Component({
  standalone: true,
  imports: [CommonModule, CookieComponent],
  selector: 'wah-cookie-entry',
  template: `<wah-cookie></wah-cookie>`,
})
export class RemoteEntryComponent {}
