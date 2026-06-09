import type {Metadata} from "next"
import Link from "next/link"
import {SiteLayout} from "@/components/site-layout"
import {DirectionalTransition} from "@/components/view-transition"

export const metadata: Metadata = {
  title: "Detect Type | Frontend Interview Docs",
  description: "Detect JavaScript values with a reliable type helper that handles arrays, null, dates, maps, sets, and other built-in objects.",
}

const examples = [
  ["detectType(null)", "\"null\""],
  ["detectType([])", "\"array\""],
  ["detectType(new Date())", "\"date\""],
  ["detectType(new Map())", "\"map\""],
  ["detectType(() => {})", "\"function\""],
]

const edgeCases = [
  "`typeof null` returns `\"object\"`.",
  "Arrays also return `\"object\"` with `typeof`.",
  "Boxed primitives like `new String(\"x\")` should be distinguishable from plain strings.",
  "Built-ins such as `Date`, `RegExp`, `Map`, and `Set` need clearer labels.",
]

const implementation = `function detectType(value) {
  if (value === null) {
    return "null"
  }

  const primitiveType = typeof value

  if (primitiveType !== "object") {
    return primitiveType
  }

  return Object.prototype.toString
    .call(value)
    .slice(8, -1)
    .toLowerCase()
}`

export default function DetectTypePage() {
  return (
    <SiteLayout>
      <DirectionalTransition>
        <header className="mx-auto w-full max-w-3xl px-6 pt-8 pb-10">
          <Link
            href="/frontend-prep"
            transitionTypes={["nav-back"]}
            className="inline-block font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground transition-colors duration-150 hover:text-foreground active:scale-[0.97]"
          >
            Back to index
          </Link>

          <div className="mt-8">
            <p className="mb-3 font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
              JavaScript / Easy
            </p>
            <h1
              className="text-[2.5rem] leading-none tracking-[-0.01em] text-foreground sm:text-[3rem]"
              style={{ fontFamily: "var(--font-instrument-serif)" }}
            >
              Detect Type
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Build a helper that returns a precise lowercase type name for a
              JavaScript value. The goal is to avoid the common blind spots in
              `typeof` while keeping the function small and predictable.


            </p>
          </div>
        </header>

        <main className="mx-auto w-full max-w-3xl px-6 pb-24">
          <div className="space-y-12">
            <DocSection title="Problem">
              <p>
                Implement <Code>detectType(value)</Code>. It should return labels
                such as <Code>string</Code>, <Code>number</Code>, <Code>null</Code>,
                <Code>array</Code>, <Code>date</Code>, <Code>map</Code>, and
                <Code>set</Code>.
              </p>
            </DocSection>

            <DocSection title="Edge Cases">
              <ul className="space-y-2">
                {edgeCases.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-[#aaa]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </DocSection>

            <DocSection title="Implementation">
              <pre className="overflow-x-auto rounded-md border border-border bg-[#111] p-4 text-xs leading-relaxed text-[#f4f4f2]">
                <code>{implementation}</code>
              </pre>
            </DocSection>

            <DocSection title="Examples">
              <div className="divide-y divide-border border-y border-border">
                {examples.map(([input, output]) => (
                  <div key={input} className="grid gap-2 py-3 font-mono text-xs sm:grid-cols-2">
                    <code className="text-foreground/85">{input}</code>
                    <code className="text-muted-foreground sm:text-right">{output}</code>
                  </div>
                ))}
              </div>
            </DocSection>

            <DocSection title="Reasoning">
              <p>
                Primitives are fastest to classify with <Code>typeof</Code>. For
                objects, <Code>Object.prototype.toString.call(value)</Code> exposes
                the internal built-in tag, which gives reliable names for arrays
                and common object types without maintaining a long manual list.
              </p>
            </DocSection>
          </div>
        </main>
      </DirectionalTransition>
    </SiteLayout>
  )
}

function DocSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section>
      <h2
        className="mb-4 text-2xl leading-tight text-foreground"
        style={{ fontFamily: "var(--font-instrument-serif)" }}
      >
        {title}
      </h2>
      <div className="text-sm leading-[1.8] text-foreground/75">{children}</div>
    </section>
  )
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em] text-foreground/85">
      {children}
    </code>
  )
}
