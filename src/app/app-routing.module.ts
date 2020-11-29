import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';

import { GenXerComponent } from './gen-xer/gen-xer.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'gen-xer', pathMatch: 'full'    
  },

  {
    path: 'gen-xer', component: GenXerComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
