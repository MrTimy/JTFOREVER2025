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
          <p>Wedding reception program</p>
        </div>
        <div className="flex items-center justify-center flex-col md:flex-row">
          <div className="grid gap-8 font-cairo">
            <div className="mt-8 text-center">
              <ol className="text-xl grid gap-3 font-normal">
                <li>1. Arrival of guests</li>
                <li>2. Meet our families </li>
                <li>3. Couple entrance</li>
                <li>4. Opening Prayer</li>
                <li>5. Chairman’s opening remark</li>
                <li>6. Cutting the cake</li>
                <li>7. Our first dance</li>
                <li>8. Audience Karaoke (Retro)</li>
                <li>9. Couple speech </li>
                <li>10. Couple’s Dance with Parents</li>
                <li>11. Let's Play Games</li>
                <li>12. MOH Speech</li>
                <li>13. Grooms vote of thanks</li>
                <li>14. Closing prayer</li>
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
