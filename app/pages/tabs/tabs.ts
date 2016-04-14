import {Page, NavController} from 'ionic-angular';
import {InstagramService} from '../../instagram.service';


@Page({
	templateUrl: 'build/pages/tabs/tabs.html',
})
export class SearchPage {
	constructor(private _instagramService: InstagramService) {
	}

	getLocation() {
		this._instagramService.getLocation()
			.subscribe(data => console.log(data));
	}
}
