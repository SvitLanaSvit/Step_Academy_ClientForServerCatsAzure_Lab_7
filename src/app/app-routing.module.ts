import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCatsComponent } from './list-cats/list-cats.component';
import { CreateCatComponent } from './create-cat/create-cat.component';
import { UpdateCatComponent } from './update-cat/update-cat.component';

const routes: Routes = [
  {path: "listCats", component: ListCatsComponent, title: "List of cats"},
  {path: "createCat", component: CreateCatComponent, title: "Create new cat"},
  {path: "editCat", component: UpdateCatComponent, title: "Edit cat"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
