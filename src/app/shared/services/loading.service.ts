import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$: Observable<boolean> = this.loadingSubject.asObservable();

  constructor() { }

  show(): void {
    this.loadingSubject.next(true);
  }

  hide(): void {
    this.loadingSubject.next(false);
  }

  // Method to simulate async operations with loading
  async performAsyncOperation<T>(operation: Promise<T>): Promise<T> {
    this.show();
    try {
      const result = await operation;
      return result;
    } finally {
      this.hide();
    }
  }

  // Method to handle multiple async operations
  async performMultipleOperations(operations: Promise<any>[]): Promise<any[]> {
    this.show();
    try {
      const results = await Promise.all(operations);
      return results;
    } finally {
      this.hide();
    }
  }
}
