import {Page, NavParams} from 'ionic-angular';
import {InstagramService} from '../../instagram.service';


@Page({
	templateUrl: 'build/pages/fotoList/fotoList.html',
})
export class FotoList {
	id: string;
	location: any[];
	photos: any[];

	private _timeout;

	constructor(private _instagramService: InstagramService, 
		private _params: NavParams) {}

	getLocationId(id) {
		this._instagramService.getLocationId(id)
			.subscribe(location => {
				this.location = location.photos.photo.map(function(obj) {
					return obj;
				});
				this.returnFoto(this.location);
			});
	}

	returnFoto(photos) {
		this.photos = photos.map(function(obj){
			return {
				id: `https://farm${obj.farm}.staticflickr.com/${obj.server}/${obj.id}_${obj.secret}.jpg`,
				title: obj.title
			}
		});
	}

	onPageDidEnter() {
		this.id = this._params.get('id');
		this.getLocationId(this.id);
	}

}