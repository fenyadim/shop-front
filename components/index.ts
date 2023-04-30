import dynamic from 'next/dynamic'

export const Header = dynamic(() => import('./Header/Header'))
export const Layout = dynamic(() => import('./Layout/Layout'))
export const Cart = dynamic(() => import('./Cart/Cart'))
export const Menu = dynamic(() => import('./Menu/Menu'))
export const ProductsWrapper = dynamic(
	() => import('./ProductsWrapper/ProductsWrapper')
)
export const SingleProduct = dynamic(
	() => import('./SingleProduct/SingleProduct')
)
export const TabsWrapper = dynamic(() => import('./TabsWrapper/TabsWrapper'))
export const Tab = dynamic(() => import('./Tab/Tab'))
export const FormOrder = dynamic(() => import('./FormOrder/FormOrder'))
export const HeadProvider = dynamic(() => import('./HeadProvider/HeadProvider'))
export const Meta = dynamic(() => import('./Meta/Meta'))
export const Pagination = dynamic(() => import('./Pagination/Pagination'))
export const Loader = dynamic(() => import('./Loader/Loader'))
export { default as ProductItem } from './ProductItem/ProductItem'
export { default as Button } from './Button/Button'
export { default as LinkButton } from './LinkButton/LinkButton'
export { default as Input } from './Input/Input'
