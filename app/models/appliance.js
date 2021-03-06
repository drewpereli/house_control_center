import Model, { attr, belongsTo } from '@ember-data/model';

export default class ApplianceModel extends Model {
  @attr('string') name;
  @attr('string') type;
  @attr('string') status;

  @belongsTo('board', { async: false }) board;
}
