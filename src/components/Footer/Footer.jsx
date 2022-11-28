import currency from "../../utils/currency";

const Footer = ({ totalPrice }) => {
  return (
    <div className="footer py-4 px-3">
      <button className="btn-submit flex justify-between py-2 px-6 bg-[#4caf50] w-full border border-solid border-[#4caf50] rounded-3xl">
        Cart <div>{currency(totalPrice)}</div>
      </button>
    </div>
  );
};

export default Footer;
