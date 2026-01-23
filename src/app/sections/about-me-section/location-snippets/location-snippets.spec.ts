import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationSnippets } from './location-snippets';

describe('LocationSnippets', () => {
  let component: LocationSnippets;
  let fixture: ComponentFixture<LocationSnippets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationSnippets]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationSnippets);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
