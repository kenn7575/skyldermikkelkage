import { skylderKage } from "@/lib/flags"
import HomeView from "./HomeView"

export default async function Page() {
  const showBanner = (await skylderKage()) as boolean

  return <HomeView showBanner={showBanner} />
}
