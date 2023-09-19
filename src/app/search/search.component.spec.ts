import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';
import { BehaviorSubject } from 'rxjs';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let router: Router;

  const paramMap = new BehaviorSubject<Params>({ searchTerm: 'nasi' });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [RouterTestingModule, FormsModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { paramMap },
        },
      ],
    });

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not navigate when search term is empty', () => {
    // AAA method implementation
    spyOn(router, 'navigateByUrl');
    component.search();
    expect(router.navigateByUrl).not.toHaveBeenCalled();
  });

  it('should navigate when search term is not empty', () => {
    spyOn(router, 'navigateByUrl');
    component.searchTerm = 'ayam';
    component.search();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/search/ayam');
  });
});
