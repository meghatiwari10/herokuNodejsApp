 // var Vue = require('vue');

new Vue({
  el: '#users',

  data: {
    user: { username: '', speciality: '', zip: '' , playlist: ''},
    searchuser: '',
    users: []
  },

  mounted: function () {
    this.displayAll();
  },

  methods: {
/*
this.$http.get('/').then(function (response) {
    this.$set('movies', response.data);
}
*/


    displayAll: function () {
      //var users = [];
      
      this.$http.get('/users/displayAll').then(response => {

    // get body data
    this.users = response.body;
    console.log(this.users);
    console.log(this.users);

  }, response => {
    // error callback
  });
            //     .then(function (users) {
            //         this.users = users;
                    
            //         console.log('Success!:', this.user);
                    
            //       }, function (response) {
            //           console.log('Error!:');
            // });
    },

    addUser: function () {
      
      this.$http.post('/users/addUser',this.user)
                .then(function (response) {
                    this.users.push(this.user);
                    console.log('user added!:', this.users);
                    
                  }, function (response) {
                      console.log('Error!:');
            });
    },

    searchUser: function () {
      
      this.$http.get('/users/searchUser',this.searchuser)
                .then(function (response) {
                    this.users=response.body;
                    console.log(response.body);
                    console.log('user found:', response.body);
                    
                  }, function (response) {
                      console.log('Error!:');
            });
    },

      
  }
});