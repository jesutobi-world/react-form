
const Plan = ({duration, setDuration, formData, setFormData}) => {

    const toggleSubscription = () => {
        if (duration === 'Monthly') {
          setDuration('Yearly');
          setSubscription('Yearly')
        } else {
          setDuration('Monthly');
          setSubscription('Monthly')
        }
      };
  return (
    <div className="flex flex-col gap-6">
        <div className="flex gap-3">
            <div className={`w-[122px] h-40 border border-solid border-lightGray flex flex-col p-4 rounded-md justify-between cursor-pointer ${duration === 'Monthly' ? 'h-40' : 'h-44'}`} onClick={() => setFormData({ ...formData, planName: "Arcade" })}>
                <div>
                    <img src="/assets/images/icon-arcade.svg" alt="icon" />
                </div>
                <div>
                    <h2 className="text-marineBlue font-semibold text-base">Arcade</h2>
                    <p className="text-coolGray text-sm flex "><p>{duration === 'Monthly' ? '$9' : '$90'}</p>/<p>{duration === 'Monthly' ? 'mo' : 'yr'}</p></p>
                    <p className={`text-marineBlue font-medium text-[13px] ${duration === 'Monthly' ? 'hidden' : ''}`}>2 months free</p>
                </div>
            </div>
            <div className={`w-[122px] h-40 border border-solid border-lightGray flex flex-col p-4 rounded-md justify-between cursor-pointer ${duration === 'Monthly' ? 'h-40' : 'h-44'}`} onClick={() => setFormData({ ...formData, planName: "Advanced" })}>
                <div>
                    <img src="/assets/images/icon-advanced.svg" alt="icon" />
                </div>
                <div>
                    <h2 className="text-marineBlue font-semibold text-base">Advanced</h2>
                    <p className="text-coolGray text-sm flex"><p>{duration === 'Monthly' ? '$12' : '$120'}</p>/<p>{duration === 'Monthly' ? 'mo' : 'yr'}</p></p>
                    <p className={`text-marineBlue font-medium text-[13px] ${duration === 'Monthly' ? 'hidden' : ''}`}>2 months free</p>
                </div>
            </div>
            <div className={`w-[122px] h-40 border border-solid border-lightGray flex flex-col p-4 rounded-md justify-between cursor-pointer ${duration === 'Monthly' ? 'h-40' : 'h-44'}`} onClick={() => setFormData({ ...formData, planName: "Pro" })}>
                <div>
                    <img src="/assets/images/icon-pro.svg" alt="icon" />
                </div>
                <div>
                    <h2 className="text-marineBlue font-semibold text-base">Pro</h2>
                    <p className="text-coolGray text-sm flex"><p>{duration === 'Monthly' ? '$15' : '$150'}</p>/<p>{duration === 'Monthly' ? 'mo' : 'yr'}</p></p>
                    <p className={`text-marineBlue font-medium text-[13px] ${duration === 'Monthly' ? 'hidden' : ''}`}>2 months free</p>
                </div>
            </div>
        </div>
        <div className="h-auto p-2 w-full items-center justify-center bg-mangolia rounded-md gap-3 flex">
            <p className="text-coolGray text-sm font-medium">Monthly</p>
            <div className="bg-marineBlue rounded-full p-1 w-9 h-auto cursor-pointer" onClick={toggleSubscription}>
                <div className={ `bg-white w-3 h-3 rounded-full ${duration === 'Monthly' ? 'self-start' : 'ml-auto'}`} ></div>
            </div>
            <p className="text-coolGray text-sm font-medium">Yearly</p>
        </div>
    </div>
  )
}

export default Plan