import Model, { attr, belongsTo } from '@ember-data/model';

export default class ApplianceModel extends Model {
  @attr('string') name;

  @belongsTo('board', { async: false }) board;
}
