import { Component, Input } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
 
  public appPages = [
    {
      title: 'Introduction',
      url: '/introduction',
      icon: 'list'
    },
    {
      title: 'Template Strings',
      url: '/home',
      icon: 'paper'
    },
    {
      title: 'Let & Constants',
      url: '/lesson3',
      icon: 'paper'
    },
    {
      title: 'for...of',
      url: '/lesson4',
      icon: 'paper'
    },
    {
      title: 'Arrow functions ',
      url: '/lesson5',
      icon: 'paper'
    },
    {
      title: 'Rest parameter',
      url: '/lesson6',
      icon: 'paper'
    },
    {
      title: 'Default parameters',
      url: '/lesson7',
      icon: 'paper'
    },
    {
      title: 'Spread operator',
      url: '/lesson8',
      icon: 'paper'
    },
    {
      title: 'Destructuring',
      url: '/list',
      icon: 'paper'
    },
    {
      title: 'Promise',
      url: '/lesson9',
      icon: 'paper'
    },
    {
      title: 'Modules',
      url: '/lesson10',
      icon: 'paper'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
