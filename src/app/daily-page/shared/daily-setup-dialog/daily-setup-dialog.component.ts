import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { DailyModel } from 'src/app/shared/models/daily-model';

@Component({
  selector: 'app-daily-setup-dialog',
  templateUrl: './daily-setup-dialog.component.html',
  styleUrls: ['./daily-setup-dialog.component.scss']
})
export class DailySetupDialogComponent {

  daily: DailyModel;

  constructor(public dialog: MatDialog) {
    this.daily = new DailyModel();
    this.daily.PlaySounds = false;
  }

  openDialog(): void {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(DailySetupDialogContent, {
      width: '250px',
      data: this.daily,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('This daily configuration was set:');
      console.log(result);
      // TODO: Emit event with the daily model that was configured.
    });
  }

}

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'daily-setup-dialog-content',
  templateUrl: 'daily-setup-dialog-content.html',
})
// tslint:disable-next-line: component-class-suffix
export class DailySetupDialogContent {

  constructor(
    public dialogRef: MatDialogRef<DailySetupDialogContent>,
    @Inject(MAT_DIALOG_DATA) public data: DailyModel) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
