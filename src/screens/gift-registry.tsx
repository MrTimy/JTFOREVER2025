import { BoxedGift, GiftBackground, MoneyGift } from "../assets";
import Button from "../components/button";
export default function Page() {
  return (
    <div className="mx-auto max-w-web-max w-mobile-max py-12">
      <div className="grid gap-4 font-cairo max-w-[1300px] text-2xl">
        <p>
          Your presence at our wedding is the most precious gift we could ask
          for, and we are so grateful for your love and support as we begin this
          beautiful new journey together.
        </p>
        <p>
          If you'd like to honor us with a gift, we’ve created a simple wishlist
          to make things easy — whether you're giving from the heart, or from
          your cart.
        </p>
      </div>
      <div
        className="mt-8 flex flex-col md:flex-row gap-4 md:gap-10 mx-auto items-center justify-center relative"
        style={{
          // backgroundImage: `url(${GiftBackground})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img
          src={GiftBackground}
          alt=""
          className="absolute z-0 h-[800px] -left-20"
        />
        <div className="bg-white min-h-[495px] grid gap-4 place-items-center text-center p-8 rounded-3xl font-cairo z-30">
          <img src={MoneyGift} alt="" />
          <h2 className="text-burnt-orange font-bold font-cairo text-3xl">
            Monetary Gifts
          </h2>
          <p className="text-chocolate-brown text-sm md:text-2xl font-cairo max-w-[465px]">
            Should you wish to send a cash gift, here are our account details:
          </p>
          <div className="grid gap-2 text-base text-sm font-normal text-chocolate-brown">
            <p className="font-light">Account Name:</p>
            <p className="font-bold">Timothy Eke</p>
            <p className="font-light">Account Name:</p>
            <p className="font-bold">0719066706</p>
            <p className="font-light">Bank Name:</p>
            <p className="font-bold"> Access Bank</p>
          </div> <br />
          <div className="grid gap-2 text-base text-sm font-normal text-chocolate-brown">
            <p className="font-light">Account Name:</p>
            <p className="font-bold">Ezeafulukwe Janice </p>
            <p className="font-light">Account Name:</p>
            <p className="font-bold">1007392203</p>
            <p className="font-light">Bank Name:</p>
            <p className="font-bold"> FCMB</p>
          </div>
        </div>
        <div className="bg-white min-h-[495px] grid gap-4 place-items-center text-center p-8 rounded-3xl font-cairo z-30">
          <img src={BoxedGift} alt="" />
          <h2 className="text-burnt-orange font-bold font-cairo text-3xl">
            Gifts Registry
          </h2>
          <p className="text-chocolate-brown text-base md:text-2xl font-cairo max-w-[465px]">
            We’ve also put together a few gift ideas on our Wedding
            Registry, filled with thoughtful items to help us settle into our
            new life together.
          </p>
          <div className="grid gap-2 text-sm md:text-2xl font-normal text-chocolate-brown">
            <p className="font-bold mb-8 mt-6">Click below to view </p>
            <Button
              text="WishList"
              onClick={() => {
                window.location.href =
                  "https://mywishlistng.com/event/wedding/jtforever2025";
              }}
              className="bg-burnt-orange text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
