import { BackIcon, BasketIcon, LightLikeIcon } from "../../icons";
import { useNavigate } from "react-router-dom";

function ProductImages() {
    const navigate = useNavigate();
    return (
        <div className='bannerImage relative w-[100vw]'>
            <img
                src='https://i.ibb.co/5XZ2RxT/product-Image.png'
                alt='productImg'
                width='100%'
                height={'55vh'}
            />
            <div className='flex absolute top-[15px] justify-center items-center w-[100%]'>
                <div className='w-[90%] flex justify-between items-center'>
                    <div onClick={() => navigate('/')}><BackIcon /></div>
                    <BasketIcon />
                </div>
            </div>
            <div className='absolute bottom-[15px] right-[15px]'>
                <LightLikeIcon />
            </div>
        </div>
    )
}

export default ProductImages