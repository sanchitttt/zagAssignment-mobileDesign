import { useEffect } from "react"
import { useNavigate } from 'react-router-dom';

function PaymentSuccessPage() {
    const navigate = useNavigate()
    useEffect(() => {
        // if (!localStorage.getItem('success')) navigate('/')
        // else {
        //     setTimeout(() => {
        //         localStorage.clear();
        //     }, 5000)
        // }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className='flex w-[100vw] h-[100vh] flex-col gap-[20px] items-center justify-center'>
            <div className='w-[100px]'>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                    <circle className="path circle" fill="none" stroke="#73AF55" strokeWidth="6" strokeMiterlimit="10" cx="65.1" cy="65.1" r="62.1" />
                    <polyline className="path check" fill="none" stroke="#73AF55" strokeWidth="6" strokeLinecap="round" strokeMiterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 " />
                </svg>
            </div>
            <div className='fontMain text-[24px] font-semibold'>Payment recieved!</div>
            <div className='fontMain text-[16px] text-[#888] ' style={{ textAlign: 'center' }} >Your order is now on the way.<br />Please check your email for the receipt</div>
        </div>
    )
}

export default PaymentSuccessPage;