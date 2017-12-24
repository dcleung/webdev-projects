import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PLAYERS } from '../default-players';


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players = PLAYERS

  selectedPlayer: Player;

  onSelect(player: Player): void {
    this.selectedPlayer = player;
  }
  
  player: Player = {
    id: 1,
    name: 'LeVeon Bell',
    position: 'RB'
  }

  constructor() { }

  ngOnInit() {
  }

}
