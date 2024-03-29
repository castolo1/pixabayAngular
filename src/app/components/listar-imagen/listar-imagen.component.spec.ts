import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarImagenComponent } from './listar-imagen.component';

describe('ListarImagenComponent', () => {
  let component: ListarImagenComponent;
  let fixture: ComponentFixture<ListarImagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarImagenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
