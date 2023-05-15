<template>
	<div class="flex">
		<Sidebar />
		<!-- Message List Area -->
		<InboxMessge :class="[msgOpen && isMobileOrTablet ? 'hidden' : '']" />
		<!-- Message Details -->
		<div
			v-if="msgOpen"
			class="h-screen relative md:w-full w-screen transition border-l border-zinc-800"
		>
			<!-- detail heading -->
			<InboxDetailsHeading />
			<div class="px-10 py-7 border-b border-zinc-800">
				<div
					class="flex flex-col md:flex-row md:items-certer justify-between gap-4 mt-3"
				>
					<div class="flex items-center gap-5">
						<img
							src="https://randomuser.me/api/portraits/med/men/70.jpg"
							alt="User"
							class="object-cover rounded-full w-10 h-10 ring-1 ring-zinc-700/10"
						/>
						<div>
							<p class="text-sm -mb-1">John Doe</p>
							<a class="text-xs text-zinc-500" href="mailto:maxino@mail.co"
								>maxino@mail.co</a
							>
						</div>
					</div>
					<div>
						<span class="text-xs text-zinc-500 font-medium"
							>Today 10:17 PM ( 2hrs ago )</span
						>
					</div>
				</div>
				<!-- Message Body -->
				<h2 class="mt-10 font-medium">Interview - Value Chain</h2>
				<div class="text-zinc-400 text-sm mt-5 space-y-3">
					<p>Hello hope you Easy looking forward to meet you</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
						fugiat eos tenetur dignissimos nam molestiae adipisci reiciendis
						distinctio! Ea quas commodi, fugiat dolorum alias veritatis modi
						sunt exercitationem eum non?
					</p>
				</div>
				<div
					class="flex items-center justify-between text-sm text-zinc-20 mt-10"
				>
					<p>Value 8 Factory</p>
					<a href="#" class="underline underline-offset-2">valuechain.com</a>
				</div>
			</div>

			<!-- fiexe footer -->
			<div
				class="absolute bottom-0 left-0 w-full bg-zinc-900/50 px-7 h-12 flex items-center justify-between"
			>
				<div class="flex items-center gap-5">
					<button class="text-sm flex items-center gap-2">
						<Icon name="solar:reply-bold-duotone" size="20" />
						<span>Reply</span>
					</button>
					<button class="text-sm flex items-center gap-2">
						<Icon name="solar:forward-bold-duotone" size="20" />
						<span>Forward</span>
					</button>
				</div>

				<button class="text-amber-400 flex items-center gap-2">
					<Icon name="solar:stars-bold-duotone" size="22" />
					<span class="sr-only">Favorite</span>
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const msgOpen = useState('msgOpen', () => false)
useHead({
	bodyAttrs: {
		class: 'bg-zinc-950 text-zinc-50 min-h-screeen',
	},
})

const { isMobileOrTablet } = useDevice()
</script>
