// eslint-disable-next-line react/prop-types
const OnBoard = ({ children }: any) => {
  return (
    <div className="flex items-center justify-center h-screen bg-secondary bg-opacity-50">
      <div className="bg-background-foreground p-10 rounded-xl min-w-[400px]">
        {children}
      </div>
    </div>
  );
};

export default OnBoard;
