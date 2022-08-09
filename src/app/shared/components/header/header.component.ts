import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject, } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent extends BaseComponent implements OnInit {
  @Output()
  public keywordChange = new EventEmitter();

  public searchKeyword: string;

  public modelSearchKeywordChanged = new Subject<string>();

  public ngOnInit(): void {
    this.registerSubscription(
      this.modelSearchKeywordChanged
        .pipe(
          debounceTime(700),
          distinctUntilChanged(),
        )
        .subscribe((keyword) => {
          this.keywordChange.emit(keyword);
        })
    );
  }

  public changeKeyword(keyword: string): void {
    this.modelSearchKeywordChanged.next(keyword);
  }
}
