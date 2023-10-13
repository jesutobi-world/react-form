
const AddOns = ({formData, setFormData}) => {
    
  return (
    <div className="flex flex-col gap-5">
        <label htmlFor="service" className={`w-full h-auto p-3 flex gap-4 justify-start border border-solid border-coolGray rounded-md items-center ${formData.onlineService === true && 'bg-mangolia border-purpleishBlue'}`} >
            <input type="checkbox" id="service" onClick={() => setFormData({ ...formData, onlineService: !formData.onlineService })} />
            <div>
                <div className="text-marineBlue font-semibold text-[13px]">Online service</div>
                <div className="text-coolGray text-[11px] font-medium">Access to multiplayer games</div>
            </div>
            <p className="ml-auto text-[12px] font-medium text-purpleishBlue">+${formData.planSubscription === 'Monthly' ? 1: 10}/{formData.planSubscription === 'Monthly' ? 'mo': 'yr'}</p>
        </label>
        <label htmlFor="storage" className={`w-full h-auto p-3 flex gap-4 justify-start border border-solid border-coolGray rounded-md items-center ${formData.largeStorage === true && 'bg-mangolia border-purpleishBlue'}`}>
            <input type="checkbox" id="storage" onClick={() => setFormData({ ...formData, largeStorage: !formData.largeStorage })} />
            <div>
                <div className="text-marineBlue font-semibold text-[13px]">Larger storage</div>
                <div className="text-coolGray text-[11px] font-medium">Extra 1TB of cloud save</div>
            </div>
            <p className="ml-auto text-[12px] font-medium text-purpleishBlue">+${formData.planSubscription === 'Monthly' ? 2: 20}/{formData.planSubscription === 'Monthly' ? 'mo': 'yr'}</p>
        </label>
        <label htmlFor="profile" className={`w-full h-auto p-3 flex gap-4 justify-start border border-solid border-coolGray rounded-md items-center ${formData.customizableProfile === true && 'bg-mangolia border-purpleishBlue'}`} >
            <input type="checkbox" id="profile" onClick={() => setFormData({ ...formData, customizableProfile: !formData.customizableProfile })} />
            <div>
                <div className="text-marineBlue font-semibold text-[13px]">Customizable profile</div>
                <div className="text-coolGray text-[11px] font-medium">Custom theme on your profile</div>
            </div>
            <p className="ml-auto text-[12px] font-medium text-purpleishBlue">+${formData.planSubscription === 'Monthly' ? 2: 20}/{formData.planSubscription === 'Monthly' ? 'mo': 'yr'}</p>
        </label>
    </div>
  )
}

export default AddOns