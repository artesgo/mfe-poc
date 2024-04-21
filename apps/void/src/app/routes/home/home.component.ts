import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '@cookie/user';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, UserComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
