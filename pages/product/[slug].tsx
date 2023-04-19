import { NextPage } from 'next'
import { useRouter } from 'next/router'

const SlugPage: NextPage = () => {
	const { query } = useRouter()

	return <div>{query.slug}</div>
}

export default SlugPage
