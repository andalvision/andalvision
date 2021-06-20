import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  recaptchaVerifier:firebase.auth.RecaptchaVerifier;
constructor(private router: Router, private alertCtrl: AlertController) {}


ngOnInit() {
  this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
}
signIn(phoneNumber: number){
  const appVerifier = this.recaptchaVerifier;
  const phoneNumberString = "+" + phoneNumber;
  firebase.auth().signInWithPhoneNumber(phoneNumberString, appVerifier)
    .then( async (confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      let prompt = await this.alertCtrl.create({
      //title: 'Entrer le code de confirmation',
      inputs: [{ name: 'confirmationCode', placeholder: 'Code de confirmation' }],
      buttons: [
        { text: 'Cancel',
          handler: data => { console.log('Annulé'); }
        },
        { text: 'Send',
          handler: data => {
            confirmationResult.confirm(data.confirmationCode)
            .then(function (result) {
              // User signed in successfully.
              console.log(result.user);
              // ...
            }).catch(function (error) {
              // User couldn't sign in (bad verification code?)
              // ...
            });
          }
        }
      ]
    });
    await prompt.present();
  })
  .catch(function (error) {
    console.error("SMS non envoyé", error);
  });

}

}
