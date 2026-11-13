import StatsClient from "./StatsClient";
import { getMonkeyProfile } from "@/lib/monkeytype";

export const revalidate = 3600;

export default async function StatsPage() {
  const profile = await getMonkeyProfile();
  const monkeyUser =
    process.env.MONKEY_USER ?? process.env.NEXT_PUBLIC_MONKEY_USER;

  return <StatsClient profile={profile} monkeyUser={monkeyUser} />;
}
