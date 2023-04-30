export const animateVariable = (
	coord: 'x' | 'y',
	value: number,
	duration: number = 0.5
) => ({
	hidden: {
		opacity: 0,
		[coord]: value,
	},
	show: {
		opacity: 1,
		[coord]: 0,
		transition: { duration },
	},
})
