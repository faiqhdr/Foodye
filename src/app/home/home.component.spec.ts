import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SearchComponent } from '../search/search.component';
import { TagsComponent } from '../tags/tags.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { Component } from '@angular/core';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        NotFoundComponent,
        TagsComponent,
        SearchComponent
      ],
      imports: [RouterTestingModule],
    }).compileComponents();
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'app-search', // Corrected selector here
  template: ''
})
export class MockNotSearchComponent {}

@Component({
  selector: 'app-not-found', // Corrected selector here
  template: ''
})
export class MockNotFoundComponent {}

@Component({
  selector: 'app-tags', // Corrected selector here
  template: ''
})
export class MockTagsComponent {}
