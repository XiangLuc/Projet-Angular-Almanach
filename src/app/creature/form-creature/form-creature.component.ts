import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Creature } from '../Creature';
import { CreatureService } from '../creature.service';

@Component({
  selector: 'app-form-creature',
  templateUrl: './form-creature.component.html',
  styleUrls: ['./form-creature.component.css']
})
export class FormCreatureComponent implements OnInit {

  @Input() creature : Creature;
  race : string[];

  constructor(private router : Router,private creatureService : CreatureService) {

  }

  ngOnInit(): void {
    this.race = this.creatureService.getCreatureRaceList();
  }

  verifRace(race : string): boolean {
    return this.creature.race.includes(race);
  }

  selectRace($event : Event, races: string) {
    const isVerif : boolean  = ($event.target as HTMLInputElement).checked;
    if(isVerif) {
      this.creature.race.push(races);
    } else {
      const index = this.creature.race.indexOf(races);
      this.creature.race.splice(index, 1); 
    }
  }

  onSubmit() {
    console.log('Le formulaire à bien été envoyé');
    this.router.navigate(['creature/',this.creature.id]);
  }

  isRaceValid(races : string) : boolean {
    if(this.creature.race.length == 1 && this.verifRace(races)) { // au moins une race 
      return false;
    }
    return true;
  }


}