import {Page, NavController, NavParams} from 'ionic-angular';
import {Settings} from '../../common/settings'
import {TranslateService, TranslatePipe} from 'ng2-translate/ng2-translate';


@Page({
  templateUrl: 'build/pages/newsdetails/newsdetails.html',
  pipes: [TranslatePipe]
})
export class NewsdetailsPage {
  private item;
  settings = Settings;
  
  constructor(
    public nav: NavController,
    private navParams: NavParams,
    private translate: TranslateService
  ) {
    this.nav = nav;
    this.navParams = navParams;
    this.item = this.navParams.data;
  }
}
