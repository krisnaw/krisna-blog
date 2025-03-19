import {Editor, EditorContent, useEditor} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

type TipTapEditorProps = {
    content: string
    setContent: (value: string) => void
}

export function TipTapEditor({content, setContent}: TipTapEditorProps) {
    const editor = useEditor({
        extensions: [StarterKit.configure(
            {
                // Configure an included extension
                heading: {
                    levels: [1, 2],
                },
            }
        )],
        editorProps: {
            attributes: {
                class: 'prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none',
            },
        },
        content: content,
        onUpdate({editor}: { editor: Editor }) {
            setContent(editor.getHTML())
        }
    })

    return <EditorContent editor={editor}/>
}
