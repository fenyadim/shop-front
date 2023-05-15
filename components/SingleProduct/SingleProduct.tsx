import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'

import { Button, Header } from '@/components'

import { variants } from '@/constans/animate'

import { animateVariable } from '@/utils/animateVariable'

import { IProductWithCategory } from '@/types'

import styles from './SingleProduct.module.scss'

const SingleProduct: FC<IProductWithCategory> = (props) => {
	const { desc, volume, name, image, brand, category } = props
	return (
		<>
			<Header
				title={category.title}
				desc={`Товар: ${name}. Бренд: ${brand.title}`}
			/>
			<motion.div
				variants={variants}
				initial="hidden"
				animate="show"
				className={styles.wrapper}
			>
				<motion.div
					variants={animateVariable('y', -30)}
					className={styles.image_wrapper}
				>
					<Image
						src={image.url}
						alt={name}
						fill
						unoptimized
						style={{
							objectFit: 'contain',
							objectPosition: 'top',
						}}
						priority
					/>
				</motion.div>
				<motion.div variants={animateVariable('y', 30)} className={styles.info}>
					<div className={styles.header}>
						<h2>{brand.title}</h2>
						<h1>{name}</h1>
					</div>
					<div className={styles.main}>
						{desc && (
							<p className={styles.desc}>
								<span>Описание: </span>
								{desc}
							</p>
						)}
					</div>
					<div className={styles.bottom}>
						<p className={styles.volume}>Объем: {volume}ml</p>
						<Button isBig {...props} />
					</div>
				</motion.div>
			</motion.div>
		</>
	)
}

export default SingleProduct
