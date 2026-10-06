
import { VscSearchLarge, VscLayoutSidebarLeftOff, VscNewSession, VscMic, VscAdd } from "react-icons/vsc";

function Home() {

  return (
    <div className='grid grid-cols-8 h-screen bg-black'>
      <div className='col-span-1 grid grid-rows-10 border-zinc-800 border-r-1 h-screen'>
        <div className='row-span-1 grid grid-rows-6'>
          <div className='row-span-3 grid grid-cols-5 pt-2'>
            <div className='col-span-3 text-white text-1xl font-bold pl-3'>
              <a href="#">Galaxy AI</a>
            </div>
            <div className='justify-center col-span-1 rounded-full border-zinc-400 flex pl-1 pt-1'><VscSearchLarge className='text-white'/></div>
            <div className='justify-center col-span-1 rounded-full border-zinc-400 flex pr-2 pt-1'><VscLayoutSidebarLeftOff className='text-white'/></div>
          </div>
          <div className='row-span-2 rounded-md pl-3 pr-3'>
            <a href="#" >
              <div className='text-white flex text-1xl h-8 pl-2 pt-1 bg-zinc-800 rounded-md'> 
                <div className='pt-1'><VscNewSession  /></div> 
                <p className='pl-2'>New Chat</p>
              </div>
            </a>
          </div>
        </div>
        <div className='row-span-8 bg-black'></div>
        <div className='row-span-1 grid grid-rows-2 pl-3 pr-3'>
          <a href="#" className='col-span-1 rounded-2xl'>
            <div className=' grid grid-cols-5'>
              <div className='col-span-1 p-1'>
                <img src="profile.jpg" alt="Profile" className='w-full h-full object-cover rounded-4xl bg-zinc-800'/>
              </div>
              <div className='col-span-4 text-white pt-2 pl-2'>
                Joseph Adebitan
              </div>
            </div>
          </a>
          <div className='row-span-1'></div>

        
        </div>
      </div>
      <div className='col-span-7'>
        <div className='container h-120'>

        </div>
        <div className='bg-zinc-800 w-1/2 p-1 pr-5 pl-5 text-white m-auto rounded-4xl border-zinc-400 flex height-16'>
          <div className='pt-4'>
            <VscAdd/>
          </div>
          <input type="text" className='w-full h-full p-3 outline-none' placeholder='Ask me anything' />
          <div className='pt-4'>
            <VscMic />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
