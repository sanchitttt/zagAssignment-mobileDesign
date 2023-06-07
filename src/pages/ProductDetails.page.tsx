import ProductImages from "../components/productDetails/ProductImages";
import { Rating } from '@mui/material';
import { useState } from 'react';
import { BasketIcon } from "../icons";


interface ProductDetailsInterface {
    name: string,
    description: string,
    rating: number,
    totalReviews: number,
    inStock: boolean,
    price: number
}

type ValidSizes = 'S' | 'M' | 'L' | "XL" | "XXL";
const sizes: ValidSizes[] = ['S', 'M', 'L', "XL", "XXL"];

function Size({ children, selected, onClickHandler }: { children: React.ReactNode, selected: boolean, onClickHandler: React.MouseEventHandler<HTMLDivElement> }) {
    return <div onClick={onClickHandler} className={`w-[40px] flex items-center font-bold font-main text-[14px]  justify-center h-[40px] rounded-full ${selected ? 'bg-[black] text-[#fff]' : 'border-[1px] border-[#ddd] bg-[#fff] text-[#888]'}`}>

        <div>{children}</div>
    </div>
}

function BuyButton({ children }: { children: React.ReactNode }) {
    return <div className='w-[200px] h-[50px] font-main flex items-center justify-center rounded-[30px] text-[#fff] bg-[#000]'>
        <div className='ml-[-35px] mr-[5px]'><BasketIcon color='white' /></div>
        <div className=''>{children}</div>
    </div>
}

function ProductDetails({ name = 'Roller Rabbit', description = 'Vado Odelle Dress', rating = 5, totalReviews = 320, inStock = true, price = 198.00 }: ProductDetailsInterface) {
    const [sizeSelected, setSizeSelected] = useState<ValidSizes>('L')
    const [quantity, setQuantity] = useState(1);

    return (
        <div className='w-[100vw] h-[100vh] relative'>
            <ProductImages />
            <div className='absolute bottom-[0px] flex items-start justify-center w-[100%] absolute  h-[50vh] bg-[#fff]'
                style={{ borderRadius: '30px 30px 0px 0px' }}
            >
                <div className='w-[90%]'>
                    <div className='flex justify-between items-center mt-[30px]'>
                        <div className='flex flex-col items-start justify-start'>
                            <div className='font-main text-[18px] font-semibold'>{name}</div>
                            <div className='font-main text-[11px] text-[#666]'>{description}</div>
                            <div className='flex items-center gap-[10px]'>
                                <Rating name="half-rating-read" value={rating} precision={0.5} readOnly />
                                <div className='font-main text-[11px]'>({totalReviews} reviews)</div>
                            </div>
                        </div>
                        <div className='flex flex-col items-end gap-[5px]'>
                            <div className='inline p-[5px] px-[20px] bg-[#EEEEEE] rounded-[30px]'>
                                <div
                                    className={`inline mr-[10px]  ${quantity === 1 && 'text-[#888]'}`}
                                    onClick={() => setQuantity(quantity => quantity - 1 > 0 ? quantity - 1 : quantity)}
                                >
                                    -
                                </div>
                                {quantity}
                                <div
                                    className='inline ml-[10px]'
                                    onClick={() => setQuantity(quantity => quantity + 1)}
                                >+
                                </div>
                            </div>
                            {inStock && <div className='font-main font-semibold text-[11px]'>Available in stock</div>}
                        </div>
                    </div>
                    <div className='mt-[15px]'>
                        <div className='font-semibold font-main text-[16px]'>Size</div>
                    </div>
                    <div className='sizes flex gap-[10px] mt-[10px]'>
                        {sizes.map((size) => <Size onClickHandler={() => setSizeSelected(size)} selected={sizeSelected === size}>{size}</Size>)}
                    </div>
                    <div className='mt-[20px]'>
                        <div className='font-main text-[16px] font-semibold'>Description</div>
                        <div className='mt-[5px] font-main text-[11px] font-normal text-[#666]'>Get a little lift from these Sam Edelman sandals featuring ruched straps and leather lace-up ties, while a braided jute sole makes a fresh statement for summer.</div>
                    </div>
                    <div className='mt-[30px] mb-[20px]'>
                        <div className='flex items-center justify-between'>
                            <div className='flex flex-col'>
                                <div className='text-[9px] font-main text-[#AAA] font-normal'>Total Price</div>
                                <div className='font-semibold font-main text-[18px]'>${quantity * price}</div>
                            </div>
                            <div className='flex flex-col'>
                                <BuyButton>Buy Now</BuyButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;
