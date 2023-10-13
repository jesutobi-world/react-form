
const Summary = ({formData, setFormData}) => {
  let subscriptionPrice = "";
  if (formData.planName === "Arcade") {
    subscriptionPrice = formData.planSubscription === "Monthly" ?   9  :   90    ;
  } else if (formData.planName === "Advanced") {
    subscriptionPrice = formData.planSubscription === "Monthly" ?   12     :  120  ;
  } else if (formData.planName === "Pro") {
    subscriptionPrice = formData.planSubscription === "Monthly" ?   15     :  150  ;
  }

    // Calculate the individual service costs
    const onlineServiceCost = formData.onlineService ? (formData.planSubscription === 'Monthly' ? 1 : 10) : 0;
    const largeStorageCost = formData.largeStorage ? (formData.planSubscription === 'Monthly' ? 2 : 20) : 0;
    const customizableProfileCost = formData.customizableProfile ? (formData.planSubscription === 'Monthly' ? 2 : 20) : 0;
  
    // Calculate the total cost
    const totalCost = subscriptionPrice + onlineServiceCost + largeStorageCost + customizableProfileCost;
  
  return (
    <div className="w-full h-auto flex flex-col gap-1">
        <div className="w-full h-auto p-4 bg-mangolia rounded-md flex flex-col gap-3">
            <div className="flex justify-between items-center">
                <div className="flex justify-between items-start flex-col" >
                    <p className="text-marineBlue font-semibold text-base">{formData.planName} ({formData.planSubscription})</p>
                    <a href="" className="text-coolGray text-sm underline">Change</a>
                </div>
                <p className="text-marineBlue text-base font-semibold ">${subscriptionPrice}/{formData.planSubscription === 'Monthly' ? 'mo': 'yr'}</p>
            </div>
            <hr/>
            <div className={`flex justify-between ${formData.onlineService === true ? 'flex' : 'hidden'}`}>
                <p className="text-coolGray text-sm">Online Service</p>
                <p className="text-coolGray text-sm">+${formData.planSubscription === 'Monthly' ? 1: 10}/{formData.planSubscription === 'Monthly' ? 'mo': 'yr'}</p>
            </div>
            <div className={`flex justify-between ${formData.largeStorage === true ? 'flex' : 'hidden'}`}>
                <p className="text-coolGray text-sm">Larger storage</p>
                <p className="text-coolGray text-sm">+${formData.planSubscription === 'Monthly' ? 2: 20}/{formData.planSubscription === 'Monthly' ? 'mo': 'yr'}</p>
            </div>
            <div className={`flex justify-between ${formData.customizableProfile === true ? 'flex' : 'hidden'}`}>
                <p className="text-coolGray text-sm">Customizable Profile</p>
                <p className="text-coolGray text-sm">+${formData.planSubscription === 'Monthly' ? 2: 20}/{formData.planSubscription === 'Monthly' ? 'mo': 'yr'}</p>
            </div>
        </div>
        <div className="flex justify-between p-4">
            <p className="text-coolGray text-sm">Total(per month)</p>
            <p className="text-purpleishBlue text-lg font-semibold">+${totalCost}/{formData.planSubscription === 'Monthly' ? 'mo': 'yr'}</p>
        </div>
    </div>
  )
}

export default Summary