import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ToDoComponent } from './to-do/to-do.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from 'src/shared/interceptors/jwt.interceptor';

const appRoutes: Routes = [

  {
    path: '', component: HomeComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'todo', component: ToDoComponent,
    canActivate: [
      AuthGuard,
    ]
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ToDoComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
  providers: [
  {
    provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
