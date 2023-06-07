import { useState } from "react"
import { LockIcon } from "../icons";
import InputBox from "../components/payment/InputBox";
import { PaymentText } from "../components/text";
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom"

let count = 0;
function PaymentPage() {
    const [cardNumber, setCardNumber] = useState('');
    const [name, setName] = useState('');
    const [expiration, setExpiration] = useState('');
    const [securityCode, setSecurityCode] = useState('');
    const navigate = useNavigate();

    const payHandler = () => {
        if (!cardNumber.length || !name.length || !expiration.length || !securityCode.length) {
            toast.error('Fill all the fields', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "dark",
            });
        }
        else if (!expiration.match(/\d\d\/\d\d$/)) {
            toast.error('Expiration date should be in the form MM/YY', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "dark",
            });
        }
        else {
            const expirationArr = expiration.split('/');
            const currYear = parseInt(new Date().getFullYear().toString().slice(2))
            const currMonth = parseInt(new Date().getMonth().toString());
            if (parseInt(expirationArr[0]) > 12) {
                toast.error('Invalid month in expiration', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "dark",
                });
            }
            //@ts-expect-error Its okay
            else if (parseInt(expirationArr[1] < currYear)) {
                toast.error('Invalid year in expiration', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "dark",
                });
            }
            else if (parseInt(expirationArr[0]) < currMonth) {
                toast.error('the month has already expired', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "dark",
                });
            }
            else {
                localStorage.setItem('success', 'yes');
                navigate('/authentication');
            }
        }
    }
    return (
        <div className='flex h-[100vh] items-center justify-center bg-[#fff4fc]'>
            <div className='w-[90%] h-[368px] flex items-center justify-center'>
                <div className='w-[90%] h-[90%]'>
                    <div className="flex items-start gap-[5px] flex-col">
                        <PaymentText>Card number</PaymentText>
                        <InputBox
                            type='CardNumber'
                            placeholder='4242 4242 4242 4242'
                            value={cardNumber}
                            onChangeHandler={(e) => {
                                const length = e.target.value.length - count;
                                if (length <= 16) {
                                    if (length % 4 === 0) {
                                        count++;
                                        setCardNumber(e.target.value + ' ');
                                    }
                                    else setCardNumber(e.target.value)
                                }
                            }}
                        />
                    </div>
                    <div className="flex items-start gap-[5px] flex-col mt-[15px]">
                        <PaymentText>Name on card</PaymentText>
                        <InputBox placeholder='George Hatzis'
                            value={name}
                            onChangeHandler={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="flex items-start justify-between gap-[5px] mt-[15px]">
                        <div className='flex flex-col items-start'>
                            <PaymentText>Expiration date</PaymentText>
                            <InputBox placeholder='MM/YY'
                                value={expiration}
                                onChangeHandler={(e) => {
                                    if (e.target.value.length <= 5) setExpiration(e.target.value);
                                }}
                            />
                        </div>
                        <div className='flex flex-col items-start'>
                            <div className="flex gap-[10px] items-center justify-start">
                                <PaymentText>Security Code</PaymentText>
                                <div className='w-[15px] h-[15px] rounded-full text-[#fff] bg-[#888] flex items-center justify-center font-main text-[15px]'>?</div>
                                {/* <SecurityCodeIcon /> */}

                            </div>
                            <InputBox placeholder='123'
                                value={securityCode}
                                onChangeHandler={(e) => {
                                    if (e.target.value.length <= 3) setSecurityCode(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <button className='bg-[#c0447c] w-[100%] text-white flex items-center justify-center font-main rounded-[5px] mt-[15px] py-[12px]'
                        onClick={payHandler}
                    >
                        <div className="flex items-center justify-center">
                            <div className='inline ml-[-10px] mr-[10px]'><LockIcon /></div>
                            <div>Pay Now</div>
                        </div>
                    </button>
                    <ToastContainer
                        position="top-center"
                        autoClose={2000}
                        hideProgressBar
                        newestOnTop={false}
                        closeOnClick={false}
                        rtl={false}
                        pauseOnFocusLoss={false}
                        draggable={false}
                        pauseOnHover={false}
                        theme="dark"
                    />
                </div>
            </div>
        </div>
    )
}

export default PaymentPage;