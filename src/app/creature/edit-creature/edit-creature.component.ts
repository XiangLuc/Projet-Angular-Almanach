import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Creature } from '../Creature';
import { CreatureService } from '../creature.service';

@Component({
  selector: 'app-edit-creature',
  template: `
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <h2 class="text-center text-white">Modifier : {{ creature?.nom | uppercase}}</h2>
          <p *ngIf="creature" class="text-center">
            <img [src]="creature.image" alt="{{ creature.nom }}">
          </p>
          <app-form-creature *ngIf="creature" [creature]="creature"></app-form-creature>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class EditCreatureComponent implements OnInit {

  creature : Creature | undefined;

  constructor(private route : ActivatedRoute, private creatureService :CreatureService) {

  }

  ngOnInit(): void {
    const creatureId : string | null = this.route.snapshot.paramMap.get('id');
    if(creatureId) {
      this.creature = this.creatureService.getCreatureById(+creatureId);
    }else {
      this.creature = undefined;
    }
  }
}