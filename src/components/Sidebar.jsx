
const Sidebar = ({page, setPage}) => {
  return (
    <div className="bg-sideBarMobile lg:bg-sideBarDesktop pt-8 pl-4 pr-10 w-auto h-[450px] rounded-md bg-no-repeat bg-cover flex flex-col gap-6 justify-start items-start">
        <div className="flex gap-4 items-center">
          <div className={`h-8 w-8 rounded-full flex items-center justify-center border border-solid border-white cursor-pointer font-semibold ${page === 0 ? 'bg-lightBlue border-none text-marineBlue' : 'text-white'}`} onClick={() => setPage(0)}>1</div>
          <div className="">
            <div className="text-lightGray font-thin text-[12px]">STEP 1</div>
            <div className="text-white font-medium text-[13px]">YOUR INFO</div>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className={`h-8 w-8 rounded-full flex items-center justify-center border border-solid border-white cursor-pointer font-semibold ${page === 1 ? 'bg-lightBlue border-none text-marineBlue' : 'text-white'}`} onClick={() => setPage(1)}>2</div>
          <div className="">
            <div className="text-lightGray font-thin text-[12px]">STEP 2</div>
            <div className="text-white font-medium text-[13px]">SELECT PLAN</div>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className={`h-8 w-8 rounded-full flex items-center justify-center border border-solid border-white cursor-pointer font-semibold ${page === 2 ? 'bg-lightBlue border-none text-marineBlue' : 'text-white'}`} onClick={() => setPage(2)}>3</div>
          <div className="">
            <div className="text-lightGray font-thin text-[12px]">STEP 3</div>
            <div className="text-white font-medium text-[13px]">ADD-ONS</div>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className={`h-8 w-8 rounded-full flex items-center justify-center border border-solid border-white cursor-pointer font-semibold ${page === 3 ? 'bg-lightBlue border-none text-marineBlue' : 'text-white'}`} onClick={() => setPage(3)}>4</div>
          <div className="">
            <div className="text-lightGray font-thin text-[12px]">STEP 4</div>
            <div className="text-white font-medium text-[13px]">SUMMARY</div>
          </div>
        </div>
    </div>
  )
}

export default Sidebar


// sidebar in page