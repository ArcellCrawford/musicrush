import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.page.html',
  styleUrls: ['./playlists.page.scss'],
})
export class PlaylistsPage implements OnInit {
  
carousel: any = document.querySelector('.carousel') as HTMLElement;
cellCount:number = 9;
selectedIndex: number = 0;
angle: number = 0;
images= ['https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Chance_the_Rapper_-_Coloring_Book.png/220px-Chance_the_Rapper_-_Coloring_Book.png','.jpg','.jpg']
  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
 


 async rotateCarousel() {
  console.log(this.carousel);
  this.angle = this.selectedIndex / this.cellCount * -360;
  this.carousel.style.transform = 'translateZ(-288px) rotateY(' + this.angle + 'deg)';
}


prevButton(){
  this.selectedIndex--;
  this.rotateCarousel();
}

nextButton(){
    this.selectedIndex++;
    this.rotateCarousel();
}

}
