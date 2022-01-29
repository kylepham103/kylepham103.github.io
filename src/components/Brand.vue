<template>
	<g-link v-once to="/" class="go-home">
		<span>
			<img src="../assets/images/logo-main.png" alt="kylepham103.github.io" />
		</span>
	</g-link>
</template>

<script>
import Logo from '~/assets/images/logo-main.png';

export default {
	components: {
		Logo
	}
}
</script>


<style lang="scss" scoped>
.go-home {
	display: block;
	color: #fff;
	font-family: 'avo_bold', $san-serif;
	font-size: 1.1rem;
  padding: 20px;

	img {
		height: 80px;
	}

	@include tablet {
		padding-top: 12px;
		padding-left: 15px;
		width: 180px;
		padding-bottom: 0;
		color: #fff;
		font-family: 'avo_bold', $san-serif;
		img {
			height: 40px;
		}
	}
}
</style>
