function Banner() {
  return (
    <div className="flex flex-col items-center pl-4 space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12 lg:pl-16">
      <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
        {`I'm Paul Santos`}
      </h1>
      <p className="max-w-xs text-center text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        🧑🏽‍💻 Software Engineer
        <br />
        🚀 Bringing Creative Ideas To Life
      </p>
    </div>
  );
}

export default Banner;
