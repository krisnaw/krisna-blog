import {Sparkles} from "lucide-react"
import {SiteLayout} from "@/components/site-layout"
import {DirectionalTransition} from "@/components/view-transition"
import {AnimationShowcase} from "./animation-showcase"
import LogoMarquee from "@/components/animations/logo-marquee";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/app/animation/card";

export default function AnimationPage() {
  return (
    <SiteLayout>
      <DirectionalTransition>
        <header className="mx-auto w-full max-w-3xl px-6 pt-8 pb-10">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                <Sparkles className="size-3" aria-hidden="true" strokeWidth={1.8} />
                Exploration
              </div>
              <h1
                className="text-[2.75rem] leading-none tracking-[-0.02em] text-foreground text-balance"
                style={{fontFamily: "var(--font-instrument-serif)"}}
              >
                Animation Studies
              </h1>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground text-pretty">
                Small interaction patterns with focused motion, clean state changes, and tactile controls.
              </p>
            </div>
          </div>
        </header>

        <div className="mx-auto w-full max-w-3xl px-6">

          <Card>
            <CardHeader>
              <CardTitle>Sample Card</CardTitle>
              <CardDescription>
                Small interaction patterns with focused motion, clean state changes, and tactile controls.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <LogoMarquee />
            </CardContent>
            <CardFooter>
              <div className="text-sm text-gray-400 dark:text-neutral-500">
                Footer
              </div>
            </CardFooter>
          </Card>


          <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950">
            <div className="flex flex-col">
              <div className="rounded-b-2xl bg-white p-4 shadow outline outline-neutral-200 dark:bg-neutral-900 dark:outline-neutral-800">
                <div className="flex min-h-56 items-center justify-center">
                  <LogoMarquee />
                </div>
              </div>
              <div className="px-6 py-4">
                <div className="text-sm text-gray-400 dark:text-neutral-500">
                  Footer
                </div>
              </div>
            </div>
          </div>
        </div>

        <AnimationShowcase />
      </DirectionalTransition>
    </SiteLayout>
  )
}
