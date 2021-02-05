/* eslint-disable ember/no-mixins */
import RESTAdapter from '@ember-data/adapter/rest';
import ENV from 'house-control-center/config/environment';
import TokenAdapterMixin from 'ember-simple-auth-token/mixins/token-adapter';

const { apiHost } = ENV.APP;

export default class ApplicationAdapter extends RESTAdapter.extend(
  TokenAdapterMixin
) {
  host = apiHost;
}
