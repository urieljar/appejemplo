import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'account',
        loadChildren: ()=> import('../avatar/avatar.module').then (m => m.AvatarPageModule)
      },
      {
        path: 'contact',
        loadChildren: ()=> import('../list-sliding/list-sliding.module').then (m => m.ListSlidingPageModule)
      },
      {
        path: 'settings',
        loadChildren: ()=> import('../infinite/infinite.module').then (m => m.InfinitePageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
