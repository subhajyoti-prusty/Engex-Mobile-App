import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';

@NgModule({
  declarations: [
    LoadingScreenComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    LoadingScreenComponent
  ]
})
export class SharedModule { }
