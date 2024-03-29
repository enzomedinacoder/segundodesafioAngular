import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { RoundedBlockDirective } from './directives/rounded-block.directive';


@NgModule({

  declarations: [
    AppComponent,
    StudentsComponent,
    NavbarComponent,
    HeaderComponent,
    RoundedBlockDirective,

],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }                                      
