function OtherInfo() {
  return (
    <div>
      <div className="d-flex justify-content-around bg-light text-dark pt-5 pb-5 mb-5">
        <div>
          <i>
            <h5>FREE SHIPPING</h5>
            <p className="opacity-50">Free shipping woelwide</p>
          </i>
        </div>
        <div>
          <i>
            <h5>24 X 7 SERVICES</h5>
            <p className="opacity-50">Free shipping woelwide</p>
          </i>
        </div>
        <div>
          <i>
            <h5>FESTIVAL OFFER</h5>
            <p className="opacity-50">Free shipping woelwide</p>
          </i>
        </div>
      </div>
      <div className="d-flex justify-content-between mb-5">
        <div>
          <i>
            <h5>LET'S BE FRIENDS!</h5>
            <p className="opacity-50">
              Nisi nisi tempor consequat laboris nisi.
            </p>
          </i>
        </div>
        <div>
          <input
            type="email"
            placeholder="Enter your email address"
            style={{ height: "3.5rem", width: "22rem", paddingLeft: "1rem" }}
          />
          <button
            style={{ height: "3.5rem", width: "8rem" }}
            className="bg-dark text-white"
          >
            Subcribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default OtherInfo;
