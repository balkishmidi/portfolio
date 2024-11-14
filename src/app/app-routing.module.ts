import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectdetailsComponent } from './components/projectdetails/projectdetails.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route to the homepage
  { path: 'projects/:id', component: ProjectdetailsComponent }, // Route for project details with dynamic 'id'
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
