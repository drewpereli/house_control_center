import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { task } from 'ember-concurrency-decorators';
import { inject as service } from '@ember/service';

export default class EditableApplianceComponent extends Component {
  @service store;

  @tracked isEditing = false;

  get isEditingOrNew() {
    return this.isEditing || this.args.appliance.isNew;
  }

  @task
  *save() {
    try {
      yield this.args.appliance.save();
      this.isEditing = false;
    } catch (error) {
      console.log(error);
    }
  }

  @action
  cancelEdits() {
    this.args.appliance.rollbackAttributes();
    this.isEditing = false;
  }
}
