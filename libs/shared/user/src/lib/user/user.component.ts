import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from './user.service';

@Component({
  selector: 'lib-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  user = inject(UserService).user;
}
