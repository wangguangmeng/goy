<template>
	<div class="home">
		<myheader></myheader>
		<mainhome></mainhome>
	</div>
</template>

<script>
	import myheader from '@/page/index/myheader'
	import mainhome from '@/page/index/mainhome'
	export default{
		components:{
			myheader,
			mainhome
		}
	}
</script>

<style scoped="scoped">
	.home{
		width: 100%;
	}
</style>