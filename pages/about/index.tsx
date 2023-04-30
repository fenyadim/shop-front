import { NextPage } from 'next'
import { GetStaticProps } from 'next'
import React from 'react'

import { About } from '@/components'

import { aboutService } from '@/services/about.service'

const AboutPage: NextPage<{ content: string }> = ({ content }) => {
	return <About content={content} />
}

export default AboutPage

export const getStaticProps: GetStaticProps = async () => {
	const response = await aboutService.fetchData()
	const { data: content } = response.data
	return {
		props: { content: content.content },
		revalidate: 10,
	}
}
