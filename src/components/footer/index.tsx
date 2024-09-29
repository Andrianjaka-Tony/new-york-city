export function Footer() {
  return (
    <footer className="w-full px-5">
      <div className="flex gap-4 sm:max-lg:flex-wrap">
        <div className="w-3/5 sm:max-lg:w-full bg-gray-950 text-white p-8 rounded-lg">
          <p className="text-xl font-semibold tracking-tight">Are you amazed?</p>
          <p className="text-2xl mt-1 font-light">Come visit us, we won't bite you</p>
          <p className="text-6xl font-semibold mt-56 tracking-tighter">Book a flight</p>
        </div>
        <div className="w-2/5 sm:max-lg:w-full bg-red-200 p-8 rounded-lg">
          <p className="text-xl font-semibold tracking-tight">Have a doubt?</p>
          <p className="text-2xl mt-1 font-light">If you have a question, you cas ask us!</p>
          <p className="text-6xl font-semibold mt-56 tracking-tighter">Contact</p>
        </div>
      </div>
      <div className="flex mt-24 gap-32 sm:max-lg:gap-4 sm:max-lg:flex-wrap">
        <Navigation />
        <Socials />
        <Email />
      </div>
      <Credits />
    </footer>
  );
}

function Navigation() {
  return (
    <div className="flex justify-between sm:max-lg:justify-start sm:max-lg:gap-2 sm:max-lg:w-[calc(50%-0.5rem)]">
      <p className="mt-2.5 sm:max-lg:text-xs sm:max-lg:mt-1 uppercase text-sm font-light">explore</p>
      <div className="ml-12 flex flex-col">
        <p className="text-4xl sm:max-lg:text-2xl tracking-tight font-semibold leading-normal">Home</p>
        <p className="text-4xl sm:max-lg:text-2xl tracking-tight font-semibold leading-normal">Attractions</p>
        <p className="text-4xl sm:max-lg:text-2xl tracking-tight font-semibold leading-normal">Restaurants</p>
      </div>
    </div>
  );
}

function Socials() {
  return (
    <div className="flex justify-between sm:max-lg:justify-start sm:max-lg:gap-2 sm:max-lg:w-[calc(50%-0.5rem)]">
      <p className="mt-2.5 sm:max-lg:text-xs sm:max-lg:mt-1 uppercase text-sm font-light">social</p>
      <div className="ml-12 flex flex-col">
        <p className="text-4xl sm:max-lg:text-2xl tracking-tight font-semibold leading-normal">Instagram</p>
        <p className="text-4xl sm:max-lg:text-2xl tracking-tight font-semibold leading-normal">WhatsAPp</p>
      </div>
    </div>
  );
}

function Email() {
  return (
    <div className="ml-auto sm:max-lg:ml-0 sm:max-lg:w-full flex flex-col items-end sm:max-lg:items-start">
      <p className="mt-2.5 sm:max-lg:mt-6 uppercase text-sm font-light">Ask a question</p>
      <p className="mt-3 text-4xl sm:max-lg:mt-1 sm:max-lg:text-2xl tracking-tight font-semibold">ny.email@gmail.com</p>
    </div>
  );
}

function Credits() {
  return (
    <div className="flex pb-5 justify-between mt-[20vh]">
      <div className="text-sm">New York City</div>
      <div className="text-sm">United States Of America</div>
    </div>
  );
}
