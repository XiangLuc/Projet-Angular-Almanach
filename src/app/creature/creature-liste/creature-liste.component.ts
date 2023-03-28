import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Creature } from '../Creature';
import { CreatureService } from '../creature.service';

@Component({
  selector: 'app-creature-liste',
  templateUrl: './creature-liste.component.html',
  styleUrls: ['./creature-liste.component.css']

})
export class CreatureListeComponent implements OnInit {

  listeCreature : Creature[];

  constructor(private router : Router,private creatureService : CreatureService) {

  }

  ngOnInit(): void {
    this.listeCreature = this.creatureService.getListeCreature();
  }

  goToDetailsCreature(creature : Creature) {
    this.router.navigate(['/creature/',creature.id]);
  }

}