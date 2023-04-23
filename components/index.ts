import dynamic from 'next/dynamic'

export const Header = dynamic(() => import('./Header/Header'))
export const Layout = dynamic(() => import('./Layout/Layout'))
export const Cart = dynamic(() => import('./Cart/Cart'))
export const Menu = dynamic(() => import('./Menu/Menu'))
export const ProductsWrapper = dynamic(
	() => import('./ProductsWrapper/ProductsWrapper')
)
export const TabsWrapper = dynamic(() => import('./TabsWrapper/TabsWrapper'))
export const Tab = dynamic(() => import('./Tab/Tab'))
export const FormOrder = dynamic(() => import('./FormOrder/FormOrder'))
export { default as ProductItem } from './ProductItem/ProductItem'
export { default as Button } from './Button/Button'
export { default as LinkButton } from './LinkButton/LinkButton'
export { default as Input } from './Input/Input'
