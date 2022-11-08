import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  mdl_user: string = '';
  mdl_password: string = '';

  
// // user = localStorage.setItem('user', JSON.stringify('user'));
// pass = localStorage.setItem('mdl_pass', JSON.stringify('pass'));
// dato: string;

constructor(private router: Router, 
  private alertController: AlertController,
  private db: DbService) { }

  ngOnInit() {
  }

  ingresar() {
    let validador = this.db.validarCredenciales(this.mdl_user, this.mdl_password);
    if (!validador) {
      this.mostrarMensaje();
    }
  }

async mostrarMensaje() {
  const alert = await this.alertController.create({
    header: 'Error',
    message: 'Usuario o Password Incorrectas',
    buttons: ['Entiendo'],
  });

  await alert.present();
}

}

