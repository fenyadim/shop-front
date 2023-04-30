import { FC } from 'react'
import ReactMarkdown from 'react-markdown'

import { Header } from '@/components'

import styles from './About.module.scss'

const About: FC<{ content: string }> = ({ content }) => {
	return (
		<>
			<Header title="О нас" desc="Здесь вы можете узнать о нас все!" />
			<ReactMarkdown className={styles.wrapper}>{content}</ReactMarkdown>
		</>
	)
}

export default About
