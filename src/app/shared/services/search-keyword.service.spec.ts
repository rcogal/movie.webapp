import { TestBed } from '@angular/core/testing';

import { SearchKeywordService } from './search-keyword.service';

describe('SearchKeywordService', () => {
  let service: SearchKeywordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchKeywordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
