import { RefreshCw } from "lucide-react";
import React from "react";
import { toast } from "react-toastify";

const SelectedCard = ({ count, setCount, setBtnToggle }) => {
  // adding total value
  let sumPrice = 0;
  for (let item of count) {
    sumPrice = sumPrice + item.price;
  }

  const handleDeleteCardItem = (cardInfo) => {
    const removeItem = count.filter((item) => item.name != cardInfo.name);
    setCount(removeItem);
    toast.warning("Card successfully removed");
  };

  const removeAllCards = () => {
    setCount([]);
    toast.info(" Payment is successful");
  };

  return (
    <div className="border border-[#F2F2F2] p-10 rounded-2xl">
      <h2 className="font-bold text-2xl text-[#101727] mb-6">Your Cart</h2>
      <div>
        {count.length === 0 ? (
          <div className="flex justify-center items-center py-4">
            <div className="text-center">
              <div className="flex justify-center items-center mb-2">
                <RefreshCw></RefreshCw>
              </div>
              <h2 className="font-extrabold text-2xl text-[#627382] mb-2">
                No card selected yet
              </h2>
              <p className="font-bold text-base text-[#627382]">
                Go to the{" "}
                <a
                  onClick={() => setBtnToggle("available")}
                  style={{
                    textDecorationLine: "underline",
                    color: "pink",
                  }}
                  href="#"
                >
                  product tab
                </a>{" "}
                to select card
              </p>
            </div>
          </div>
        ) : (
          count.map((cardInfo, index) => (
            <div
              key={index}
              className="bg-[#F9FAFC] rounded-2xl px-5 py-6 mb-4 sm:flex justify-between items-center"
            >
              <div className="sm:flex items-center gap-4 mb-4 sm:mb-0">
                <div className="border border-[#F2F2F2] w-15 h-15 flex justify-center items-center rounded-full">
                  <img className="w-8 h-8" src={cardInfo.icon} alt="" />
                </div>

                <div>
                  <h2 className="font-semibold text-xl text-[#101727] mb-2">
                    {cardInfo.name}
                  </h2>
                  <span className="font-medium text-base leading-5 text-[#627382]">
                    ${cardInfo.price}
                  </span>
                </div>
              </div>
              <div>
                <button
                  onClick={() => handleDeleteCardItem(cardInfo)}
                  className="btn font-bold text-base text-[#FF3980]"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className={`${count.length === 0 ? "hidden" : "block"}`}>
        <div className="flex justify-between items-center mb-8">
          <span className="font-normal text-base text-[#627382]">Total:</span>
          <strong className="font-bold text-2xl text-[#101727]">
            ${sumPrice}
          </strong>
        </div>
        <div>
          <button
            onClick={removeAllCards}
            className="w-full rounded-full btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectedCard;
