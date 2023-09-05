import { useState } from "react";

function LongDes(props) {
  const product = props.product;
  const [isLongDes, setIsLongDesc] = useState(true);
  //sua long description
  const longDes = product["long_desc"].split("\n");

  return (
    <div className="mb-5">
      <button
        className="bg-dark text-white py-1 px-3"
        onClick={() => setIsLongDesc(!isLongDes)}
      >
        DESCRIPTION
      </button>
      {isLongDes && (
        <>
          <h6 className="my-3">PRODUCT DESCRIPTION</h6>
          {longDes.map((des, i) => (
            <p key={i} style={{ opacity: 0.6, fontSize: "0.9rem" }}>
              {des}
            </p>
          ))}
        </>
      )}
    </div>
  );
}

export default LongDes;
