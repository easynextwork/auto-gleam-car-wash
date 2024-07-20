const Heading = ({
  title,
  extraClasses,
}: {
  title: string;
  extraClasses?: string;
}) => {
  return (
    <div className="w-fit">
      <h2 className={`uppercase text-secondary ${extraClasses}`}>{title}</h2>
      <hr
        className={`my-1 h-2 border-t-0 bg-transparent bg-gradient-to-r from-transparent via-secondary to-transparent opacity-70`}
      />
    </div>
  );
};

export default Heading;
