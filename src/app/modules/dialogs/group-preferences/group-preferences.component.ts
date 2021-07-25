import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GroupPreferences } from '../../classes/dialogs.model';

@Component({
  selector: 'app-group-preferences',
  templateUrl: './group-preferences.component.html',
  styleUrls: ['./group-preferences.component.css']
})
export class GroupPreferencesComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<GroupPreferencesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: GroupPreferences
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
