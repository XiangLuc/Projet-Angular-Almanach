import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatureService } from './creature.service';
import { RouterModule, Routes } from '@angular/router';
import { CreatureListeComponent } from './creature-liste/creature-liste.component';
import { BorderCardDirective } from './border-card.directive';
import { DetailCreatureComponent } from './detail-creature/detail-creature.component';
import { CreatureTypePipe } from './creature-type-pipe.pipe';
import { FormCreatureComponent } from './form-creature/form-creature.component';
import { FormsModule } from '@angular/forms';
import { EditCreatureComponent } from './edit-creature/edit-creature.component';

const creatureRoutes : Routes = [
  { path : 'edit/creature/:id' , component : EditCreatureComponent},
  { path : 'creatures', component : CreatureListeComponent  },
  { path : 'creature/:id', component : DetailCreatureComponent}
];

@NgModule({
  declarations: [
    CreatureListeComponent,
    DetailCreatureComponent,
    BorderCardDirective,
    CreatureTypePipe,
    FormCreatureComponent,
    EditCreatureComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(creatureRoutes)
  ],
  providers : [CreatureService]
})
export class CreatureModule { }