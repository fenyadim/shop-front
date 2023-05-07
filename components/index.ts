import dynamic from 'next/dynamic'

export const Header = dynamic(() => import('./Header/Header'))
export const Cart = dynamic(() => import('./Cart/Cart'))
export const About = dynamic(() => import('./About/About'))
export const Error = dynamic(() => import('./Error/Error'))
export const ProductsWrapper = dynamic(
	() => import('./ProductsWrapper/ProductsWrapper')
)
export const ProductItem = dynamic(() => import('./ProductItem/ProductItem'))
export const SingleProduct = dynamic(
	() => import('./SingleProduct/SingleProduct')
)
export const Pagination = dynamic(() => import('./Pagination/Pagination'))
export const FormOrder = dynamic(() => import('./FormOrder/FormOrder'))
export const Input = dynamic(() => import('./Input/Input'))
export const Loader = dynamic(() => import('./Loader/Loader'))
export const Button = dynamic(() => import('./Button/Button'))
export const LinkButton = dynamic(() => import('./LinkButton/LinkButton'))
export const TabsWrapper = dynamic(() => import('./TabsWrapper/TabsWrapper'))
export const Tab = dynamic(() => import('./Tab/Tab'))

export { default as HeadProvider } from './HeadProvider/HeadProvider'
export { default as Layout } from './Layout/Layout'
export { default as Menu } from './Menu/Menu'
export { default as Meta } from './Meta/Meta'
