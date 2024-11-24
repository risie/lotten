import React from "react";

const VerksamhetsplanPage: React.FC = () => {
  return (
    <div className="flex flex-col max-w-xl mx-auto p-3 prose">
      <h1 className="text-2xl font-bold">
        Verksamhetsplan Holmängens Koloniförening 2024
      </h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Månad</th>
              <th>Aktivitet</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Januari</td>
              <td></td>
            </tr>
            <tr>
              <td>Februari</td>
              <td>25 Årsmöte</td>
            </tr>
            <tr>
              <td>Mars</td>
              <td></td>
            </tr>
            <tr>
              <td>April</td>
              <td>
                02 Trädgårdstunnan töms första gång i år
                <br />
                15 Vattnet sätts på
                <br />
                23 Föreläsning Anna Brandeby Harström, Biologisk mångfald,
                Lokal: Syrenen
                <br />
                30 Sista dag för inbetalning av arrende för lotten
              </td>
            </tr>
            <tr>
              <td>Maj</td>
              <td>
                04 Arbetsdag
                <br />
                14 Restavfallstunnan töms första gång i år
                <br />
                Datum ej bestämt Musikkväll, beroende på vädret
              </td>
            </tr>
            <tr>
              <td>Juni</td>
              <td></td>
            </tr>
            <tr>
              <td>Juli</td>
              <td>Datum ej bestämt Sommarfest</td>
            </tr>
            <tr>
              <td>Augusti</td>
              <td></td>
            </tr>
            <tr>
              <td>September</td>
              <td>07 Arbetsdag</td>
            </tr>
            <tr>
              <td>Oktober</td>
              <td>
                01 Restavfallstunnan töms för sista gång i år
                <br />
                15 Vattnet stängs av
              </td>
            </tr>
            <tr>
              <td>November</td>
              <td>05 Trädgårdstunnan töms för sista gång i år</td>
            </tr>
            <tr>
              <td>December</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VerksamhetsplanPage;
