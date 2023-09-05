function BannerShop(props) {
  const type = props.type.toUpperCase();
  return (
    <div className="d-flex justify-content-between bg-light p-5 ">
      <h2>{type}</h2>
      <p className="fs-6 opacity-75">{type}</p>
    </div>
  );
}

export default BannerShop;
