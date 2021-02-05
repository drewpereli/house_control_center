import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { task } from 'ember-concurrency-decorators';

export default class LoginController extends Controller {
  @service session;

  @tracked password;
  @tracked errorMessage;

  @task
  *authenticate() {
    try {
      let credentials = {
        username: 'drewpereli',
        password: this.password,
      };

      yield this.session.authenticate('authenticator:jwt', credentials); // Authenticator comes from ember-simple-auth-token
    } catch (error) {
      if (error?.status === 401) {
        this.errorMessage = 'Invalid password';
      } else {
        console.log(error);
      }
    }
  }
}
