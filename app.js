 // var Vue = require('vue');

new Vue({
  el: '#users',

  data: {
          user: { username: '', speciality: '', zip: '' , playlist: ''},
          searchuser: {name: ''},
          users: []
  },

  mounted: function () {
          this.displayAll();
  },

  methods: {
          displayAll: function () {
                this.$http.get('/users/displayAll').then(response => {
                    this.users = response.body;
                },  response => {
          // error callback
                });
               
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
                  this.$http.post('/users/searchUser',this.searchuser)
                      .then(response => {

                        // get body data
                        this.users = response.body;
                        

                      }, response => {
                        // error callback
                      });
          }
  }
});