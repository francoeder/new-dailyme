import { Participant } from './../shared/models/participant';
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.scss']
})
export class ParticipantListComponent implements OnInit {

  public participants: Participant[] = [];

  constructor() { }

  ngOnInit() {
    const participant1 = new Participant();
    participant1.Name = 'Batman';
    participant1.Active = true;
    participant1.OrderIndex = 0;

    const participant2 = new Participant();
    participant2.Name = 'SuperMan';
    participant2.Active = false;
    participant2.OrderIndex = 1;

    const participant3 = new Participant();
    participant3.Name = 'Mulher Maravilha';
    participant3.Active = true;
    participant3.OrderIndex = 2;


    this.participants.push(participant1);
    this.participants.push(participant2);
    this.participants.push(participant3);
  }

  public onDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.participants, event.previousIndex, event.currentIndex);
  }

}
