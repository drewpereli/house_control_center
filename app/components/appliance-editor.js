import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApplianceEditorComponent extends Component {
  @service store;

  @action
  createNewAppliance() {
    this.store.createRecord('appliance');
  }
}
