import React from "react";

export default function VerksamhetsplanPage() {
  return (
    <section className="flex flex-col max-w-xl mx-auto p-3 prose">
      <article>
        <h2 className="text-2xl font-bold">
          Verksamhetsplan Holmängens Koloniförening 2024
        </h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Datum</th>
                <th>Aktivitet</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>25 Februari </td>
                <td>Årsmöte</td>
              </tr>
              <tr>
                <td>02 April </td>
                <td>Trädgårdstunnan töms första gång i år</td>
              </tr>
              <tr>
                <td>15 April </td>
                <td>Vattnet sätts på</td>
              </tr>
              <tr>
                <td>23 April </td>
                <td>
                  Föreläsning Anna Brandeby Harström, Biologisk mångfald, Lokal:
                  Syrenen
                </td>
              </tr>
              <tr>
                <td>30 April </td>
                <td>Sista dag för inbetalning av arrende för lotten</td>
              </tr>
              <tr>
                <td>04 Maj </td>
                <td>Arbetsdag</td>
              </tr>
              <tr>
                <td>14 Maj </td>
                <td>Restavfallstunnan töms första gång i år</td>
              </tr>
              <tr>
                <td>Maj (Datum ej bestämt)</td>
                <td>Musikkväll, beroende på vädret</td>
              </tr>
              <tr>
                <td>Juli (Datum ej bestämt)</td>
                <td>Sommarfest</td>
              </tr>
              <tr>
                <td>September 07</td>
                <td>Arbetsdag</td>
              </tr>
              <tr>
                <td>01 Oktober </td>
                <td>Restavfallstunnan töms för sista gång i år</td>
              </tr>
              <tr>
                <td>15 Oktober </td>
                <td>Vattnet stängs av</td>
              </tr>
              <tr>
                <td>05 November </td>
                <td>Trädgårdstunnan töms för sista gång i år</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
    </section>
  );
}
