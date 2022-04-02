import { Component, ElementRef, ViewChild } from '@angular/core';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { LocalStorageService } from '../../shared/services/local-storage.service';

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
            // TODO: Throw error
          }
        },
        error: console.error,
      });
  }

  public onButtonHoverEnter() {
    this.idInput?.nativeElement.classList.add('input-hover');
  }

  public onButtonHoverLeave() {
    this.idInput?.nativeElement.classList.remove('input-hover');
  }
}