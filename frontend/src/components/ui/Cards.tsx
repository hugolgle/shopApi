function Cards({
  icon,
  title,
  text,
  bis,
}: {
  icon: React.ReactNode;
  title: React.ReactNode;
  text: React.ReactNode;
  bis?: React.ReactNode;
}) {
  return (
    <div
      className={`flex w-full flex-col justify-end p-4 gap-y-6 rounded-2xl  ${
        bis
          ? "items-center bg-transparent ring ring-zinc-300"
          : "items-start bg-first"
      }`}
    >
      {icon}
      <h6 className="font-bold text-sm font-boldonse">{title}</h6>
      <p className={`text-sm ${bis && "text-center"}`}>{text}</p>
    </div>
  );
}

export default Cards;
