import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { AuthService } from "../../core/auth/auth.service";
import { PhotoService } from '../photo/photo.service';
import { Router } from '@angular/router';
//import { ConsoleReporter } from 'jasmine';

@Component({
    selector: 'ap-photo-form',
    templateUrl: './photo-form.component.html',
    styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

    photoForm: FormGroup;
    file: File;
    preview: string;

    constructor(
      private formBuilder: FormBuilder,
      private photoService: PhotoService,
      private router: Router
    ) { }

    ngOnInit(): void { 

        this.photoForm = this.formBuilder.group({
          file: ['', Validators.required],
          description: ['', Validators.maxLength(300)],
          allowComments: [true]
        });
    }

    upload() {
      //console.log('photo-form.upload');
      // const dados = this.photoForm.getRawValue();
      // console.log(dados);
      // console.log('rota: '+ this.router.navigate(['']));

      const description = this.photoForm.get('description').value;
      const allowComments = this.photoForm.get('allowComments').value;
      //console.log(description);
      //console.log(allowComments);
      //console.log(this.file);

      this.photoService
        .upload(description, allowComments, this.file)
        .subscribe(() => this.router.navigate(['']));
      
    }

    handleFile(file: File) {
      console.log('----- handleFile -----');
      this.file = file;
      const reader = new FileReader();

      reader.onload = (event: any) => this.preview = event.target.result;
      reader.readAsDataURL(file);
    }
}
