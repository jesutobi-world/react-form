import { useState } from "react"
import Sidebar from './Sidebar'
import Info from './Info'
import Plan from "./Plan"
import AddOns from "./AddOns"
import Summary from "./Summary"
import ThankYou from "./ThankYou";

const Form = () => {
    const [page, setPage] = useState(0)
    const FormTitles = ["Personal info", "Select your plan", "Pick add-ons", "Finishing up"]
    const FormParagraph = ["Please provide your name, email address, and phone number.", "You have the option of monthly or yearly billing.", "Add-ons help enhance your gaming experience.", "Double-check everything looks OK before confirming"]
    const [duration, setDuration] = useState('Monthly')
    const [formData, setFormData] = useState({
        userName: "",
        email: "",
        phoneNumber: "",
        planName: "Arcade",
        planSubscription: "Monthly",
        onlineService: false,
        largeStorage: false,
        customizableProfile: false
    })
    const PageDisplay = () => {
        if (page === 0) {
            return <Info formData={formData} setFormData={setFormData} />
        }
        else if (page === 1) {
            return <Plan duration={duration} setDuration={setDuration} formData={formData} setFormData={setFormData} />
        }
        else if (page === 2) {
            return <AddOns formData={formData} setFormData={setFormData} />
        }
        else {
            return <Summary formData={formData} setFormData={setFormData} />
        }
    }

    return (
        <div className="bg-white h-auto w-auto rounded-md overflow-hidden flex justify-center p-4 gap-4 min">
            <Sidebar page={page} setPage={setPage} />
            <div className="h-auto w-auto flex flex-col gap-4 pr-16 pl-8 justify-start pt-9 min-w-[470px]">
                <header>
                    <h1 className="text-marineBlue font-bold text-3xl pb-2">{FormTitles[page]}</h1>
                    <p className="text-sm text-coolGray">{FormParagraph[page]}</p>
                </header>
                <main>
                    {PageDisplay()}
                </main>
                <footer className="h-auto w-full flex justify-between items-center mt-auto">
                    <button className={`text-coolGray ${page === 0 ? 'hidden' : ''}`} onClick={() => {
                        setPage((currPage) => currPage - 1);
                    }}
                    >Go Back</button>
                    {page === FormTitles.length - 1 ?
                        <button className='bg-purpleishBlue pt-2 pb-2 pl-4 pr-4 text-sm rounded-md text-mangolia w-fit cursor-pointer ml-auto'>
                            Confirm
                        </button> :
                        <button className='bg-marineBlue pt-2 pb-2 pl-4 pr-4 text-sm rounded-md text-mangolia w-fit cursor-pointer ml-auto' onClick={() => {
                            setPage((currPage) => currPage + 1);
                        }}
                        >Next Step</button>
                    }
                </footer>
            </div>
        </div>
    )
}

export default Form