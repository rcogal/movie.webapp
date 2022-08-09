import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  template: ''
})
export abstract class BaseComponent implements OnDestroy {

  private readonly subscription: Subscription = new Subscription();

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // use to improve performance of the iterated list in the template
  public readonly track = (_index: number, item: any): any => item;

  protected registerSubscription(subscription: Subscription): void {
    this.subscription.add(subscription);
  }

}
