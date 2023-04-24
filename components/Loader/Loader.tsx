// ! ИСПОЛЬЗОВАТЬ REACT-SPRING
import { useRouter } from 'next/router'
import { FC, PropsWithChildren, useEffect, useState } from 'react'

const Loader: FC<PropsWithChildren> = ({ children }) => {
	const router = useRouter()

	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const handleStart = (url: string) =>
			url !== router.asPath && setLoading(true)
		const handleComplete = (url: string) =>
			url === router.asPath && setLoading(false)

		router.events.on('routeChangeStart', handleStart)
		router.events.on('routeChangeComplete', handleComplete)
		router.events.on('routeChangeError', handleComplete)

		return () => {
			router.events.off('routeChangeStart', handleStart)
			router.events.off('routeChangeComplete', handleComplete)
			router.events.off('routeChangeError', handleComplete)
		}
	})

	return loading ? (
		<div>Loading....{/*I have an animation here*/}</div>
	) : (
		<>{children}</>
	)
}

export default Loader
