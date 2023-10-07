
const AddOns = () => {
  return (
    <div className="flex flex-col gap-5">
        <label htmlFor="service" className="w-full h-auto p-3 flex gap-4 justify-start border border-solid border-coolGray rounded-md items-center">
            <input type="checkbox" name="" id="service" />
            <div>
                <div className="text-marineBlue font-semibold text-[13px]">Online service</div>
                <div className="text-coolGray text-[11px] font-medium">Access to multiplayer games</div>
            </div>
            <p className="ml-auto text-[12px] font-medium text-purpleishBlue">$1/mo</p>
        </label>
        <label htmlFor="storage" className="w-full h-auto p-3 flex gap-4 justify-start border border-solid border-coolGray rounded-md items-center">
            <input type="checkbox" name="" id="storage" />
            <div>
                <div className="text-marineBlue font-semibold text-[13px]">Larger storage</div>
                <div className="text-coolGray text-[11px] font-medium">Extra 1TB of cloud save</div>
            </div>
            <p className="ml-auto text-[12px] font-medium text-purpleishBlue">$2/mo</p>
        </label>
        <label htmlFor="profile" className="w-full h-auto p-3 flex gap-4 justify-start border border-solid border-coolGray rounded-md items-center">
            <input type="checkbox" name="" id="profile" />
            <div>
                <div className="text-marineBlue font-semibold text-[13px]">Customizable profile</div>
                <div className="text-coolGray text-[11px] font-medium">Custom theme on your profile</div>
            </div>
            <p className="ml-auto text-[12px] font-medium text-purpleishBlue">$2/mo</p>
        </label>
    </div>
  )
}

export default AddOns