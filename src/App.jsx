import './app.css';
import ProductCard from './components/ProductCard';
import axios from 'axios';
import { useEffect, useState } from 'react';
import list from './mock/images.json';

const App = () => {

    const [images, setImages] = useState([]);

    const fetchData = async () => {
        try {
            const res = await axios.get("https://picsum.photos/v2/list?page=2&limit=100");
            setImages(res?.data);
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        // fetchData();
        setTimeout(() => {
            setImages(list);
        }, 5000);
    }, []);

    return (
        <div className='p-4 flex flex-row flex-wrap min-w-full min-h-screen gap-4 items-center justify-center'>
            {images?.length === 0 && <h2 className='text-6xl'>Loading ...</h2>}
            {images?.map((item) => (
                <ProductCard key={item?.id} url={item?.download_url} author={item?.author} />
            ))}
        </div>
    )
};

export default App;