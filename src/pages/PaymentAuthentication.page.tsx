import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { FadeLoader } from "react-spinners";

function PaymentAuthenticationPage() {
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('success')) navigate('/')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        const id = setTimeout(() => {
            navigate('/success');
        }, 3000);
        return () => {
            clearTimeout(id)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className='w-[100vw]'>
            <div className='flex flex-col gap-[25px] w-[100%] items-center absolute top-[50%] left-[50%]' style={{ transform: 'translate(-50%,-50%)' }}>
                <FadeLoader color='grey' />
                <div className='font-main text-[20px] font-semibold'>Payment is processing...</div>
                <div className='font-main text-[16px] text-[#888]'>Please wait, do not close this screen</div>
            </div>
        </div>
    )
}

export default PaymentAuthenticationPage;