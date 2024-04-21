import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavComponent } from './layout/nav/nav.component';

@Component({
  standalone: true,
  imports: [RouterModule, NavComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'reload';
}
