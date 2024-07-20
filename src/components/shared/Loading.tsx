export const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-40 flex h-screen items-center justify-center overflow-hidden bg-primary">
      <div className="loader">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
};
