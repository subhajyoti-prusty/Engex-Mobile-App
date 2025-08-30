import type { CapacitorConfig } from '@capacitor/cli';
import { KeyboardResize, KeyboardStyle } from '@capacitor/keyboard';

const config: CapacitorConfig = {
  appId: 'com.engex.engexecommerce',
  appName: 'Engex',
  webDir: 'www',
  plugins: {
    App: {
      androidBackButton: "close",   // Allow the app to be closed normally
      iosBackgroundMode: false,     // Allow app to run in background
      androidHardwareBackButton: true   // Enable hardware back button on Android
    },
    PrivacyScreen: {
      enable: false,   // Disable privacy screen to allow screenshots
      imageName: "Splashscreen",
      contentMode: "scaleAspectFit",
      preventScreenshots: false, // Allow screenshots
      preventScreenRecording: false, // Allow screen recording
    },
    Keyboard: {
      resize: KeyboardResize.None,
      style: KeyboardStyle.Dark,
      resizeOnFullScreen: true, 
    },
    StatusBar: {
      // Configure status bar for normal app behavior
      style: "default", // Use system default style
      backgroundColor: "#ffffff", // Match your app theme
      overlay: false, // Don't overlay content
    },
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      backgroundColor: "#ffffff",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: false,
      androidSpinnerStyle: "large",
      iosSpinnerStyle: "small",
      spinnerColor: "#999999",
      splashFullScreen: true,
      splashImmersive: true,
      layoutName: "launch_screen",
      useDialog: true
    }
  },
  server: {
    cleartext: true,
    allowNavigation: ['']
  }
};

export default config;
