import { Injectable } from '@angular/core';
declare var ml5: any;
/**
 * Ce service classifie une image en utilisant le modèle pré-entraîné MobileNet
 */
@Injectable({
  providedIn: 'root'
})
export class MlService {

  // Déclaration d'un classifier
  classifier: any;

  constructor() {
      console.log('Initialisation du service Machine Learning', ml5);
   }
   run() {
    this.loadClassifier().then((result) => {
      this.classifier = result;
      const image = this.getImage('bird');
      this.predict(this.classifier, image);
    });
   }
   // Retourne une image
   getImage(id: string): any {
     const image = document.getElementById(id);
     console.log('Chargement de Image : ', image);
     return image;
   }
   // Charge un classifier MobileNet
   loadClassifier(): Promise<any> {
    return new Promise((resolve, reject) => {
      const classifier = ml5.imageClassifier('MobileNet', () => {
        console.log('Chargement du modèle : ', classifier);
        resolve(classifier);
      });
    });
  }
  // Méthode de prédiction
  predict(classifier: any, image: any) {
    classifier.predict(image, (err, result) =>  {
      console.log('Résultat de la prédiction : ', result[0].className);
    });
  }
}
