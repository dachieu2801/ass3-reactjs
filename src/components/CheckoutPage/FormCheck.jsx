function Form() {
  function inputEl(types) {
    const upperCase = types.toUpperCase();
    return (
      <div>
        <label className="opacity-75">{upperCase}</label>
        <br />
        <input
          className="ps-3 py-1 mt-2 mb-4 w-100"
          type="text"
          placeholder={`Enter Your ${types} Here!`}
        />
      </div>
    );
  }
  
  return (
    <form>
      {inputEl("Full Name")}
      {inputEl("Email")}
      {inputEl("Phone Number")}
      {inputEl("Address")}
      <button className="px-3 py-1 bg-dark text-white fs-6">Place order</button>
    </form>
  );
}

export default Form;
