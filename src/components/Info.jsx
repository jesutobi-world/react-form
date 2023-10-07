const Info = ({ formData, setFormData }) => {
    return (
      <div className="flex flex-col gap-3">
        <label className="flex flex-col gap-2 text-marineBlue text-sm font-medium" htmlFor="name">Name
          <input id="name" type="text" placeholder="e.g. Stephen King" className="border border-solid border-lightGray rounded-md p-3 text-sm" value={formData.userName} onChange={(event) => setFormData({ ...formData, userName: event.target.value })} />
        </label>
        <label className="flex flex-col gap-2 text-marineBlue text-sm font-medium" htmlFor="email">Email Address
          <input id="email" type="text" placeholder="e.g. stephenking@lorem.com" className="border border-solid border-lightGray rounded-md p-3 text-sm" value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} />
        </label>
        <label className="flex flex-col gap-2 text-marineBlue text-sm font-medium" htmlFor="phone">Phone Number
          <input id="phone" type="text" placeholder="e.g. + 1 234 567 890" className="border border-solid border-lightGray rounded-md p-3 text-sm" value={formData.phoneNumber} onChange={(event) => setFormData({...formData, phoneNumber: event.target.value})}/>
        </label>
      </div>
    );
  };
  
  export default Info;
  