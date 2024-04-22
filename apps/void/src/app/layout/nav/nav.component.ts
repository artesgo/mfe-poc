import { ChangeDetectionStrategy, Component, ElementRef, effect, signal, viewChild, viewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  links = viewChildren(RouterLinkActive, { read: ElementRef });

  menu = signal(false);

  menuOpen = effect(() => {
    const open = this.menu();
    if (open) {
      const el = this.links().find(el => el.nativeElement.classList.contains('active')) as ElementRef<HTMLElement>;
      el.nativeElement.focus();
    }
  })
}
