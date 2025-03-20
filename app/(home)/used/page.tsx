export default function Page() {
    return (
        <div>
            <h4>List of Next.js features utilized in this site:</h4>
            <ol className="mt-4 list-disc list-inside">

                <li>
                    <a
                        className="hover:underline hover:underline-offset-4"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image#generate-images-using-code-js-ts-tsx">
                        Code generated open graph image for the About page
                    </a>
                </li>

                <li>
                    <a
                        className="hover:underline hover:underline-offset-4"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes">
                        Dynamic routes for the blog
                    </a>
                </li>

                <li>
                    <a
                        className="hover:underline hover:underline-offset-4"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations">
                        Server action and mutations with useActionState hook
                    </a>
                </li>
            </ol>
        </div>
    )
}