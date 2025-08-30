import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private isOpenSubject = new BehaviorSubject<boolean>(false);
  public isOpen$ = this.isOpenSubject.asObservable();

  constructor() { }

  openSidebar() {
    this.isOpenSubject.next(true);
  }

  closeSidebar() {
    this.isOpenSubject.next(false);
  }

  toggleSidebar() {
    this.isOpenSubject.next(!this.isOpenSubject.value);
  }

  get isOpen(): boolean {
    return this.isOpenSubject.value;
  }
}
