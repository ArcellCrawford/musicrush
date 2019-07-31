import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Platform } from '@ionic/angular';
import { async } from 'q';

//All properties of server
declare var MusicKit: any;
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page implements OnInit {
  items = [];
  music;
  item;
  constructor(public http: HttpClient, private platform: Platform) { }

  async ngOnInit() {
    await this.platform.ready();
    this.music = MusicKit.getInstance();
  }

  onChange(e) {
    const value = e.target.value
    console.log(value)
    this.music.api.search(value, { limit: 5, types: 'albums' })

      .then((data: any) => {
        console.log(data);

        this.items = data.albums.data //+ data.albums.data[""0""].attributes.artistName;
      })
      .catch((err) => { console.log(err) })
  }

  next(){
    console.log('Next')
    this.music.skipToNextItem();
  }
  previous(){
    console.log('previous')
    this.music.skipToPreviousItem();
  }

  play_song(item) {
    console.log('playing new song')
    const img = item.attributes.artwork.url;
    var temp1 = img.replace('{w}','3000');
    var temp2 = temp1 =temp1.replace('{h}','3000');
    item.attributes.artwork.url = temp2;
    this.item = item;
    console.log(item)
    this.music.setQueue({ url:this.item.attributes.url }).then((queue) => {
      this.music.play()
    })
  }
   pause(){
    console.log('Paused')
    this.music.pause();
    
  }
   play(){
     console.log('playing')
     this.music.play();

   }
   changeicon(){
     document.getElementsByName
     
   }
  //Wait until platform is ready 

  //     this.items = [
  //       {
  //         title: 'Despacito',
  //         description: 'A powerful Javascript framework for apps.'
  //       },
  //       {
  //         title: 'Darude Sandstorm ',
  //         description: 'The latest version of cascading stylesheets'
  //       }

  //     ]
  //   }

  //   onChange(e){
  //     const value = e.target.value
  //     console.log(value)

  //     // restore list
  //     this.restoreValues();

  //     // compare
  //     if (value && value.trim() != '') {
  //       this.items = this.items.filter((item)=> {
  //         console.log(item);
  //         return (item.title.toLowerCase().indexOf(value.toLowerCase()) > -1)
  //       })
  //     }

  //   }

  //   restoreValues(){
  //     this.items = [
  //       {
  //         title: 'Despacito',
  //         description: 'A powerful Javascript framework for apps.'
  //       },
  //       {
  //         title: 'Darude Sandstorm',
  //         description: 'The latest version of cascading stylesheets'
  //       }
  //     ]
  //   }
}
