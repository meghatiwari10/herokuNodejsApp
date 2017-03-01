var http = require("http");
new Vue({

	el: "users",

	data: {
	  	this.$http.get('api/users').success(function(users) {
  			this.$set('users', users);
  		}).error(function(error) {
  		console.log(error);
	},

	ready: function() {
	  this.fetchUsers();
	},
	
	methods: {

	  
	  fetchUsers: function() {
	    var users = [
	      {
	        id: 1,
	        name: 'TIFF',
	        description: 'Toronto International Film Festival',
	        date: '2015-09-10'
	      },
	      {
	        id: 2,
	        name: 'The Martian Premiere',
	        description: 'The Martian comes to theatres.',
	        date: '2015-10-02'
	      },
	      {
	        id: 3,
	        name: 'SXSW',
	        description: 'Music, film and interactive festival in Austin, TX.',
	        date: '2016-03-11'
	      }
	    ];

	    this.$set('users', users);
	  },

	  
	  addUser: function() {
	    this.$http.post('api/users', this.user).success(function(response) {
		  this.users.push(this.user);
		  console.log("User added!");
		}).error(function(error) {
		  console.log(error);
		});
	  }
	}
});