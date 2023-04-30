export const animateVariable = (coord: 'x' | 'y', value: number) => ({
	hidden: {
		opacity: 0,
		[coord]: value,
	},
	show: {
		opacity: 1,
		[coord]: 0,
		transition: { duration: 0.5 },
	},
})
