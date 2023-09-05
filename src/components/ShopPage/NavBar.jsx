import { useSelector, useDispatch } from "react-redux";

import { shopAction } from "../../store/Redux";

function NavBar() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.shop.category);

  //khi click vào  sẽ hiện giống NavLink
  const renderHanle = (text) => {
    return (
      <p
        onClick={() => {
          dispatch(shopAction.setCategory(text));
          window.scrollTo({ top: 220 });
        }}
        className={`py-2 ps-3 text-muted ${
          category === text ? "active" : null
        }`}
      >
        {text}
      </p>
    );
  };

  return (
    <div>
      <h4 className="py-3 ">CATEGORIES</h4>
      <div className="navbar-shop">
        <h6 className="py-3 bg-dark text-white ps-3">APPLE</h6>
        {renderHanle("all")}
        <h6 className="py-2 bg-light  ps-3">IPHONE & MAC</h6>
        {renderHanle("iphone")}
        {renderHanle("ipad")}
        {renderHanle("macbook")}
        <h6 className="py-3 bg-light  ps-3">WIRELESS</h6>
        {renderHanle("airpod")}
        {renderHanle("watch")}
        <h6 className="py-3 bg-light  ps-3">OTHER</h6>
        {renderHanle("mouse")}
        {renderHanle("keyboard")}
        {renderHanle("other")}
      </div>
    </div>
  );
}

export default NavBar;
