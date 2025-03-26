import fs from 'fs'
import path from 'path'

type Metadata = {
    title: string
    publishedAt: string
    summary: string
    image?: string
}

function parseFrontmatter(fileContent: string) {
    const frontmatterRegex = /---\s*([\s\S]*?)\s*---/
    const match = frontmatterRegex.exec(fileContent)
    const frontMatterBlock = match![1]
    const content = fileContent.replace(frontmatterRegex, '').trim()
    const frontMatterLines = frontMatterBlock.trim().split('\n')
    const metadata: Partial<Metadata> = {}

    frontMatterLines.forEach((line) => {
        const [key, ...valueArr] = line.split(': ')
        let value = valueArr.join(': ').trim()
        value = value.replace(/^['"](.*)['"]$/, '$1') // Remove quotes
        metadata[key.trim() as keyof Metadata] = value
    })

    return { metadata: metadata as Metadata, content }
}

function getMDXFiles(dir: fs.PathLike) {
    return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

function readMDXFile(filePath: fs.PathOrFileDescriptor) {
    const rawContent = fs.readFileSync(filePath, 'utf-8')
    return parseFrontmatter(rawContent)
}

function getMDXData(dir: fs.PathLike) {
    const mdxFiles = getMDXFiles(dir)
    return mdxFiles.map((file) => {
        const { metadata, content } = readMDXFile(path.join(dir.toString(), file))
        const slug = path.basename(file, path.extname(file))

        return {
            metadata,
            slug,
            content,
        }
    })
}

export function getBlogPosts() {
    return getMDXData(path.join(process.cwd(), 'markdown'))
}

export function generateTOC(markdown: string): string {
    // Split the Markdown text into lines
    const lines = markdown.split('\n');

    // Array to store TOC entries
    const toc: string[] = ['### Table of Contents'];

    // Regular expression to match Markdown headings (e.g., #, ##, ###)
    const headingRegex = /^(#+)\s+(.+)$/;

    // Iterate through each line to find headings
    for (const line of lines) {
        const match = line.match(headingRegex);
        if (match) {
            const level = match[1].length; // Number of # symbols (e.g., 1 for #, 2 for ##)
            const title = match[2].trim(); // The heading text

            // Create a slug for the anchor link (e.g., "My Heading" -> "my-heading")
            const slug = title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

            // Indent based on heading level (2 spaces per level beyond 1)
            const indent = '  '.repeat(level - 1);

            // Add TOC entry with Markdown link
            toc.push(`${indent}- [${title}](#${slug})`);
        }
    }

    // Return the TOC as a string, or a message if no headings are found
    return toc.length > 1 ? toc.join('\n') : 'No headings found in the Markdown text.';
}