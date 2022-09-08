import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './components/home/home.component';
import { GalaryComponent } from './components/galary/galary.component';
import { DonateComponent } from './components/donate/donate.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ActivitesComponent } from './components/activites/activites.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ViewAllBooksComponent } from './components/view-all-books/view-all-books.component';
import { HttpClientModule } from '@angular/common/http';
import { AddNewBookComponent } from './components/add-new-book/add-new-book.component';
import { UpdateBookComponent } from './components/update-book/update-book.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxAvatarModule } from 'igniteui-angular';
import { MatTableModule } from '@angular/material/table';
import { DeleteBookComponent } from './components/delete-book/delete-book.component';
import { UserComponent } from './User/user/user.component';


//I keep the new line
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalaryComponent,
    DonateComponent,
    AboutUsComponent,
    ActivitesComponent,
    AdminComponent,
    LoginComponent,
    NotFoundComponent,
    ForgotPasswordComponent,
    NewUserComponent,
    ViewAllBooksComponent,
    AddNewBookComponent,
    UpdateBookComponent,
    DeleteBookComponent,
    UserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatToolbarModule,
    IgxAvatarModule,
    MatTableModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
