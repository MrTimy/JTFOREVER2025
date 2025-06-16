import { ReceptionBackground, ReceptionGeneralBackground } from "../assets";
import Button from "../components/button";
export default function Page() {
  return (
    <div
      className="min-h-screen grid place-items-center md:p-10"
      style={{
        backgroundImage: `url(${ReceptionGeneralBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="w-full md:max-w-[1163px] mx-auto min-h-[980px] md:p-14 p-4 md:px-36"
        style={{
          backgroundImage: `url(${ReceptionBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-center font-lovers-quarrel md:text-[93px] text-6xl md:leading-20">
          <p>Wedding Reception Program</p>
        </div>
        <div className="flex items-center justify-center flex-col md:flex-row">
          <div className="grid gap-8 font-cairo">
            <div className="mt-8 text-center">
              <ol className="text-xl grid gap-3 font-normal">
                <li>1. Guests arrives</li>
                <li>2. Cooktail served</li>
                <li>3. Guests seated</li>
                <li>4. Bride & Groom entry and Introduction</li>
                <li>5. Loyal Toast</li>
                <li>6. Cutting of the Cake</li>
                <li>7. Bridal Waltz</li>
                <li>8. Family and Friends invited to join</li>
                <li>9. Dancing</li>
                <li>10. Going away ritual</li>
                <li>11. Single Ladies assemble for bouquet throwing</li>
                <li>12. Single Men assemble for garter throwin</li>
                <li>13. Circle is formed for Farewell</li>
                <li>14. Bride and Groom waved goodbye</li>
                <li>15. General dancing to contiune (optional) </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-6 items-end w-full">
        <Button
          text={"EXIT"}
          variants="primary"
          onClick={() => window.history.back()}
        />
      </div>
    </div>
  );
}
