import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Player } from './player';
import { PLAYERS } from './default-players';
import { MessageService } from './message.service';

@Injectable()
export class PlayerService {

  constructor(private messageService: MessageService) { }

  getPlayers(): Observable<Player[]> {
      // TODO: Send the message after getting players
      this.messageService.add('PlayerService: fetched players');
      return of(PLAYERS);
  }


}
