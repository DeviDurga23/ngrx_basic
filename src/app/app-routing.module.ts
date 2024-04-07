import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { NavComponent } from './nav/nav.component';
import { ProductComponent } from './product/product.component';
import { UsersComponent } from './users/users.component';
import { GalleryComponentComponent } from './Gallery/gallery-component/gallery-component.component';

const routes: Routes = [
  {path:'counter',component:CounterComponent},
  {path:'product',component:ProductComponent},
  {path:'users',component:UsersComponent},
  // {path:'photos',component:GalleryComponentComponent},
  {path:'',redirectTo:'/counter',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
