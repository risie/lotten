import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col md:flex-row">
        <article className="md:w-1/2 p-5">
          <h2 className="text-xl">Välkommen Till Holmängens Koloniförening!</h2>
          <br />
          <p>
            Mindre än två kilometer sydost om torget i Vänersborg ligger
            Holmängens koloniområde, som förvaltas i form av intresseförening.
          </p>
          <br />
          <p>
            Området är nästan 45 000 kvadratmeter stort och här finns 64
            kolonilotter av varierande storlek för sommarboende och odling.
            Vänersborgs Stadsfullmäktige beslutade redan 1931 att arrendera ut
            marken för koloniändamål.
          </p>
          <br />
          <p>
            Motivet var detsamma som i många andra städer i Sverige. Nämligen
            att koloniträdgårdsverksamhet är av stor social betydelse och för
            ”samhällets invånare föreanad med såväl trevnad som ekonomisk
            fördel”. Målsättningen var att kunna erbjuda en sund miljö utanför
            staden, för rekreation och möjlighet till husbehovsodling som bidrog
            till försörjningen 1995 bedömdes koloniområdet som en
            kulturhistoriskt värdefull bebyggelsemiljö. Det finns fina
            promenadvägar både inom koloniområdet och i naturen runt omkring.
            Ett stenkast från Vänern!
          </p>
          <br />
          <h3>
            <strong>Välkommen till oss!</strong>
          </h3>
        </article>
        <figure className="md:w-1/2">
          <div className="relative h-0" style={{ paddingBottom: "100%" }}>
            <Image src="/staket.jpg" alt="" layout="fill" objectFit="cover" />
          </div>
        </figure>
      </section>

      <section className="flex flex-col md:flex-row">
        <figure className="md:w-1/2">
          <div className="relative h-0" style={{ paddingBottom: "100%" }}>
            <Image src="/bage.jpg" alt="" layout="fill" objectFit="cover" />
          </div>
        </figure>
        <article className="md:w-1/2 p-5">
          <h2 className="text-xl">Välkommen Till Holmängens Koloniförening!</h2>
          <p>
            Mindre än två kilometer sydost om torget i Vänersborg ligger
            Holmängens koloniområde, som förvaltas i form av intresseförening.
          </p>
          <br />
          <p>
            Området är nästan 45 000 kvadratmeter stort och här finns 64
            kolonilotter av varierande storlek för sommarboende och odling.
            Vänersborgs Stadsfullmäktige beslutade redan 1931 att arrendera ut
            marken för koloniändamål.
          </p>
          <br />
          <p>
            Motivet var detsamma som i många andra städer i Sverige. Nämligen
            att koloniträdgårdsverksamhet är av stor social betydelse och för
            ”samhällets invånare föreanad med såväl trevnad som ekonomisk
            fördel”. Målsättningen var att kunna erbjuda en sund miljö utanför
            staden, för rekreation och möjlighet till husbehovsodling som bidrog
            till försörjningen 1995 bedömdes koloniområdet som en
            kulturhistoriskt värdefull bebyggelsemiljö. Det finns fina
            promenadvägar både inom koloniområdet och i naturen runt omkring.
            Ett stenkast från Vänern!
          </p>
          <br />
          <h3>
            <strong>Välkommen till oss!</strong>
          </h3>
        </article>
      </section>
      <section className="flex flex-col md:flex-row">
        <article className="md:w-1/2 p-5">
          <h2 className="text-xl">Köp och sälj</h2>
          <br />
          <p>
            För att kunna köpa kolonistuga på Holmängen måste du vara myndig,
            folkbokförd inom Vänersborgs kommun och inte ha arrende eller
            nyttjanderätt till annan kolonilott på området, eller i kommunen.
            Det är säljarens skyldighet att informera dig om, att innan köpet
            genomförs träffar du föreningens ordförande. Denne kommer att
            berätta för dig vad det innebär att ha en kolonistuga på Holmängen.
            Du ansöker skriftligen om medlemskap i föreningen och föreningens
            styrelse avgör om medlemskap kan beviljas. Du övertar sedan
            nyttjanderättskontraktet från förre ägaren. När du fått medlemskap
            betalar du en inträdesavgift.
          </p>
          <br />
          <p>
            Arrendeavgift och andra avgifter som årsmötet beslutar om,
            faktureras en gång per år. Du är som medlem och innehavare av
            kolonilott, skyldig att vårda densamma och följa föreningens
            stadgar och ordningsregler. Du deltar om möjligt i de arbetsdagar,
            som är gemensamma för föreningens medlemmar.
          </p>
          <br />
          <p>
            Stugorna säljs exempelvis via mäklare eller annons, men ibland
            sätter säljaren upp en lapp på föreningens anslagstavla. Om du
            undrar över något, skickar du ett mejl till styrelsen på ------ . Vi
            återkopplar till dig så snart som möjligt.
          </p>
        </article>
        <figure className="md:w-1/2">
          <div className="relative h-0" style={{ paddingBottom: "100%" }}>
            <Image src="/vaxthus.jpg" alt="" layout="fill" objectFit="cover" />
          </div>
        </figure>
      </section>
    </main>
  );
}
