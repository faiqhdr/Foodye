import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodPageComponent } from './food-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NotFoundComponent } from '../not-found/not-found.component';
import { Component } from '@angular/core';
import { TagsComponent } from '../tags/tags.component';

describe('FoodPageComponent', () => {
    let component: FoodPageComponent;
    let fixture: ComponentFixture<FoodPageComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
        declarations: [FoodPageComponent, NotFoundComponent, TagsComponent,],
        imports: [RouterTestingModule],
        }).compileComponents();
        fixture = TestBed.createComponent(FoodPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

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
