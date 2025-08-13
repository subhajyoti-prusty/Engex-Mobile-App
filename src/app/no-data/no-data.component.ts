import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IonicModule } from "@ionic/angular";

@Component({
  selector: 'app-no-data',
  templateUrl: './no-data.component.html',
  styleUrls: ['./no-data.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule],
})
export class NoDataComponent implements OnInit {
  pageTitle = 'No Data';
  title = 'No Data Available';
  message = 'There is currently no data to display.';
  iconName = 'information-circle-outline';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Get the current URL to determine what type of page this is
    const url = this.route.snapshot.url.join('/');
    this.setContent();
  }

  private setContent() {
    this.pageTitle = 'No Data';
    this.title = 'No Content Available';
    this.message = 'There is currently no data to display. Please check back later.';
    this.iconName = 'alert-circle-outline';
  }
}
