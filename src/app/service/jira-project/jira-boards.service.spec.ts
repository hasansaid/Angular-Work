import { TestBed } from '@angular/core/testing';

import { JiraBoardsService } from './jira-boards.service';

describe('JiraBoardsService', () => {
  let service: JiraBoardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JiraBoardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
