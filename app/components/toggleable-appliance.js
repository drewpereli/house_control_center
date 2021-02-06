import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { task } from 'ember-concurrency-decorators';

export default class ToggleableApplianceComponent extends Component {
  @tracked on = false;
}
