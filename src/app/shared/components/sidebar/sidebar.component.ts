import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface SidebarMenuItem {
  id: string;
  label: string;
  icon: string;
  action: () => void;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() isOpen: boolean = false;
  @Input() userInfo = {
    name: 'Subhajyoti Prusty',
    phone: '+91 7788081947',
    initials: 'SP'
  };
  
  @Output() closeSidebar = new EventEmitter<void>();
  @Output() menuItemClicked = new EventEmitter<string>();

  menuItems: SidebarMenuItem[] = [
    {
      id: 'my-account',
      label: 'My Account',
      icon: 'person-outline',
      action: () => this.onMenuItemClick('my-account')
    },
    {
      id: 'order-history',
      label: 'Order History',
      icon: 'receipt-outline',
      action: () => this.onMenuItemClick('order-history')
    },
    {
      id: 'my-addresses',
      label: 'My Addresses',
      icon: 'location-outline',
      action: () => this.onMenuItemClick('my-addresses')
    },
    {
      id: 'view-last-order',
      label: 'View Last Order',
      icon: 'time-outline',
      action: () => this.onMenuItemClick('view-last-order')
    }
  ];

  settingsItems: SidebarMenuItem[] = [
    {
      id: 'settings',
      label: 'Settings',
      icon: 'settings-outline',
      action: () => this.onMenuItemClick('settings')
    },
    {
      id: 'contact-us',
      label: 'Contact Us',
      icon: 'chatbubble-outline',
      action: () => this.onMenuItemClick('contact-us')
    },
    {
      id: 'need-help',
      label: 'Need Help?',
      icon: 'help-circle-outline',
      action: () => this.onMenuItemClick('need-help')
    },
    {
      id: 'share',
      label: 'Share (app name)',
      icon: 'share-outline',
      action: () => this.onMenuItemClick('share')
    }
  ];

  constructor() { }

  onCloseSidebar() {
    this.closeSidebar.emit();
  }

  onMenuItemClick(itemId: string) {
    this.menuItemClicked.emit(itemId);
  }

  onLogout() {
    this.menuItemClicked.emit('logout');
  }
}
