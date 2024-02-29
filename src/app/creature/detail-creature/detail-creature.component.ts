import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Creature } from '../Creature';
import { CreatureService } from '../creature.service';

@Component({
  selector: 'app-detail-creature',
  templateUrl: './detail-creature.component.html',
  styleUrls: ['./detail-creature.component.css']
})
export class DetailCreatureComponent implements OnInit {

  creature : Creature | undefined;

  constructor(private route: ActivatedRoute,private router : Router, private serviceCreature : CreatureService) {

  }

  ngOnInit(): void {
    const creatureId : string|null = this.route.snapshot.paramMap.get('id');
    if(creatureId) {
      this.creature = this.serviceCreature.getCreatureById(+creatureId);
    }
  }
  
  goToCreatureListe() {
    this.router.navigate(['/creatures']);
  }

  goToEditCreature(creature : Creature) {
    this.router.navigate(['edit/creature',creature.id])
  }
  
}