import NavbarBottom from "../components/NavbarBottom";
import ProductCard, { ProductCardProps } from "../components/ProductCard";
import HomeTop from "../components/home/HomeTop";
import SearchBar from "../components/home/SearchBar";
import { Heading, SubHeading } from "../components/text";
import { SearchEnterIcon } from "../icons";

const mockBannerData = [
    'https://i.ibb.co/n6TZc25/banner1.png',
    'https://i.ibb.co/n6TZc25/banner1.png',
    'https://i.ibb.co/n6TZc25/banner1.png',
    'https://i.ibb.co/n6TZc25/banner1.png',
];

const mockProductsData: ProductCardProps[] = [
    { image: "https://i.ibb.co/RbvGNzb/product1.png", name: "The Marc Jacobs", description: "Traveler Tote", price: "195.00" },
    { image: "https://i.ibb.co/4ggDMdr/product2.png", name: "Axel Arigato", description: "Clean 90 Triple Sneakers", price: "245.00" },
    { image: "https://i.ibb.co/RbvGNzb/product1.png", name: "The Marc Jacobs", description: "Traveler Tote", price: "195.00" },
    { image: "https://i.ibb.co/4ggDMdr/product2.png", name: "Axel Arigato", description: "Clean 90 Triple Sneakers", price: "245.00" },
    

]

function Home() {
    return (
        <div className='relative w-[100%] h-[100%] flex items-center justify-center'>
            <NavbarBottom />
            <div className='w-[90%]'>
                <div className='mt-[15px]'>
                    <HomeTop />
                </div>
                <div className='mt-[15px]'>
                    <Heading>Welcome,</Heading>
                    <SubHeading>Our Fashions App</SubHeading>
                </div>
                <div className='mt-[15px]'>
                    <div className='flex justify-between'>
                        <SearchBar />
                        <SearchEnterIcon />
                    </div>
                </div>
                <div className='flex mt-[30px] gap-[15px]  overflow-scroll'>
                    {mockBannerData.map((item) => {
                        return <img src={item} />
                    })}
                </div>
                <div className="mt-[25px] mb-[15px]">
                    <Heading fontSize="18px" >New Arrivals</Heading>
                </div>
                <div className='flex flex-wrap mb-[100px] justify-center space-between gap-[10px]'>
                    {mockProductsData.map((item) => {
                        const { image, name, description, price } = item;
                        return <ProductCard
                            image={image}
                            name={name}
                            description={description}
                            price={price}
                        />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home;