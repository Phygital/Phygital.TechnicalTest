import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SceneContainerComponent } from './scene-container/scene-container.component';

const routes: Routes = [
  {
    path: "home", component: SceneContainerComponent
  },
  {
    path: '**', redirectTo: 'home', pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
