import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaketodohomeComponent } from './maketodohome/maketodohome.component';

const routes: Routes = [
  {path:'maketodohome', component: MaketodohomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MakeTodoRoutingModule { 

}
