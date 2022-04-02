import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { PostService } from '../services/post.service';
import { LocalStorageService } from '../../shared/services/local-storage.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-get-post',
  templateUrl: './get-post.component.html',
  styleUrls: ['./get-post.component.css'],
})
export class GetPostComponent {
  @ViewChild('idInput') idInput: ElementRef<HTMLInputElement> | undefined;

  public headingText = 'You are only limited by';
  public id: number | undefined;

  constructor(
    private readonly postService: PostService,
    private readonly localStorage: LocalStorageService,
    private readonly router: Router,
    private readonly toastr: ToastrService,
  ) {}

  public onSubmit() {
    if (!this.id) return;
    this.postService
      .get(this.id)
      .pipe(take(1))
      .subscribe({
        next: res => {
          if (this.localStorage.set('post', res)) this.router.navigate(['post-details']).then();
          else {
            this.toastr.error('Something went wrong when redirecting you, please try again.', 'Oops!');
          }
        },
        error: ({ error: err }: HttpErrorResponse) => {
          this.toastr.error(err.message, 'Oops!');
        },
      });
  }

  public onButtonHoverEnter() {
    this.idInput?.nativeElement.classList.add('input-hover');
  }

  public onButtonHoverLeave() {
    this.idInput?.nativeElement.classList.remove('input-hover');
  }
}
