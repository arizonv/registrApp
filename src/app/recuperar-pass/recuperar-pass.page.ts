import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar-pass',
  templateUrl: './recuperar-pass.page.html',
  styleUrls: ['./recuperar-pass.page.scss'],
})
export class RecuperarPassPage implements OnInit {
  [x: string]: any;

  constructor(
    private router: Router,
    private alertController : AlertController
  ) { 
    
  }

  newPassword: string = '';
  confirmacionPass: string = '';
  
  user = localStorage.getItem('user');
  password = localStorage.getItem("password");

  ngOnInit() {
  }


  cambioPass(){
    if( this.newPassword == this.confirmacionPass  ){

      localStorage.setItem('password', this.newPassword );

      this.router.navigate(['login-reset']);

    } else {
      this.Mensaje();
    
  }
}

async Mensaje() {
  const alert = await this.alertController.create({
    header: 'Error',
    message: 'Las contraseñas no coinciden',
    buttons: ['Entiendo'],
  });

  await alert.present();
}

  

}
