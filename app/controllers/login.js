import Controller from '@ember/controller';
import { inject as service } from '@ember/service'

export default Controller.extend({
  session: service(),
  actions: {
    login() {
      this.get('session').open('firebase', {
        provider: 'password',
        email: this.get('email'),
        password: this.get('password')
      }).then((data) => {
         this.set('email', '');
         this.set('password', '');
         this.transitionToRoute('session.user.users', data.uid);
      }).catch((error) => {
        window.alert(error.message);
      });
    }
  }
});
