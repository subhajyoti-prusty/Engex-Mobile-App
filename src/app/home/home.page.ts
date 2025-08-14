import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSearchbar } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  @ViewChild('searchBar', { static: false }) searchBar!: IonSearchbar;
  cartItemCount = 0;
  searchQuery = '';
  isLoading = true; // Start with loading

  // Categories data
  categories = [
    { id: 'electronics', name: 'Electronics', icon: 'laptop-outline' },
    { id: 'clothing', name: 'Clothing', icon: 'shirt-outline' },
    { id: 'home', name: 'Home', icon: 'home-outline' },
    { id: 'sports', name: 'Sports', icon: 'fitness-outline' },
    { id: 'beauty', name: 'Beauty', icon: 'flower-outline' }
  ];

  // Popular products data
  popularProducts = [
    {
      id: '1',
      name: 'Blue T-Shirt',
      price: 25.99,
      image: '', // Will use CSS gradient
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: '2',
      name: 'Blue T-Shirt',
      price: 25.99,
      image: '', // Will use CSS gradient
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: '3',
      name: 'Blue T-Shirt',
      price: 25.99,
      image: '', // Will use CSS gradient
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: '4',
      name: 'Blue T-Shirt',
      price: 25.99,
      image: '', // Will use CSS gradient
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }
  ];

  constructor(
    private router: Router
  ) {
    // Initialize loading state
  }

  ngOnInit() {
    this.initializeApp();
  }

  private initializeApp() {
    // Simulate app initialization and data loading
    // You can replace this with actual API calls or other initialization logic
    setTimeout(() => {
      this.loadAppData();
    }, 2000); // 2 seconds loading time
  }

  private loadAppData() {
    // Simulate loading data (replace with actual data loading)
    // This could include fetching categories, products, user data, etc.
    Promise.all([
      this.loadCategories(),
      this.loadProducts(),
      this.loadUserData()
    ]).then(() => {
      // Hide loading screen after all data is loaded
      this.isLoading = false;
    }).catch(error => {
      console.error('Error loading app data:', error);
      // Hide loading screen even if there's an error
      this.isLoading = false;
    });
  }

  private loadCategories(): Promise<void> {
    return new Promise(resolve => {
      // Simulate API call delay
      setTimeout(() => {
        // Categories are already loaded in the component
        resolve();
      }, 500);
    });
  }

  private loadProducts(): Promise<void> {
    return new Promise(resolve => {
      // Simulate API call delay
      setTimeout(() => {
        // Products are already loaded in the component
        resolve();
      }, 800);
    });
  }

  private loadUserData(): Promise<void> {
    return new Promise(resolve => {
      // Simulate API call delay
      setTimeout(() => {
        // Load user-specific data like cart count
        this.cartItemCount = 0; // This would come from your user service
        resolve();
      }, 300);
    });
  }

  onSearchSubmit() {
    if (this.searchQuery.trim()) {
      this.router.navigate(['/products'], { 
        queryParams: { search: this.searchQuery } 
      });
    }
  }

  goToCategory(categoryId: string) {
    this.router.navigate(['/products'], { 
      queryParams: { category: categoryId } 
    });
  }

  goToProduct(productId: string) {
    this.router.navigate(['/products/detail', productId]);
  }

  goToCart() {
    this.router.navigate(['/no-data']);
  }

  viewAllProducts() {
    this.router.navigate(['/no-data']);
  }

  focusSearchBar() {
    if (this.searchBar) {
      this.searchBar.setFocus();
    }
  }
}
