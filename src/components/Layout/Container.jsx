const Container = ({ children }) => {
  return (
    <div className="container bg-slate-600 p-0 w-[350px] m-auto min-h-[700px] shadow-[2px_2px_11px_2px_#82828] flex flex-col mt-[24px] rounded-lg overflow-hidden">
      {children}
    </div>
  );
};

export default Container;
