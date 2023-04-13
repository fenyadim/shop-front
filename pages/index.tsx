import ProductItem from "@/components/ProductItem";
import ProductsWrapper from "@/components/ProductsWrapper";

export default function Home() {
    return (
        <>
            <ProductsWrapper />
            <section className="panel">
                <div className="container">
                    <div className="panel__block">
                        <a href="#" className="panel__message">
                            <img src="image/Speech Bubble.svg" alt="message" className="panel__message-img"/>
                        </a>
                        <a href="#" className="panel__basket">
                            <img src="image/Basket.svg" alt="basket" className="panel__basket-img"/>
                        </a>
                        <img src="image/Количество в корзине.svg" alt="" className="panel__basket-check"/>
                        <a href="#" className="panel__about">
                            <img src="image/About.svg" alt="about" className="panel__about-img"/>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
