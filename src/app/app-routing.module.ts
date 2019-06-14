import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './home/shell.component';
import { PageNotFoundComponent } from './page-not-found.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: ShellComponent,
        children: [
          {
            path: 'products',
            loadChildren: './products/product.module#ProductModule'
          },
          { path: '', redirectTo: 'products/0', pathMatch: 'full' }
        ]
      },
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
