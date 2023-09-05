function Support() {
  return (
    <div className="position-fixed support-wrapper bg-white animation-sp">
      <div className="d-flex justify-content-between border-bottom pb-3">
        <h5 className="ps-2 custom-sp pt-3 ps-4">Customer Support</h5>
        <p className=" px-2 py-1 me-3 mt-3 letchat">Let's Chat App</p>
      </div>
      <div className="content-sp"></div>
      <div className="bg-ccc py-3 border-top bg-light d-flex ">
        <div>
          <i className="fa fa-user-circle-o fs-7 ms-3 text-primary cursor p-1"></i>
        </div>
        <div>
          <input
            className="ms-2 cursor px-2 py-1 mt-1 rounded input"
            style={{ border: "none", minHeight: 10 }}
            type="text"
            placeholder="Enter Message!"
          />
        </div>
        <div>
          <i className="fa fa-paperclip fs-8 ms-2 opacity-50 cursor p-1"></i>
        </div>
        <div>
          <i className="	fa fa-meh-o fs-8 ms-2 opacity-50 cursor p-1"></i>
        </div>
        <div>
          <i className="fa fa-send fs-8 ms-2 text-primary opacity-75 cursor p-1"></i>
        </div>
      </div>
    </div>
  );
}

export default Support;
