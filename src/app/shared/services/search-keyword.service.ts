import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchKeywordService {
  public searchKeyword = new Subject<string>();
}
