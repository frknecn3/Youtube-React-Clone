import {Link, useNavigate} from 'react-router-dom'
import {AiOutlineSearch,AiFillBell,AiFillVideoCamera} from 'react-icons/ai'

const Header = () => {

    
    const navigate = useNavigate()


    const handleSubmit = (e)=>{
        e.preventDefault()
        const query = e.target[0].value
        // kullanıcıyı arama sonuçları sayfasına yöneldnirme
        navigate(`/results?search_query=${query}`)
    }
  return (
    <header className='flex justify-between items-center p-4'>
        <Link to={'/'} className='flex items-center gap-[10px]'>
            <img className='w-[50px] md:w-[40px]' src='../../public/Youtube_logo.png' alt="" />
            <h1 className='text-2xl font-bold hidden md:block'>YouTube</h1>
        </Link>

        <form onSubmit={handleSubmit}  className='flex items-center border border-gray-500 rounded-[20px]' action="">
            <input type='search' className='bg-black outline-none rounded-[20px] px-3 py-1' />
            <button className='grid place-items-center border-l px-2 h-full text-xl'>
                <AiOutlineSearch></AiOutlineSearch>
            </button>
        </form>

        <div className='flex gap-3 text-xl cursor-pointer'>
            <AiFillBell></AiFillBell>
            <AiFillVideoCamera></AiFillVideoCamera>
        </div>
    </header>
  )
}

export default Header