import { FC } from 'react'

import { Header } from '@/components'

import styles from './Error.module.scss'

interface IError {
	title: string
	desc: string
}

const Error: FC<IError> = ({ title, desc }) => {
	return (
		<>
			<Header title="Ошибка" />
			<div className={styles.wrapper}>
				<h1>{title}</h1>
				<h3>{desc}</h3>
			</div>
		</>
	)
}

export default Error
