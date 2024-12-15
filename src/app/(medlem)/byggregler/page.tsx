import Link from "next/link";

export default function ByggRegler() {
  return (
    <section className="flex flex-col max-w-xl mx-auto p-3 prose">
      <article>
        <h2 className="text-2xl font-bold">Byggregler</h2>
        <h3 className="text-1xl font-bold">
          Planerar du att bygga något på din kolonilott?
        </h3>
        <p>
          <strong>Viktigt att veta</strong>
        </p>
        <p>
          Det krävs bygglov för till exempel: kolonistuga, växthus, förråd, tak
          på stolpar, plank, staket (om högre än 110 cm över marken) och mur (om
          högre än 40 cm över marknivå).
        </p>
        <p>
          Det krävs inte bygglov för till exempel: lågt trädäck, ett vanligt
          öppet staket upp till 110 cm eller en pergola.
        </p>
        <strong>Innan du köper byggmaterial:</strong>
        <p>Fråga föreningens styrelse - denna måste godkänna i första hand!</p>
        <p>
          Kontakta sedan kommunens bygglovsenhet om du fått ett medgivande och
          bygglov behövs!
        </p>
        <p>
          Om det krävs bygglov för det du vill bygga behöver du ”ansöka om
          bygglov” hos kommunen. Det gör du med en blankett och ritningar på det
          du vill bygga. Information hittar du på{" "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={
              "https://vanersborg.se/bygga-bo-och-miljo/bygga-nytt-andra-eller-riva"
            }
          >
            Vänersborgs kommuns hemsida
          </Link>
          .
        </p>
        <p>
          Tänk på att ansöka i god tid! Ansök 2-3 månader innan du vill börja
          bygga.
        </p>
        <strong> Ett bygglov kostar.</strong>
        <p>
          På kommunens hemsida framgår gällande bygglovstaxa, som är olika
          beroende på vad som ska byggas. Ungefär halva avgiften måste du betala
          även för ett negativt besked. Det vill säga om din ansökan avslås. Är
          du osäker? Fråga kommunens bygglovsenhet på ”Miljö- och
          byggnadsförvaltningen”! Du kan ringa: 0521 72 13 13 Du kan skicka
          e-post: byggnad@vanersborg.se Du kan besöka kommunhuset Södergatan 16A
          följande tider: måndag-torsdag kl 8.00-12.00 samt onsdagar kl
          13.00-14.30.
        </p>
      </article>
    </section>
  );
}
