import Hero from "./Hero";
import Welcome from "./Welcome";
import KopOchSalj from "./KopOchSalj";

export default function Home() {
  return (
    <main>
      <Hero imageUrl="./blad.jpg" fullScreen={true}>
        <h1 className="mb-5 text-5xl font-bold">
          Välkommen till Holmängens Koloniförening!
        </h1>
        <p className="mb-5">
          Mindre än två kilometer sydost om torget i Vänersborg ligger
          Holmängens koloniområde. En oas för rekreation och odling.
        </p>
      </Hero>
      <Welcome />
      <Hero imageUrl="./blommor.jpg" fullScreen={false}>
        <h1 className="mb-5 text-5xl font-bold">Köp och sälj</h1>
      </Hero>
      <KopOchSalj />
      <Hero imageUrl="./vattenblommor.jpg" fullScreen={false}>
        <h1 className="mb-5 text-5xl font-bold">Bilder</h1>
        <p className="mb-5">
          I vårt arkiv kan du se bilder på området från både nu och förr.
        </p>
        <button className="btn btn-primary">Utforska bilder!</button>
      </Hero>
    </main>
  );
}
