import { flag } from "flags/next"
import { vercelAdapter } from "@flags-sdk/vercel"

export const skylderKage = flag({
  key: "skylderKage",
  adapter: vercelAdapter(),
})
