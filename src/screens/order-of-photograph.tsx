import {
  CutePictures,
  OrderOfPhotoBackground,
  OrderOfPhotoBox,
} from "../assets";
import Button from "../components/button";
export default function Page() {
  return (
    <div
      className="min-h-screen grid place-items-center md:p-10"
      style={{
        backgroundImage: `url(${OrderOfPhotoBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="w-full md:max-w-[1163px] mx-auto min-h-[980px] md:p-14 p-4 md:px-36"
        style={{
          backgroundImage: `url(${OrderOfPhotoBox})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-center font-lovers-quarrel md:text-[131px] text-6xl md:leading-20">
          <p>Jayy & Timy</p>
          <br />
          {/* <p>Timy</p> */}
        </div>
        <div className="flex items-center justify-between flex-col md:flex-row">
          <div className="grid gap-8  font-cairo">
            <div>
              <h3 className="text-[#272A2F] font-cairo text-5xl font-bold underline mb-4">
                ORDER OF PHOTOGRAPH
              </h3>
              {/* <p className="font-bold text-xl">Couple with:</p> */}
              <ul className="text-xl grid gap-1">
                <li> Bride</li>
                <li> Bride & Maid of Honour</li>
                <li> Groom</li>
                <li> Groom & Best Man</li>
                <li>Couple</li>
              </ul>
              <p className="font-bold text-xl mt-8">Couple with:</p>
              <ul className="text-xl grid gap-1">
                <li> Best man & Maid of Honour</li>
                <li> Bridesmaids</li>
                <li> Groomsmen</li>
                <li> Officiating Minister</li>
                <li> Bride's Parents </li>
                <li> Groom's Parents</li>
                <li>Grandparents</li>
                <li>Bride's Siblings</li>
                <li> Groom's Siblings</li>
                <li>Bride’s Family</li>
                <li> Groom's Family</li>
                <li>Bride's Friends</li>
                <li>Groom's Friends</li>
                <li> Lifecamp Congregation</li>
                <li>Gateway Congregation</li>
                <li>Groom's Colleagues</li>
                <li>Bride's Colleagues</li>
                <li>Friends from UNN</li>
              </ul>
            </div>
          </div>
          <div>
            <img src={CutePictures} alt="cute" />
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
