import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = "Let's do this coding thing!";
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://th.bing.com/th/id/R44d6e8fa4cb809b3de54a3d7a6f97143?rik=VG3MSZ4KJEPmhA&riu=http%3a%2f%2fwww.ldssmile.com%2fwp-content%2fuploads%2f2014%2f10%2flets-do-this.jpg&ehk=2codLEJjINCaI9FcVPxdpRKAnS%2fep6jjHwM3q3Hgnbg%3d&risl=&pid=ImgRaw';
  image3 = 'https://th.bing.com/th/id/OIP.sxmUPw3ruoYtP_NnkwD-WwAAAA?pid=ImgDet&rs=1';

  constructor() { }

  ngOnInit() {
  }

}