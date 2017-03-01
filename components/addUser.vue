<template>
	<div class="container" id="users">
		<div class="panel-heading">
        	<h3>Add a user</h3>
    	</div>

	    <div class="panel-body">
	      
	      <div class="form-group">
	      <input  class="form-control" placeholder="Name" v-model="user.username">
	      </div>

	      <div class="form-group">
	        <input class="form-control" placeholder="Speciality" v-model="user.speciality">   
	      </div>

	      <div class="form-group">
	      <input class="form-control" placeholder="ZIP" v-model="user.zip">
	      </div>

	      <div class="form-group">
	      <input class="form-control" placeholder="Playlist" v-model="user.playlist">
	      </div>

	      <button class="btn btn-primary" v-on:click="addUser">Submit</button>
	      
	    </div>
  	</div>
</template>

