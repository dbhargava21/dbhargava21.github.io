<template>
	
	<div>
		<h3>Search Youtube. Please enter keyword(s)</h3>
		<input @input="onInput" />
	</div>

</template>

<script>
	export default {
		name: 'SearchBar',
		methods: {
			onInput: function(event) {
				// console.log(event.target.value);
				this.$emit('termChange', event.target.value)
			}
		}

	};

</script>

<style scoped>
	input {
		width: 75%;
	}
	div {
		text-align: center;
		margin: 20px;
	}

</style>