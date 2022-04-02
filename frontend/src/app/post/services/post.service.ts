import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import Post from '../models/post.model';
import { Observable } from 'rxjs';

@Injectable()
export class PostService {
  private readonly baseUrl = `${environment.apiUrl}/posts`;

  constructor(private readonly httpService: HttpClient) {}

  public getAll(): Observable<Post[]> {
    return this.httpService.get<Post[]>(this.baseUrl);
  }

  public get(id: number): Observable<Post> {
    return this.httpService.get<Post>(`${this.baseUrl}/${id}`);
  }
}
