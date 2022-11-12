import { useEffect } from "react";
import lozad from 'lozad';

const ProductCard = ({url,author, ...other}) => {

    const customImg = "https://pyxis.nymag.com/v1/imgs/350/657/a5a9d7ab25bc900fdc44717a4d99757bbb-garden-cart-lede.rsquare.w700.jpg";

    useEffect(() => {
        const observer = lozad();
        observer.observe();
    });

    return (
        <div className="flex flex-col items-center shadow-2xl w-1/6 max-h-full rounded-lg">
            <img className="rounded-md w-fit h-full object-cover img lozad relative"
                data-src={url} alt="_image" />
            <div className="text-gray-700 py-2 text-center">
                <h4 className="text-2xl drop-shadow-2x">{author}</h4>
            </div>
        </div>
    )
}

export default ProductCard