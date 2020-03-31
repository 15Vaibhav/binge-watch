/**
 * core module
 */
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "movie-list",
    loadChildren: () => import("./core/core.module").then(m => m.CoreModule)
  },
  {
    path: '',
    redirectTo:'/movie-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
