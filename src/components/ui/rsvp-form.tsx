/* eslint-disable @typescript-eslint/no-explicit-any */
import reserveRsvp from "../../api/reserve-rsvp";
import { Toaster, toast } from "sonner";

export default function RSVPForm({ rsvpType }: { rsvpType: string }) {
  const handleRsvpSubmit = async (e: any) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const numberOfAttendees = e.target[2].value || 1;
    const { error } = await reserveRsvp(
      name,
      email,
      rsvpType,
      +numberOfAttendees
    );

    if (error) {
      toast.error("Something went wrong, please try again later.");
    } else {
      toast.success("Your RSVP has been submitted successfully!");
      e.target.reset();
    }
  };
  return (
    <div className="max-w-[1240px] w-[95%] mx-auto">
      <form className="grid gap-4" onSubmit={handleRsvpSubmit}>
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
            <button
              className="bg-green-600 text-white font-cairo p-2 min-w-[100px] rounded-lg text-lg"
              type="submit"
            >
              Yes
            </button>
            <button
              className="bg-red-600 text-white font-cairo p-2 min-w-[100px] rounded-lg text-lg"
              type="button"
              onClick={() => {
                window.history.back();
              }}
            >
              No
            </button>
          </div>
        </div>
      </form>
      <Toaster />
    </div>
  );
}
