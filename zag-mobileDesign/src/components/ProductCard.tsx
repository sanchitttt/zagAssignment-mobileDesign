import { LikeIcon } from "../icons"

export interface ProductCardProps {
    image: string,
    name: string,
    description: string,
    price: string | number
}

function ProductCard({ image, name, description, price }: ProductCardProps) {
    return (
        <div className='relative' aria-describedby="button" >
            <div className='absolute top-[15px] right-[15px]'>
                <LikeIcon />
            </div>
            <div className='w-[100%]'>
                <img
                    className='w-[100%] rounded-[15px] h-[170px]'
                    src={image}
                    alt='productImage'
                />
            </div>
            <div className='flex mt-[10px] items-center justify-center flex-col gap-[2px]'>
                <div className='font-main text-[16.5px] font-bold'>{name}</div>
                <div className='font-main text-[11px] text-[#666]'>{description}</div>
                <div className='font-main text-[16.5px] font-bold'>${price}</div>
            </div>
        </div>
    )
}

export default ProductCard