import markdownHtml from "zenn-markdown-html";

export function TableOfContent({tos} : {tos : string}) {
    const html = markdownHtml(tos, {});
    return (
        <div className="border border-gray-300 px-3 py-2 rounded-md bg-white dark:bg-[#242424]">
            <div
                className="prose prose-sm focus:outline-none max-w-none dark:prose-invert"

                dangerouslySetInnerHTML={{
                    __html: html,
                }}
            />
        </div>
    )
}