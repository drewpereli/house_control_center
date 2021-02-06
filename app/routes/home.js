import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class HomeRoute extends Route {
  @service session;

  beforeModel(transition) {
    this.session.requireAuthentication(transition, 'login');
  }

  async model() {
    let [boards, appliances] = await Promise.all([
      this.store.findAll('board'),
      this.store.findAll('appliance'),
    ]);

    return { boards, appliances };
  }
}
