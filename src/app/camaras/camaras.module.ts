import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamarasPageRoutingModule } from './camaras-routing.module';

import { CamarasPage } from './camaras.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    CamarasPageRoutingModule
  ],
  declarations: [CamarasPage]
})
export class CamarasPageModule {}
