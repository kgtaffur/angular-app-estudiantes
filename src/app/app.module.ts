import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { AllComponent } from './components/all/all.component';
import { RadioButtonsComponent } from './components/radio-buttons/radio-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EstudiantesComponent,
    FooterComponent,
    AllComponent,
    RadioButtonsComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
