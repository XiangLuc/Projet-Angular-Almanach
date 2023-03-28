import { Injectable } from '@angular/core';
import { Creature } from './Creature';
import { listeCreature } from './Mock-Creature';

@Injectable({
  providedIn: 'root'
})
export class CreatureService {

  constructor() { }

  getListeCreature(): Creature[] {
    return listeCreature;
  }

  getCreatureById(creatureId : number): Creature|undefined {
    return listeCreature.find(creature => creature.id == creatureId);
  }

  getCreatureRaceList() : string[] {
    return ['Slime'
    ,'Demon'
    ,'Divin'
  ];
  }

}
