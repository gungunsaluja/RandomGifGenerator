


import Random from './Components/Random';
import Tag from './Components/Tag';

function App() {
  

  return (
    <div className='w-full h-screen flex flex-col background relative bg-black overflow-x-hidden items-center'>
     <h1 className="bg-white absolute w-11/12 text-center rounded-lg mt-[40px] px-10 py-2 text-4xl font-bold ">RANDOM GIFS</h1>
     <div className='flex flex-col w-full items-center gap-y-10 mt-[100px]'>
      <Random/>
      <Tag/>
     </div>
    </div>
  )
}

export default App
