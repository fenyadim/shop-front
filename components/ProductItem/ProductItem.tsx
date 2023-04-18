import Image from 'next/image'
import React from 'react'

import { Button } from '@/components'

import styles from './ProductItem.module.scss'

interface IProduct {
	slug: string
	srcImg: string
	name: string
	brand: string
	volume: number
	price: number
}

const ProductItem: React.FC<IProduct> = ({
	slug,
	price,
	srcImg,
	volume,
	brand,
	name,
}) => {
	return (
		<div className={styles.card}>
			<Image
				className={styles.product_img}
				src={`${process.env.URL_BACK}${srcImg}`}
				alt={name}
				unoptimized
				fill
				style={{ objectFit: 'cover' }}
			/>
			<div className={styles.info_wrapper}>
				<h3 className={styles.brand_name}>{brand}</h3>
				<h2 className={styles.product_name}>{name}</h2>
				<div className={styles.info_bottom}>
					<p className={styles.volume}>Объем: {volume}ml</p>
					<Button price={price} slug={slug} />
				</div>
			</div>
		</div>
	)
}

export default ProductItem
