import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { BaseComponent } from './shared/components/base/base.component';
import { SearchKeywordService } from './shared/services/search-keyword.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent {
  public constructor(
    private readonly router: Router,
    private readonly searchKeywordSvc: SearchKeywordService,
  ) {
    super();

    this.registerSubscription(
      this.searchKeywordSvc.searchKeyword.subscribe((keyword) => {
        if (keyword) {
          this.router.navigate(['search', keyword]);
        }
      })
    );
  }

  public changeKeyword(keyword: string): void {
    this.searchKeywordSvc.searchKeyword.next(keyword);
  }
}
