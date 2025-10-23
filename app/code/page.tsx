import CodePanel from "@/components/code-tab/code-panel";

export default async function Page() {

  return (
    <div className="h-screen mx-auto max-w-lg flex items-center justify-center">

      <CodePanel
        code={`fn main() { println!("Hello, world!"); }`}
        lang="rust"
        filename="main.rs"
      />

    </div>
  )
}