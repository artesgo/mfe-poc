import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieService } from '../cookie.service';
import { UserService } from '@cookie/user';

@Component({
  selector: 'wah-cookie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cookie.component.html',
  styleUrl: './cookie.component.scss',
})
export class CookieComponent {
  service = inject(CookieService);
  user = inject(UserService).user;
  cookie = this.service.state;
}
