import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('App', () => {
    beforeEach(() => {
        TestBed.configureTestingModule(
            {
                imports: [
                    RouterTestingModule,
                    NgbModule.forRoot()
                ],
                declarations: [
                    AppComponent
                ]
            }
        );
    });

    it('should work', () => {
        let fixture = TestBed.createComponent(AppComponent);
        expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
    });
});