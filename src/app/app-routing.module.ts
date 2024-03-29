import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'forgor-password',
    loadChildren: () => import('./forgor-password/forgor-password.module').then( m => m.ForgorPasswordPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'camaras',
    loadChildren: () => import('./camaras/camaras.module').then( m => m.CamarasPageModule)
  },
  {
    path: 'puertas',
    loadChildren: () => import('./puertas/puertas.module').then( m => m.PuertasPageModule)
  },
  {
    path: 'clima',
    loadChildren: () => import('./clima/clima.module').then( m => m.ClimaPageModule)
  },
  {
    path: 'deteccion',
    loadChildren: () => import('./deteccion/deteccion.module').then( m => m.DeteccionPageModule)
  },
  {
    path: 'ajustes',
    loadChildren: () => import('./ajustes/ajustes.module').then( m => m.AjustesPageModule)
  },  {
    path: 'graficas',
    loadChildren: () => import('./graficas/graficas.module').then( m => m.GraficasPageModule)
  },
  {
    path: 'iguanas',
    loadChildren: () => import('./iguanas/iguanas.module').then( m => m.IguanasPageModule)
  },
  {
    path: 'pajaros',
    loadChildren: () => import('./pajaros/pajaros.module').then( m => m.PajarosPageModule)
  },
  {
    path: 'coaties',
    loadChildren: () => import('./coaties/coaties.module').then( m => m.CoatiesPageModule)
  },
  {
    path: 'ardillas',
    loadChildren: () => import('./ardillas/ardillas.module').then( m => m.ArdillasPageModule)
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
