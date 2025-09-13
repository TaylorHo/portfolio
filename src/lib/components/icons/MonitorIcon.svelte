<script lang="ts">
	interface Props {
		size?: number;
		class?: string;
	}

	let { size = 24, class: className = '' }: Props = $props();
</script>

<svg
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width="2"
	stroke-linecap="round"
	stroke-linejoin="round"
	class={className}
>
	<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
	<path d="M8 21h8"></path>
	<path d="M12 17v4"></path>
</svg>
