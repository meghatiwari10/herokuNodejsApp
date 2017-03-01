<template>
	<div id="app">
		<add-user />
		<display-all />
	</div>
</template>

<script>
import AddUser from './addUser.vue'
import DisplayAll from './displayAll.vue'

export default {
	components: {
	AddUser,
	DisplayAll
	}
}
</scipt>