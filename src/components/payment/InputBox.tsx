interface InputBoxProps {
    className?: string,
    placeholder?: string,
    type?: 'CardNumber' | undefined,
    value: string | number,
    onChangeHandler: React.ChangeEventHandler<HTMLInputElement>
}

function InputBox({ className, placeholder, type, value, onChangeHandler }: InputBoxProps) {
    if (type === 'CardNumber') {
        return (
            <input
                className={`${className} w-[100%] inputBox font-main pl-[5px]`}
                type='text'
                placeholder={placeholder}
                onChange={onChangeHandler}
                value={value}
            />
        )
    }
    return (
        <input
            className={`${className} w-[100%] inputBox font-main pl-[5px]`}
            type='text'
            placeholder={placeholder}
            onChange={onChangeHandler}
            value={value}

        />
    )

}

export default InputBox