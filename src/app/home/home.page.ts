import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSearchbar } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage  {
  @ViewChild('searchBar', { static: false }) searchBar!: IonSearchbar;
  cartItemCount = 0;
  searchQuery = '';

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
  ) {}

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
