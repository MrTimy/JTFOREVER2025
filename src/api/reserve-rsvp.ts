import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);
export default async function reserveRsvp(
  name: string,
  email_address: string,
  rsvp_type: string,
  number_of_attendees?: number
) {
  const { data, error } = await supabase
    .from("rsvp")
    .insert([{ name, email_address, rsvp_type, number_of_attendees }]);
  return { data, error };
}

export async function getRsvp() {
  const { data, error } = await supabase.from("rsvp").select();
  return { data, error };
}
