import dynamic from 'next/dynamic'

export const Header = dynamic(() => import('./Header/Header'))
export const Layout = dynamic(() => import('./Layout/Layout'))
export const Cart = dynamic(() => import('./Cart/Cart'))
export const Menu = dynamic(() => import('./Menu/Menu'))
export const ProductsWrapper = dynamic(
	() => import('./ProductsWrapper/ProductsWrapper'),
	{
		ssr: false,
	}
)
export const TabsWrapper = dynamic(() => import('./TabsWrapper/TabsWrapper'))
export const Tab = dynamic(() => import('./Tab/Tab'))
export { default as ProductItem } from './ProductItem/ProductItem'
export { default as Button } from './Button/Button'
