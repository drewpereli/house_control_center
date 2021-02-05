import Model, { attr } from '@ember-data/model';

export default class BoardModel extends Model {
  @attr('string') ipAddress;
}
