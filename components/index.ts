import dynamic from 'next/dynamic'

export const Header = dynamic(() => import('./Header/Header'))
export const Layout = dynamic(() => import('./Layout/Layout'))
export const Menu = dynamic(() => import('./Menu/Menu'))
export const ProductsWrapper = dynamic(
	() => import('./ProductsWrapper/ProductsWrapper'),
	{
		ssr: false,
	}
)
export const Tab = dynamic(() => import('./Tab/Tab'))
export const Cart = dynamic(() => import('./Cart/Cart'))
export { default as ProductItem } from './ProductItem/ProductItem'
export { default as Button } from './Button/Button'
export { default as LinkButton } from './LinkButton/LinkButton'
export { default as Input } from './Input/Input'
