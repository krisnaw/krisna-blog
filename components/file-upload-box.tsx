'use client'

import {ImagePlus} from "lucide-react"
import {cn} from "@/lib/utils"
import {useState} from "react";

export function FileUploadBox() {

    const [isDragging, setIsDragging] = useState(false)


    return (
        <div className="w-full space-y-6 rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="space-y-2">
                <h3 className="text-lg font-medium">Resumable file Upload with Supabase</h3>
                <p className="text-sm text-muted-foreground">
                    Supported formats: JPG, PNG, GIF
                </p>
            </div>

            <div className={cn(
                    "flex h-64 cursor-pointer flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed border-muted-foreground/25 bg-muted/50 transition-colors hover:bg-muted",
                    isDragging && "border-primary/50 bg-primary/5",
                )}
            >
                <div className="rounded-full bg-background p-3 shadow-sm">
                    <ImagePlus className="h-6 w-6 text-muted-foreground" />
                </div>
                <div className="text-center">
                    <p className="text-sm font-medium">Click to select</p>
                    <p className="text-xs text-muted-foreground">
                        or drag and drop file here
                    </p>
                </div>
            </div>
        </div>
    )
}
