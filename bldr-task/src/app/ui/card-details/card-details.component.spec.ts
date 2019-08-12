import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CardDetailsComponent } from './card-details.component';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

describe('CardDetailsComponent', () => {
  let component: CardDetailsComponent;
  let fixture: ComponentFixture<CardDetailsComponent>;
  const store = new Observable();
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Store, useValue: store}
      ],
      declarations: [ CardDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
