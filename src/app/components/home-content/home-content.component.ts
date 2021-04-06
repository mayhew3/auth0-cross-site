import {Component, OnInit} from '@angular/core';
import {faLink} from '@fortawesome/free-solid-svg-icons';
import {AuthService} from '@auth0/auth0-angular';
import {ApiService} from '../../api.service';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {
  faLink = faLink;
  responseJson: string;

  constructor(public auth: AuthService,
              public apiService: ApiService) {
    this.apiService
      .ping$()
      .subscribe(
        (res) => (this.responseJson = JSON.stringify(res, null, 2).trim())
      );
  }

  ngOnInit() {
  }

}
