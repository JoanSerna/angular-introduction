import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { BayComponent } from './bay/bay.component';
import { ListColorsComponent } from './list-colors/list-colors.component';

const routes: Routes = [
  {path:'hello',component:HelloComponent},
  {path:'bay',component:BayComponent},
  {path:'',component:ListColorsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
