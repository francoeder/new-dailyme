import { DailyStatus } from '../enums/daily-status.enum';
import { ParticipantModel } from './participant-model';

export class DailyModel {
    MinutesPerParticipant: number;
    PlaySounds: boolean;
    StopWatch: any;
    Status: DailyStatus;
    Participants: ParticipantModel[];
    CurrentParticipant: ParticipantModel;
}
