import { Component, NgModule, NgZone } from '@angular/core';
// import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import * as Chart from 'chart.js';
import { filter, timeInterval } from 'rxjs/operators';
import { IonLabel, Platform } from '@ionic/angular';
// import { DeviceMotion, DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions } from '@ionic-native/device-motion/ngx';
import { setPreviousOrParentTNode } from '@angular/core/src/render3/state';
// import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationResponse, BackgroundGeolocationEvents } from '@ionic-native/background-geolocation/ngx';
// import { Pedometer, IPedometerData } from '@ionic-native/pedometer/ngx';
// CanvasJS from 'canvasjs';

declare var MusicKit: any;
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
@NgModule({})
export class Tab3Page {
  item;
  music;
  subscription: any;
  public watch: any;
  public totalSteps: number = 0;
  displaySteps: number = 0;

  constructor(public zone: NgZone, public platform: Platform,  ) { }

  async ngOnInit() {

    await this.platform.ready();
    await setInterval(() => this.totalSteps += 1, 1500);
  
    
     

    this.music = MusicKit.getInstance();
    // console.log('chart', Chart);
    var canvas = <HTMLCanvasElement>document.getElementById("myChart");
    var ctx = canvas.getContext("2d");
    var chart = new Chart(ctx,
      {
        type: 'bar',
        data:
        {
          labels: ['', '', '', '', '', '', ''],
          datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(22,164,209)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
          }],
        },
        options: {
          scales: {
            xAxes: [{
              gridLines: {
                color: "rgba(0, 0, 0, 0)", // grid color white 
              }
            }],
            yAxes: [{
              gridLines: {
                color: "rgba(0, 0, 0, 0)", // grid color white 
              }
            }]
          }
        }
      }
    );

    // {
    // // The type of chart we want to create
    // type: 'line',

    // // The data for our dataset
    // data: 
    // },

    // // Configuration options go here
    // options: {}
    // });

  }
  

  // returnspeed() {

  //   this.pedometer.startPedometerUpdates()
  //   .subscribe((data: IPedometerData) =>{
  //     this.steps = data.numberOfSteps;
  //    this.distancepertime = (this.steps*2.3)/3;

  //   }

    // )}
    // timeinterval()  {
    //   var int =
    //   setInterval(this.returnspeed, 3000);
  
    // }


  // loopFunction(){
  //   this.totalSteps += 1;
  //   console.log(this.totalSteps);
  // }


  getspeed() {



    // console.log('Function called');
    // this.deviceMotion.getCurrentAcceleration().then(
    //   (acceleration: DeviceMotionAccelerationData) => console.log(acceleration),
    //   (error: any) => console.log(error)
    // );

    // var subscription = this.deviceMotion.watchAcceleration().subscribe((acceleration: DeviceMotionAccelerationData) => {
    //   console.log(acceleration);
    // });

    // let config = {
    //   desiredAccuracy: 0,
    //   stationaryRadius: 20,
    //   distanceFilter: 10,
    //   debug: true,
    //   interval: 2000
    // };

    // this.backgroundGeolocation.configure(config).then((location) => {
    //   console.log(location);
    //   this.zone.run(() => {
    //     // console.log(location.speed);
    //     //this.speed = location.speed;
    //   });

    // }, (err) => {

    //   console.log(err);

    // });

  }
  // locate() {
  //   this.geolocation.getCurrentPosition().then((resp) => {
  //     // resp.coords.latitude
  //     // resp.coords.longitude
  //     console.log(resp.coords.speed);
  //   }).catch((error) => {
  //     console.log('Error getting location', error);
  //   });

  //   let watch = this.geolocation.watchPosition();
  //   watch.subscribe((data) => {
  //     // data can be a set of coordinates, or an error (if an error occurred).
  //     // data.coords.latitude
  //     // data.coords.longitude
  //   });
  // }
  // Get the device current acceleration

  pause() {
    console.log('Paused')
    this.music.pause();
  }

  next() {
    console.log('Next')
    this.music.skipToNextItem();
  }
  previous() {
    console.log('previous')
    this.music.skipToPreviousItem();
  }

  play_song(item) {
    console.log('playing new song')
    const img = item.attributes.artwork.url;
    var temp1 = img.replace('{w}', '3000');
    var temp2 = temp1 = temp1.replace('{h}', '3000');
    item.attributes.artwork.url = temp2;
    this.item = item;
    console.log(item)
    this.music.setQueue({ url: this.item.attributes.url }).then((queue) => {
      this.music.play()
    })
  }

  play() {
    console.log('playing')
    this.music.play();

  }


  // // Stop watch
  // subscription.unsubscribe();
  // speed() {

  //   this.deviceMotion.getCurrentAcceleration().then(
  //     (acceleration: DeviceMotionAccelerationData) => console.log(acceleration),
  //     (error: any) => console.log(error)
  //   );
  // }
  // watchspeed() {
  //   // Watch device acceleration
  //   var options: DeviceMotionAccelerometerOptions = {
  //     frequency: 100
  //   };

    // var subscription = this.deviceMotion.watchAcceleration().subscribe((acceleration: DeviceMotionAccelerationData) => {
    //   console.log(acceleration);
    //   this.data = acceleration;
    // });

    // var lastTimestamp;
    // var speedX = 0, speedY = 0, speedZ = 0;
    // window.addEventListener('devicemotion', (event) => {
    //   var currentTime = new Date().getTime();
    //   if (lastTimestamp === undefined) {
    //     lastTimestamp = new Date().getTime();
    //     return; //ignore first call, we need a reference time
    //   }
      //  m/s² / 1000 * (miliseconds - miliseconds)/1000 /3600 => km/h (if I didn't made a mistake)
    //   speedX += event.acceleration.x / 1000 * ((currentTime - lastTimestamp) / 1000) / 3600;
    //   speedY += event.acceleration.y / 1000 * ((currentTime - lastTimestamp) / 1000) / 3600;
    //   speedZ += event.acceleration.z / 1000 * ((currentTime - lastTimestamp) / 1000) / 3600;
    //   console.log(speedX);
    //   console.log(speedY);
    //   console.log(speedZ);
    //   this.totalspeed = Math.sqrt(Math.pow(speedX, 2) + Math.pow(speedY, 2) + Math.pow(speedZ, 2));
    //   //... same for Y and Z
    //   lastTimestamp = currentTime;


    // }, false);






    // console.log(speedX);
    // console.log(speedY);
    // console.log(speedZ);
  }

// }