import ArrowDown from "./ArrowDown.jsx";

export default function Home() {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-end bg-cover bg-center"
      style={{ backgroundImage: "url('/images/home-bg.jpg')" }}
    >
      <div className="pr-20 text-right mb-16">
        <h1 className="text-5xl md:text-6xl font-light tracking-wide text-white drop-shadow-md">
          Stefany Aguiar,
          <br />
          Arquitecta.
        </h1>
      </div>
      <div className="mx-auto mb-8">
        <ArrowDown href="#contenido" forceColor="light"/>
      </div>
    </section>
  );
}
