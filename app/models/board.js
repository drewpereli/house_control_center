import Model, { attr, belongsTo } from '@ember-data/model';

export default class BoardModel extends Model {
  @attr('string') ipAddress;

  @belongsTo('appliance', { async: false }) appliance;
}
