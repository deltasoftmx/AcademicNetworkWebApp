import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { GroupPermission } from '../../classes/academic-network.model';

@Component({
  selector: 'app-group-settings',
  templateUrl: './group-settings.component.html',
  styleUrls: ['./group-settings.component.css']
})
export class GroupSettingsComponent implements OnInit {
  @Input('formGroup') groupSettingsFormGroup: FormGroup;
  @Input() applyBtnLabel: string = 'Aplicar';
  @Input() permissions: GroupPermission[];
  @Input() btnDisabled: boolean = false;
  @Output() apply: EventEmitter<any> = new EventEmitter<any>();
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  public groupTagList: GroupTag[] = [];

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    if(!this.groupSettingsFormGroup) {
      this.groupSettingsFormGroup = this._formBuilder.group({
        nameCtrl: ['', Validators.required],
        descriptionCtrl: ['', Validators.required],
        privacyCtrl: ['', Validators.required],
        tagCtrl: ['', Validators.required]
      });
    }

    this.groupSettingsFormGroup.get('tagCtrl').setValue([]);

    this.permissions = [
      {
        id: 1,
        name: "Permitir publicaciones",
        codename: "allow_posts",
        granted: 0
      },
      {
        id: 2,
        name: "Permitir comentarios",
        codename: "allow_comments",
        granted: 0
      }
    ];
  }

  submitHandler() {
    let formData = this.groupSettingsFormGroup.value;
    formData.permissions = this.permissions;
    let invalidFields = [];

    if(this.groupSettingsFormGroup.invalid) {
      for(let ctrl in this.groupSettingsFormGroup.controls) {
        if(this.groupSettingsFormGroup.controls[ctrl].invalid) {
          invalidFields.push(ctrl);
        }
      }
    }

    let data = {
      invalid: this.groupSettingsFormGroup.invalid,
      invalidFields: invalidFields,
      formData: formData
    };

    this.apply.emit(data);
  }

  addTag(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.groupTagList.push({tag: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.updateTagCtrl();
  }

  removeTag(tag: GroupTag): void {
    const index = this.groupTagList.indexOf(tag);

    if (index >= 0) {
      this.groupTagList.splice(index, 1);
    }

    this.updateTagCtrl();
  }

  updateTagCtrl() {
    let tagCtrl = this.groupSettingsFormGroup.get('tagCtrl')
    tagCtrl.setValue(this.groupTagList)
  }
}

export class GroupTag {
  tag: string;
}
