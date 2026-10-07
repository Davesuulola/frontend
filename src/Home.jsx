import './App.css'
import { VscSearchLarge, VscLayoutSidebarLeftOff, VscNewSession, VscMic, VscAdd } from "react-icons/vsc";
import { useState } from 'react'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className='grid grid-cols-1 md:grid-cols-[260px_1fr] h-screen bg-black grid-rows-1 overflow-hidden'>
      <div className={`fixed inset-y-0 left-0 z-50 w-[260px] grid grid-rows-10 bg-black border-r border-zinc-800 shadow-2xl transition-transform duration-1000
        ${open ? 'translate-x-0' : '-translate-x-full'}
        md:static md:translate-x-0 md:shadow-none`}
      >
        <div className='row-span-1 grid grid-rows-6'>
          <div className='row-span-3 grid grid-cols-6 pt-2 pr-2'>
            <div className='col-span-4 text-white text-1xl font-bold pl-3 pt-1 '>
              <a href="#">Galaxy AI</a>
            </div>
            <div className='justify-center col-span-1 rounded-1xl border-zinc-400 flex pt-2 hover:bg-zinc-800 h-8 rounded-md '><VscSearchLarge className='text-white '/></div>
            <div className='justify-center col-span-1 rounded-1x1 border-zinc-400 flex pt-2 hover:bg-zinc-800 h-8 rounded-md'><VscLayoutSidebarLeftOff className='text-white cursor-pointer' onClick={() => setOpen(false)}/></div>
          </div>
          <div className='row-span-2 rounded-md pl-3 pr-3 pt-2'>
            <a href="#" >
              <div className='text-white flex text-1xl h-8 pl-2 pt-1 hover:bg-zinc-800 rounded-md '> 
                <div className='pt-1'><VscNewSession  /></div> 
                <p className='pl-2'>New Chat</p>
              </div>
            </a>
          </div>
        </div>
        <div className='row-span-8 overflow-auto [scrollbar-width:thin] [scrollbar-color:#3f3f46_#000000]'>

        </div>
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
      {/* click-catcher: blocks the main area while the sidebar is open */}
      {open && (
        <div
          className='fixed inset-0 z-40 bg-black/50 md:hidden'
          onClick={() => setOpen(false)}
        />
      )}

      {/* icon that appears when the sidebar is collapsed */}
      <button
        onClick={() => setOpen(true)}
        className='fixed top-3 left-3 z-30 text-white md:hidden'
      >
        <VscLayoutSidebarLeftOff  size={22} />
      </button>
      <div className='min-w-0 relative h-screen'>
        <div className='container h-120'>

        </div>
        <div className='absolute inset-x-0 bottom-0 px-4 pb-4 md:bottom-auto md:top-1/2 md:-translate-y-1/2'>
          <div className='bg-zinc-800 w-full max-w-[600px] p-1 pr-5 pl-5 text-white mx-auto rounded-4xl border-zinc-400 flex'>
            <div className='hover:bg-zinc-700 rounded-full w-10'>
                <a href="#" > <div className='p-3 ' > <VscAdd/> </div> </a>
            </div>
            <input type="text" className='min-w-0 w-full h-full p-3 outline-none' placeholder='Ask me anything' />
            <div className='hover:bg-zinc-700 rounded-full w-10'>
                <a href="#" > <div className='p-3 ' > <VscMic/> </div> </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App