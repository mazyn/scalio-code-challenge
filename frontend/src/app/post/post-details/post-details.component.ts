import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Post from '../models/post.model';
import { LocalStorageService } from '../../shared/services/local-storage.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
})
export class PostDetailsComponent implements OnInit {
  public selectedPost: Post | undefined;

  constructor(private readonly localStorage: LocalStorageService, private readonly router: Router) {}

  ngOnInit(): void {
    this.selectedPost = this.localStorage.get<Post>('post');
    if (!this.selectedPost) this.router.navigateByUrl('/').then();
  }
}
