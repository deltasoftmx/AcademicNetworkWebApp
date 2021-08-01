import { Component, Input, Output, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { ElementCard } from '../../classes/student.model';
import { DomSanitizer } from '@angular/platform-browser';
import { CropperComponent } from 'angular-cropperjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-group-image-update',
  templateUrl: './group-image-update.component.html',
  styleUrls: ['./group-image-update.component.css']
})
export class GroupImageUpdateComponent implements OnInit {
  @ViewChild('angularCropper') angularCropper: CropperComponent;
  @Input() cropImageIndication: string = 'Recorta tu imagen.';
  @Input() applyBtnDisabled: boolean = false;
  @Input() applyBtnLabel: string = 'Aplicar';
  @Input('formGroup') imageFormGroup: FormGroup;
  @Output() apply: EventEmitter<any> = new EventEmitter<any>();
  public groupImageSelected: string;
  public cropperjsOptions = {
    aspectRatio: 1 / 1
  };
  public groupCard: ElementCard = {
    icon: '/assets/people-black-18dp.svg',
    text: [],
    internalLink: null,
    externalLink: null
  };

  constructor(
    private sanitizer: DomSanitizer,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    if(!this.imageFormGroup) {
      this.imageFormGroup = this._formBuilder.group({
        imageCtrl: ['', Validators.required]
      })
    }
  }

  imageChangeHandler(event) {
    let image = event.target.files[0];
    if(image) {
      let objectURL = URL.createObjectURL(image);
      let trustedUrl = this.sanitizer.bypassSecurityTrustUrl(
        objectURL) as string;
      this.groupImageSelected = trustedUrl;
    } else {
      this.groupCard.icon = '/assets/people-black-18dp.svg'
      this.groupImageSelected = null;
    }
  }

  selectImageHandler(imageInput) {
    imageInput.click();
  }

  applyHandler() {
    this.angularCropper
      .cropper.getCroppedCanvas().toBlob(image => {
        let objectURL = URL.createObjectURL(image);
        let trustedUrl = this.sanitizer.bypassSecurityTrustUrl(
          objectURL) as string;
        this.groupCard.icon = trustedUrl;
        this.apply.emit({
          image: image,
          invalid: this.imageFormGroup.invalid
        });
      }, "image/jpeg", 0.95);
  }
}
