import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BukuAlamatComponent } from './buku-alamat/buku-alamat.component';


const routes: Routes = [{
  path:'login',
  component:LoginComponent
},
{
  path:'login',
  loadChildren:'./login'
},
{
path:'',
redirectTo:'login',
pathMatch:'full'
},
{
  path:'buku-alamat',
  component:BukuAlamatComponent
},
{
  path:'buku-alamat',
  loadChildren:'./buku-alamat'
},
{
path:'',
redirectTo:'buku-alamat',
pathMatch:'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
