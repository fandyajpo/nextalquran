const Screen = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="md:max-w-2xl lg:max-w-4xl duration-500 xl:max-w-7xl w-screen h-fit flex flex-col items-stretch grow flex-shrink-0 gap-x-4 md:p-2 py-2">
      {children}
    </div>
  );
};

export default Screen;
