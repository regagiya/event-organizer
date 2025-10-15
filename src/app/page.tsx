import UpcomingEvents from "./eventsection/upcoming";

export default function Home() {
  return (
    <main>
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/event.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>{" "}
        <div className="relative flex items-center justify-center h-full">
          <div className="flex flex-col gap-5 items-center">
            <div className="flex">
              <h1 className="text-4xl md:text-6xl font-bold font-serif text-white/80">
                Welcome To
              </h1>
              <h1 className="text-4xl md:text-6xl pl-3 font-bold font-serif text-indigo-500">
                Zeuss
              </h1>
              <h1 className="text-4xl md:text-6xl pl-3 font-bold font-serif text-white/80">
                .
              </h1>
            </div>
            <p className="font-serif text-xl font-bold text-white/80">
              We Don’t Just Plan Events — We Create Experiences!
            </p>
          </div>
        </div>
        <div className="text-4xl font-serif font-bold text-center"></div>
      </div>
      <UpcomingEvents />
    </main>
  );
}
