import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { popUpAction } from "../../store/Redux";
import usePrice from "../../hooks/usePrice";

function PopUp(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // lấy data
  const product = props.product;

  //chuyển thành số có dấu chấm ngăn cách
  let price = usePrice(product.price);
  //close PopUp
  const closePopUpHandle = () => {
    dispatch(popUpAction.falseAnimation());
    setTimeout(() => dispatch(popUpAction.falseShow()), 100);
  };

  return (
    <>
      <i onClick={closePopUpHandle} className="fa fa-close "></i>
      <div className="popup-wrapper">
        <img
          src={product.img1}
          alt={product.name}
          width="100%"
          className="pb-5  ps-3"
        />
        <div className="mt-4 me-4">
          <h5 className="mb-1">
            <i>{product.name}</i>
          </h5>
          <p style={{ opacity: 0.7 }}>
            <i>{price} VND</i>
          </p>
          <p style={{ fontSize: "0.95rem" }} className="opacity-50">
            <i>{product["short_desc"]}</i>
          </p>
          <button
            className="bg-dark text-light mt-3 px-4 py-2 mb-5"
            onClick={() => {
              navigate(`/detail/${product["_id"]["$oid"]}`);
              dispatch(popUpAction.falseShow());
              window.scrollTo({ top: 0 });
            }}
          >
            <i className="fa fa-shopping-cart me-2"></i>
            <i>View Detail</i>
          </button>
        </div>
      </div>
    </>
  );
}

export default PopUp;
