import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from "@angular/forms";
import { LoadingController, AlertController } from "@ionic/angular";
import { FirestoreService } from "src/app/servicios/datos/firestore.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {

  EditSongForm: any;
  song: any = {};
  idCancion: any;

  constructor(private lc: LoadingController, private fb: FormBuilder, private fs: FirestoreService, private router: Router, private ar: ActivatedRoute) {
    this.EditSongForm = fb.group({
      nombreAlbum: ['', Validators.required],
      nombreArtista: ['', Validators.required],
      descripCancion: ['', Validators.required],
      nombreCancion: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.idCancion = this.ar.snapshot.paramMap.get('id');
  }

  async editarCacion() {

    const loading = await this.lc.create();
    let song = {};

    song['nombreAlbum'] = this.EditSongForm.value.nombreAlbum;
    song['nombreArtista'] = this.EditSongForm.value.nombreArtista;
    song['descripCancion'] = this.EditSongForm.value.descripCancion;
    song['nombreCancion'] = this.EditSongForm.value.nombreCancion;

    this.fs.editarCacion(this.idCancion, song).then(
      () => {
        loading.dismiss().then(() => {
          this.router.navigateByUrl('/home');
        });

      }, error => {
        console.error(error);
      });
    return await loading.present();
  }

}
