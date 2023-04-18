import dynamic from 'next/dynamic';

export const Header = dynamic(() => import('./Header/Header'));
export const Layout = dynamic(() => import('./Layout/Layout'));
export const Menu = dynamic(() => import('./Menu/Menu'));
export const ProductsWrapper = dynamic(() => import('./ProductsWrapper/ProductsWrapper'));
export const ProductItem = dynamic(() => import('./ProductItem/ProductItem'));
export const Tab = dynamic(() => import('./Tab/Tab'));
export const Button = dynamic(() => import('./Button/Button'));
