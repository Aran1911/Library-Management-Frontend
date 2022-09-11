import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ActivitesComponent } from './components/activites/activites.component';
import { AdminComponent } from './components/admin/admin.component';
import { DonateComponent } from './components/donate/donate.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { ViewAllBooksComponent } from './components/view-all-books/view-all-books.component';
import { AddNewBookComponent } from './components/add-new-book/add-new-book.component';
import { UpdateBookComponent } from './components/update-book/update-book.component';
import { DeleteBookComponent } from './components/delete-book/delete-book.component';
import { GallaryComponent } from './components/gallary/gallary.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';


const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'activites', component: ActivitesComponent },
      { path: 'gallary', component: GallaryComponent },
      { path: 'donate', component: DonateComponent },
      { path: 'about', component: AboutUsComponent },
      {
        path: 'admin', component: AdminComponent, children: [
          { path: 'viewAll', component: ViewAllBooksComponent },
          { path: 'addNew', component: AddNewBookComponent },
          { path: 'update/:id', component: UpdateBookComponent },
          { path: 'delete/:id', component: DeleteBookComponent },
        ]
      },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  { path:'updateUser/:email', component: UpdateUserComponent},
  { path: 'newUser', component: NewUserComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
