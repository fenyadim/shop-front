import { NextPage } from 'next'

import { Error } from '@/components'

const NotFoundPage: NextPage = () => {
	return <Error title="Ошибка 404" desc="То, что вы искали, тут нет 😢" />
}

export default NotFoundPage
