<template>
	<NuxtScrollbar
		tag="aside"
		class="fixed h-screen hidden md:block md:w-72 border-r border-zinc-900 shrink-0"
	>
		<!-- links -->
		<nav class="flex flex-col ga-p-2 px-4 mt-10">
			<nuxt-link
				v-for="ml in mainlinks"
				:key="ml.title"
				class="flex group items-center justify-between px-3 py-2 rounded-lg text-zinc-400 hover:text-primary-50 hover:bg-primary transition"
			>
				<div class="flex items-center gap-3">
					<Icon :name="ml.icon" />
					<span class="text-sm">{{ ml.title }}</span>
				</div>
				<span
					v-if="ml.count"
					class="ml-auto text-xs opacity-70 group-hover:opacity-100"
					>{{ ml.count }}</span
				>
			</nuxt-link>
		</nav>
		<Divider class="mt-10" />
		<!-- labels -->
		<div class="px-4 my-10">
			<button
				@click="showLevels = !showLevels"
				class="flex items-center gap-3 w-full"
			>
				<Icon
					class="transition duration-300"
					:class="[showLevels ? ' transform rotate-180' : '']"
					name="solar:double-alt-arrow-down-bold"
					size="18"
				/>
				<span class="text-sm">Labels</span>
			</button>

			<transition name="labels">
				<nav v-if="showLevels" class="flex flex-col gap-1 mt-5">
					<NuxtLink
						class="flex items-center justify-between rounded-lg p-2 hover:bg-zinc-700 transition"
						to="#"
						v-for="l in labels"
						:key="l.count"
					>
						<div class="flex items-center gap-2">
							<span
								:class="[l.color]"
								class="inline-block w-2 h-2 rounded-full"
							></span>
							<span class="text-sm">{{ l.title }}</span>
						</div>
						<span
							v-if="l.count"
							class="ml-auto text-xs opacity-70 group-hover:opacity-100"
						>
							{{ l.count }}
						</span>
					</NuxtLink>
				</nav>
			</transition>
		</div>
	</NuxtScrollbar>
</template>

<script setup lang="ts">
const mainlinks = [
	{ title: 'Inbox', icon: 'solar:inbox-bold-duotone', link: '#', count: 518 },
	{ title: 'Starred', icon: 'solar:star-bold-duotone', link: '#', count: 10 },
	{ title: 'Sent', icon: 'solar:plain-bold-duotone', link: '#', count: 213 },
	{ title: 'Draft', icon: 'solar:file-bold-duotone', link: '#', count: 16 },
	{
		title: 'Attachment',
		icon: 'solar:paperclip-bold-duotone',
		link: '#',
		count: 105,
	},
	{ title: 'Spam', icon: 'solar:shield-warning-bold-duotone', link: '#' },
	{
		title: 'Deleted',
		icon: 'solar:trash-bin-minimalistic-bold-duotone',
		link: '#',
		count: 55,
	},
	{
		title: 'Archived',
		icon: 'solar:archive-bold-duotone',
		link: '#',
		count: 518,
	},
]

// Sidebar labels
const labels = [
	{ title: 'Work', color: 'bg-primary', count: 15 },
	{ title: 'Personal', color: 'bg-amber-500', count: 5 },
	{ title: 'Important', color: 'bg-red-600', count: 2 },
	{ title: 'Urgent', color: 'bg-red-500' },
	{ title: 'To Do', color: 'bg-yellow-500', count: 45 },
	{ title: 'Later', color: 'bg-green-500', count: 65 },
]

const showLevels = ref(false)
</script>

<style scoped></style>
