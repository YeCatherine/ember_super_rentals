import EmberRouter from '@ember/routing/router';
import config from 'super-rentals/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}
console.log('configs', config);
Router.map(function() {
  this.route('about');
  this.route('contact', {path: `${config.rootURL}getting-in-touch`});
  this.route('rental', {path: `${config.rootURL}rentals/:rental_id`});
});

