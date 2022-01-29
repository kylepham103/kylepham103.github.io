<template>
	<div id="app" class="layout-blog">
		<div class="toggle-mobile"/>
		<PrimaryNav />
		<div class="master-container">
			<div v-if="showSidebar" class="aside">
				<div class="aside__inner">
					<Search />
					<div class="layout-blog__aside-footer">
						<slot name="aside" />
					</div>
				</div>
			</div>
			<div class="master">
				<main class="inner">
					<slot />
				</main>
				<slot name="below-master" />
			</div>
		</div>
	</div>
</template>

<script>
import Logo from '~/components/Logo.vue';
import PrimaryNav from '~/components/PrimaryNav.vue';
import Search from '~/components/Search';

export default {
	props: {
		showSidebar: { default: true },
	},
	components: {
		Logo,
		PrimaryNav,
		Search,
	},
};
</script>

<style lang="scss">
.layout-blog {
	position: relative;
	display: flex;
	background-color: var(--bg-aside);
	@include tablet {
		display: block;
	}
}

</style>

<style lang="scss" scoped>
.toggle-mobile {

	.toggle-theme {
		display: none;
		@include desktop {
			display: block;
			position: fixed;
			right: 81px;
			top: 13px;
		}
	}

}
.toggle-theme {
	margin-bottom: 40px;
	text-align: right;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	z-index: var(--z-toggle-theme);

	@include desktop {
		display: none;
	}
}
.master-container {
	z-index: var(--z-master-container);
	display: flex;
	flex-direction: row-reverse;


	@include tablet {
		display: block;
		padding-top: 56px;
	}
}
.master {
	@include scroll;

	flex-basis: var(--master-width);
	min-width: var(--master-width);
	background-color: var(--bg-master);
	position: relative;

	@media (max-width: var(--breakpoint-1400)) {
		min-width: 0;
	}
	@media (max-width: var(--breakpoint-980)) {
		width: auto;
	}
	@include tablet {
		margin-left: 0;
		max-height: none;
	}
	@include mobile {
		padding-top: 10px;
	}
	> .inner {
		padding: 15px 75px 0;
		min-height: 100vh;
		z-index: 2;
		position: relative;

		@include tablet {
			padding-left: 20px;
			padding-right: 20px;
		}

		@include mobile {
			padding-left: 30px;
			padding-right: 30px;
		}
	}
}
.aside {
	z-index: var(--z-aside);
	flex-grow: 1;
	background-color: var(--bg-aside);
	position: relative;

	@media (max-width: var(--breakpoint-1400)) {
		max-width: 30vw;
	}

	&__inner {
		display: flex;
		flex-direction: column;
		padding: 30px;
    width: calc(100% - 320px - 60vw);
		height: 100vh;
		position: fixed;

		@include tablet {
			padding: 15px;
			height: auto;
			position: relative;
		}
	}
}
</style>
