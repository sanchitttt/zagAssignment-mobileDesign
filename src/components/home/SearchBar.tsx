import { useState } from 'react';
import { SearchIcon } from '../../icons'

function SearchBar() {
    const [text, setText] = useState("");
    return (
        <div className='w-[260px] flex items-center justify-center h-[50px] rounded-[30px] bg-[#F3F4F5]'>
            <div className='mr-[10px]'>
                <SearchIcon />
            </div>
            <div>
                <input
                    className={`bg-transparent font-main h-[100%] search`}
                    type='text'
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                    placeholder='Search...'
                /></div>
        </div>
    )
}

export default SearchBar