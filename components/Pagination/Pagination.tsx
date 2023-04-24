import cn from 'classnames'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { LinkButton } from '@/components'

import { currentUrl } from '@/utils/currentUrl'

import arrow from '../../public/image/arrow.svg'

import styles from './Pagination.module.scss'

interface IPagination {
	currentPage: number
	pageSize: number
}

const Pagination: FC<IPagination> = ({ pageSize, currentPage }) => {
	const route = useRouter()

	return (
		<div
			className={cn(styles.navigation, {
				[styles.right]: currentPage === 1,
			})}
		>
			{currentPage > 1 && (
				<LinkButton
					style={{ transform: 'rotate(180deg)' }}
					onClick={() =>
						route.push(`${currentUrl(route.query)}?page=${--currentPage}`)
					}
				>
					<Image src={arrow} alt="Назад" width={35} height={15} priority />
				</LinkButton>
			)}
			{pageSize !== 0 && currentPage !== pageSize && (
				<LinkButton
					onClick={() =>
						route.push(`${currentUrl(route.query)}?page=${++currentPage}`)
					}
				>
					<Image src={arrow} alt="Вперед" width={35} height={15} priority />
				</LinkButton>
			)}
		</div>
	)
}

export default Pagination
