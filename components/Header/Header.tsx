import { FC, PropsWithChildren } from 'react'

import styles from './Header.module.scss'

const Header: FC<PropsWithChildren> = ({ children }) => {
	return <header className={styles.header}>{children}</header>
}

export default Header
