import cartIcon from "../../assets/cart-icon.png";

const Header = () => {
  return (
    <div className="header flex items-center justify-between px-2 py-3 shadow-[0_3px_4px_1px_#dedede]">
      <p className="app-name m-0 font-bold">Food App</p>
      <div className="cart relative">
        <img src={cartIcon} alt="cart-icon" className="w-6 h-6" />
        <p
          style={{ backgroundColor: "rgb(250, 57, 57)" }}
          className="total-cart-item m-0 text-white w-4 rounded-2xl text-center text-[8px] leading-4 absolute bottom-0 left-0"
        >
          {10}
        </p>
      </div>
    </div>
  );
};

export default Header;
