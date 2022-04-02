import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GetPostComponent } from './post/get-post/get-post.component';

const routes: Routes = [
  {
    path: '',
    component: GetPostComponent,
  },
  {
    path: 'post-details',
    loadChildren: () => import('./post/post-details/post-details.module').then((m) => m.PostDetailsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
