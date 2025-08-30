import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    LoadingScreenComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    LoadingScreenComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
