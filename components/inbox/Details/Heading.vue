<template>
	<div
		class="flex items-center justify-end gap-3 py-5 border-b border-zinc-800"
	>
		<button
			v-tooltip="'Ask for Help'"
			class="text-zinc-500 hover:text-zinc-100 transition"
		>
			<Icon name="solar:question-square-bold-duotone" />
		</button>
		<button
			v-tooltip="'View Settings'"
			class="text-zinc-500 hover:text-zinc-100 transition"
		>
			<Icon name="solar:settings-bold-duotone" />
		</button>
		<button
			v-tooltip="'Open Menu'"
			class="text-zinc-500 hover:text-zinc-100 transition"
		>
			<Icon name="solar:menu-dots-square-bold-duotone" />
		</button>
		<img
			v-tooltip="'Update profile'"
			src="https://www.maxino.xyz/assets/max.f9b8fe05.png"
			alt="Logged in user"
			class="rounded-full ml-3 w-6 h-6 shrink-0 object-cover ring-1 ring-zinc-800/30"
		/>
	</div>
	<div class="border-b border-zinc-800 p-3 flex items-center justify-between">
		<div class="flex items-center gap-3">
			<button
				@click="msgOpen = false"
				v-tooltip="'Go back'"
				class="text-zinc-500 hover:text-zinc-200 transition"
			>
				<Icon name="solar:arrow-left-line-duotone" size="18"></Icon>
			</button>
			<button
				v-tooltip="'Archive Email'"
				class="text-zinc-500 hover:text-zinc-200 transition"
			>
				<Icon name="solar:archive-check-line-duotone" size="18"></Icon>
			</button>
			<button
				v-tooltip="'Delete this Email'"
				class="text-zinc-500 hover:text-zinc-200 transition"
			>
				<Icon name="solar:trash-bin-minimalistic-line-duotone" size="18"></Icon>
			</button>
		</div>
		<div class="flex items-center gap-3">
			<button
				v-tooltip="'View previous'"
				class="text-zinc-500 cursor-not-allowed inline-flex items-center hover:text-zinc-200 transition"
			>
				<Icon name="solar:round-alt-arrow-left-bold-duotone" size="20" />
			</button>
			<div class="text-xs text-zinc-400">1 of 485</div>
			<button
				v-tooltip="'View next email'"
				class="text-zinc-200 inline-flex hover:text-zinc-200 transition"
			>
				<Icon name="solar:round-alt-arrow-right-bold-duotone" size="20" />
			</button>
		</div>

		<div class="flex items-center gap-3">
			<button
				v-tooltip="'Print email'"
				class="text-zinc-500 hover:text-zinc-200 transition"
			>
				<Icon name="solar:printer-2-outline" size="18" />
			</button>
			<button
				v-tooltip="'Open in new window'"
				class="text-zinc-500 hover:text-zinc-200 transition"
			>
				<Icon name="solar:arrow-right-up-line-duotone" size="18" />
			</button>
			<button
				v-tooltip="'More options'"
				class="text-zinc-500 hover:text-zinc-200 transition"
			>
				<Icon name="solar:menu-dots-square-line-duotone" size="18" />
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
const msgOpen = useState('msgOpen', () => false)
</script>
