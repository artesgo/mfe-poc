import { Injectable, signal } from "@angular/core";

@Injectable({ providedIn: "root" })
export class CookieService {
  state = signal('cookie');
}