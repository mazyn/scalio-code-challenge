import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import Post from '../models/post.model';
import { LocalStorageService } from '../../shared/services/local-storage.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
})
export class PostDetailsComponent implements OnInit, AfterViewInit {
  @ViewChild('textAreaEl') textAreaEl: ElementRef<HTMLTextAreaElement> | undefined;

  public selectedPost: Post | undefined;

  constructor(private readonly localStorage: LocalStorageService, private readonly router: Router) {}

  ngOnInit(): void {
    this.selectedPost = this.localStorage.get<Post>('post');
    if (!this.selectedPost) {
      this.router.navigateByUrl('/').then();
      return;
    }
    document.title = `Mazyn's Posts — ${this.selectedPost.title}`;
  }

  ngAfterViewInit(): void {
    let width = window.innerWidth;
    if (width < 960 && this.textAreaEl) {
      this.textAreaEl.nativeElement.style.height = '1px';
      this.textAreaEl.nativeElement.style.height = `${25 + this.textAreaEl.nativeElement.scrollHeight}px`;
    }
  }
}
