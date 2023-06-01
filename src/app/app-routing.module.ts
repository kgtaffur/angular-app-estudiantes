import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './components/all/all.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';

const routes: Routes = [
  { path: '', redirectTo: 'estadiantes', pathMatch: 'full' },
  { path: 'estudiantes', component: EstudiantesComponent },
  { path: 'detalles', component: AllComponent },
  { path: '**', redirectTo: 'estudiantes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
