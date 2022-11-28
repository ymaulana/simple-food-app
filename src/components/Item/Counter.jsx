const Counter = () => {
  const buttonStyle =
    "bg-transparent border border-[#4caf50] border-solid text-[#4caf50] font-bold w-6 h-6 rounded cursor-pointer ";
  return (
    <div className="counter flex box-content w-full justify-between gap-1 mt-10">
      <button className={buttonStyle}>-</button>
      <input
        type="number"
        className="min-w-[10px] flex-1 bg-slate-400 border border-[#4caf50] border-solid font-bold text-center h-[24px] rounded p-0"
      />
      <button className={buttonStyle}>+</button>
    </div>
  );
};

export default Counter;
