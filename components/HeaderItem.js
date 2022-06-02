function HeaderItem({ title, Icon }) {
  return (
    <div className="flex flex-col group items-center w-12 hover:text-white sm:w-20 cursor-pointer">
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className="tracking-widest opacity-0 group-hover:opacity-100">
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;
