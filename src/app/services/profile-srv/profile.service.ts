import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private nameSubject = new BehaviorSubject<string | null>(null);
  name$ = this.nameSubject.asObservable();

  saveName(name: string): void {
    const message = `Hi ${name} `;
    this.nameSubject.next(message);
  }
}
