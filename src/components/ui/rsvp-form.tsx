export default function RSVPForm({ rsvpType }: { rsvpType: string }) {
  return (
    <div className="max-w-[1240px] w-[95%] mx-auto">
      <form className="grid gap-4">
        <div className="bg-white md:p-11 p-3">
          <h2 className="md:text-6xl text-4xl font-cairo font-bold">
            {rsvpType === "singles" ? "Singles" : "Family"} Form
          </h2>
        </div>
        <div className="bg-white md:pt-11 md:px-11 p-3 flex flex-col gap-4">
          <label className="font-cairo md:text-3xl text-lg font-normal">
            Name
          </label>
          <input
            type="text"
            className="border-b border-[#ACACAC] outline-none max-w-3xl"
          />
        </div>
        <div className="bg-white md:pt-11 md:px-11 p-3 flex flex-col gap-4">
          <label className="font-cairo md:text-3xl text-lg font-normal">
            Email Address
          </label>
          <input
            type="text"
            className="border-b border-[#ACACAC] outline-none max-w-3xl"
          />
        </div>
        <div className="bg-white md:pt-11 md:px-11 p-3 flex flex-col gap-4">
          <label className="font-cairo md:text-3xl text-lg font-normal">
            Number of Attendees
          </label>
          <input
            type="text"
            className="border-b border-[#ACACAC] outline-none max-w-3xl"
          />
        </div>
        <div className="bg-white md:pt-11 md:px-11 p-3 flex flex-col gap-4">
          <label className="font-cairo md:text-3xl text-lg font-normal">
            Confirm Attendance
          </label>
          <div className="flex items-center gap-4">
            <button className="bg-green-600 text-white font-cairo p-2 min-w-[100px] rounded-lg text-lg">
              Yes
            </button>
            <button className="bg-red-600 text-white font-cairo p-2 min-w-[100px] rounded-lg text-lg">
              No
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
