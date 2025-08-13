import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { App } from '@capacitor/app';
import { StatusBar, Style } from '@capacitor/status-bar';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnInit {
  constructor(private platform: Platform) {}

  ngOnInit() {
    this.initializeApp();
  }

  async initializeApp() {
    await this.platform.ready();
    
    // Configure status bar for normal app behavior
    if (this.platform.is('capacitor')) {
      await StatusBar.setStyle({ style: Style.Default });
      await StatusBar.setBackgroundColor({ color: '#ffffff' });
      await StatusBar.show();
      
      // Hide splash screen
      await SplashScreen.hide();
    }

    // Handle hardware back button on Android
    this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
      console.log('Back button pressed');
      // Allow normal back navigation or app exit
      if (window.location.pathname === '/home' || window.location.pathname === '/') {
        // If on home page, exit the app
        App.exitApp();
      } else {
        // Otherwise, let default behavior handle it (navigate back)
        processNextHandler();
      }
    });
  }
}
