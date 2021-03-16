import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RTOAppComponent } from './rto-app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        RTOAppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(RTOAppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'myangularapp'`, () => {
    const fixture = TestBed.createComponent(RTOAppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('myangularapp');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(RTOAppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('myangularapp app is running!');
  });
});
