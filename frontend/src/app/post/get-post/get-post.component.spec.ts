import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxMaskModule } from 'ngx-mask';
import { ToastrModule } from 'ngx-toastr';

import { GetPostComponent } from './get-post.component';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';
import { PostService } from '../services/post.service';

describe('GetPostComponent', () => {
  let component: GetPostComponent;
  let fixture: ComponentFixture<GetPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetPostComponent],
      imports: [
        CommonModule,
        FlexLayoutModule,
        FormsModule,
        HttpClientModule,
        NgxMaskModule.forRoot(),
        SharedComponentsModule,
        RouterTestingModule,
        ToastrModule.forRoot(),
      ],
      providers: [PostService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render heading correctly', () => {
    const expectedText = 'YOU ARE ONLY LIMITED BY YOUR ID.';
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.heading-title')?.textContent).toContain(expectedText);
  });
});
