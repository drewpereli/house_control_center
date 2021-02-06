import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class HomeController extends Controller {
  @service session;

  @tracked applianceEditorOpen = false;

  @action
  logOut() {
    this.session.invalidate();
  }
}
