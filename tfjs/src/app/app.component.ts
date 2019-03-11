import { Component, AfterViewInit } from '@angular/core';
import { MlService } from './ml5/ml.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'TensorFlow Angular';
  private mlservice: MlService;
  constructor(private mls: MlService) {
    this.mlservice = mls;
    console.log('Initialisation application TensorFlow JS');
  }
  ngAfterViewInit() {
    this.mlservice.run();
  }
}


