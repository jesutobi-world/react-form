
const Summary = () => {
  return (
    <div className="w-full h-auto flex flex-col gap-1">
        <div className="w-full h-auto p-4 bg-mangolia rounded-md flex flex-col gap-3">
            <div className="flex justify-between items-center">
                <div className="flex justify-between items-start flex-col" >
                    <p className="text-marineBlue font-semibold text-base">Arcade(Monthly)</p>
                    <a href="" className="text-coolGray text-sm underline">Change</a>
                </div>
                <p className="text-marineBlue text-base font-semibold ">$9/mo</p>
            </div>
            <hr/>
            <div className="flex justify-between">
                <p className="text-coolGray text-sm">Online Service</p>
                <p className="text-coolGray text-sm">+$1/mo</p>
            </div>
            <div className="flex justify-between">
                <p className="text-coolGray text-sm">Larger storage</p>
                <p className="text-coolGray text-sm">+$2/mo</p>
            </div>
        </div>
        <div className="flex justify-between p-4">
            <p className="text-coolGray text-sm">Total(per month)</p>
            <p className="text-purpleishBlue text-lg font-semibold">+$12/mo</p>
        </div>
    </div>
  )
}

export default Summary