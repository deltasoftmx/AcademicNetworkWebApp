import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
import { AcademicNetworkService } from 'src/app/services/academic-network/academic-network.service';
import { SessionService } from 'src/app/services/session/session.service';
import { Router } from '@angular/router';
import { AnimationsService } from 'src/app/services/animations/animations.service';

@Component({
  selector: 'app-create-new-group',
  templateUrl: './create-new-group.component.html',
  styleUrls: ['./create-new-group.component.css']
})
export class CreateNewGroupComponent implements OnInit {
  public groupSettingsFormGroup: FormGroup;
  public secondFormGroup: FormGroup;
  public groupCreatedFlag: boolean = false;
  public groupId: number;
  public createGroupForwardBtnDisabled: boolean = false;
  public createGroupforwardBtnLabel: string = 'Crear grupo';

  constructor(
    private _formBuilder: FormBuilder,
    private notifications: NotificationsService,
    private academicNetwork: AcademicNetworkService,
    private session: SessionService,
    private router: Router,
    private animations: AnimationsService
  ) { }

  ngOnInit(): void {
    if(!this.session.get_userdata()) {
      this.router.navigateByUrl('/login');
    }

    this.groupSettingsFormGroup = this._formBuilder.group({
      nameCtrl: ['', Validators.required],
      descriptionCtrl: ['', Validators.required],
      privacyCtrl: ['', Validators.required],
      tagCtrl: ['', Validators.required]
    });
  }

  applyHandler(event) {
    this.createGroupForwardBtnDisabled = true;
    if(!event.invalid) {
      //valid
      let permissions = [];
      for(let p of event.formData.permissions) {
        if(p.granted) {
          permissions.push(p.id);
        }
      }

      let tags = [];
      for(let t of event.formData.tagCtrl) {
        tags.push(t.tag);
      }

      let groupData = {
        group_name: event.formData.nameCtrl,
        description: event.formData.descriptionCtrl,
        visibility: event.formData.privacyCtrl,
        permissions: permissions,
        tags: tags
      };

      //If group was already created, just apply changes to the group.
      if(this.groupCreatedFlag) {
        //Call API to update groups.
        this.notifications.info(
          'Actualizando grupo',
          'Esta caractrística aún no está disponible.');
        return;
      }

      //If groups has not been created, create it.
      //Call API to create the group.
      this.animations.globalProgressBarActive = true;
      this.academicNetwork.createGroup(groupData)
        .subscribe(res => {
          this.animations.globalProgressBarActive = false;
          this.createGroupForwardBtnDisabled = false;
          if(res.code == 0) {
            this.groupCreatedFlag = true;
            this.groupId = res.data.group_id;
            this.notifications.success('Éxito', 'Tu grupo se ha crado correctamente.');
            this.createGroupforwardBtnLabel = 'Aplicar cambios';
          } else if(res.code == 1) {
            this.notifications.error('Error', 'Parece que tu usuario no existe. :/ Reporta este problema.');
          } else if(res.code == 3) {
            this.notifications.error('Error', 'Alguno de los permisos no existe. :/ Reporta este problema.');
          }
        });
    } else{
      //invalid
      this.notifications.error(
        'Los siguientes campos son requeridos',
        this.prettyFieldNames(event.invalidFields).join(', '));
    }
  }

  prettyFieldNames(invalidFields) {
    let fields = [];
    for(let field of invalidFields) {
      let prettyName = '';
      switch(field) {
        case 'nameCtrl':
          prettyName = 'nombre del grupo';
          break;
        case 'descriptionCtrl':
          prettyName = 'descripción del grupo'
          break;
        case 'privacyCtrl':
          prettyName = 'privacidad'
          break;
        case 'tagCtrl':
          prettyName = 'etiquetas'
          break;
      }
      fields.push(prettyName);
    }

    return fields;
  }
}
