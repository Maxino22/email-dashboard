<template>
	<NuxtScrollbar class="w-full h-screen">
		<!-- inbox heading -->
		<InboxHeading />
		<!-- Message List  -->
		<div class="md:p-7 px-3 py-5 max-w-6xl space-y-2">
			<div
				@click="msgOpen = !msgOpen"
				v-for="n in 10"
				class="p-5 rounded-lg hover:bg-zinc-800 cursor-pointer"
			>
				<div class="flex items-center justify-between">
					<p class="text-sm">Interview - Plato Agency</p>
					<p class="text-xs text-zinc-400">5hrs ago</p>
				</div>
				<p class="text-sm mt-3 text-zinc-500 line-clamp-2">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
					dicta nulla nostrum eos, pariatur mollitia neque. Voluptatum quidem
					fugiat laboriosam.
				</p>
				<div class="mt-5 flex justify-between">
					<div
						class="flex items-center gap-3 text-xs text-zinc-300 bg-zinc-900 p-2 rounded-md"
					>
						<img
							class="object-contain h-4"
							:src="getMaterialFileIcon('maxino.py')"
							alt="image att"
						/>
						<span>maxino.py</span>
					</div>
					<button>
						<Icon
							name="solar:stars-bold-duotone"
							size="18"
							class="text-amber-400"
						/>
					</button>
				</div>
			</div>
		</div>
	</NuxtScrollbar>
</template>

<script setup lang="ts">
import { getMaterialFileIcon } from 'file-extension-icon-js'
const msgOpen = useState('msgOpen', () => false)
</script>

<style scoped></style>
