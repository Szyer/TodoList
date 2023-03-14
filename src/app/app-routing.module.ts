import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppComponent } from './app.component';


const appRoute : Route[] = [
  
  {path: '', redirectTo: '/', pathMatch: 'full'},
 
  {path: '**', component: NotfoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoute)
  ]
})
export class AppRoutingModule { }
