import VueRouter from 'vue-router'
var Vue = require('vue');
var VueRouter = require('vue-router');

Vue.use(VueRouter);

var App = Vue.extend({});

var router = new VueRouter();

var Home = Vue.extend({
  template: 'Welcome to the <b>home page</b>!'
});

var People = Vue.extend({
  template: 'Look at all the people who work here!'
});

router.map({
  '/': {
    component: Home
  },
  '/people': {
    component: People
  }
});

router.start(App, '#app');

// var http = require("http");
// new Vue({

// 	el: "users",

// 	data: {
// 	  	user: { name: '', speciality: '', zip: '' , playlist: ''},
//   		users: []
// 	},

// 	ready: function() {
// 	  this.addUser();
// 	},
	
// 	methods: {

// 		addUser: function() {
// 		    this.$http.post('./models/addUser', this.user).success(function(response) {
// 			  this.users.push(this.user);
// 			  console.log("User added!");
// 			}).error(function(error) {
// 			  console.log(error);
// 			});
// 		},
	  
// 		fetchUsers: function() {
// 		  	this.$http.get('api/events').success(function(events) {
// 			  this.$set('events', events);
// 			}).error(function(error) {
// 			  console.log(error);
// 			});

// 		}

	  
	  
// 	}
// });