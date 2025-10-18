export default function Home() {
  return (
    <main className="font-rethink">
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/event.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>{" "}
        <div className="relative flex items-center justify-center h-full">
          <h1 className="text-4xl md:text-6xl font-bold text-white/80">
            Welcome To
          </h1>
          <h1 className="text-4xl md:text-6xl pl-3 font-bold text-indigo-500">
            Zeuss
          </h1>
          <h1 className="text-4xl md:text-6xl pl-3 font-bold text-white/80">
            .
          </h1>
          <p className=" font-bold text-white/80">
            We Don't Just Plan Events — We Create Experiences!
          </p>
        </div>
      </div>
    </main>
  );
}
