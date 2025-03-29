import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {CircleCheckIcon, DockIcon, Info, LinkIcon, Loader2, TrashIcon, UploadCloud, XIcon} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Progress} from "@/components/ui/progress";
import {Separator} from "@/components/ui/separator";
import {Label} from "@/components/ui/label";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {Input} from "@/components/ui/input";

export function UploadFiles() {
    return (
        <Card className="w-[400px]">
            <CardHeader className="border-b border-gray-300">
                <CardTitle>
                    Upload files
                </CardTitle>
                <CardDescription>
                    Select and upload the files of your choice
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="p-10 border border-gray-300 border-dashed rounded-md flex flex-col items-center justify-center">
                    <div className="text-gray-600">
                        <UploadCloud />
                    </div>
                    <div className="text-lg font-semibold mt-4">
                        Choose a file or drag and drop it here
                    </div>
                    <div className="text-center ">
                        <p className="text-gray-500 text-sm">
                            JPEGS, PNGs, GIFs, and MP4s are supported, up to 10GB each.
                        </p>
                    </div>
                    <Button variant="secondary" className="mt-6">
                        Browse file
                    </Button>
                </div>

                <div className="mt-6 space-y-6">

                    <div className="border border-gray-300 rounded-md px-4 py-2.5">

                        <div className="flex relative">
                            <div className="shrink-0 self-center mr-4 text-gray-600">
                                <DockIcon size={38} />
                            </div>

                            <div>
                                <div className="text-lg">
                                    Sample.mp4
                                </div>
                                <div className="text-xs text-gray-500 flex">
                                    20Kb of 12 MB ·
                                    <span className="flex items-center ml-2">
                                                    <Loader2 size={16} className="animate-spin mr-2" />
                                                    Uploading...
                                                </span>
                                </div>
                            </div>

                            <div className="text-gray-400 ml-auto  pl-4">
                                <XIcon size={18} />
                            </div>
                        </div>

                        <div className="mt-4">
                            <Progress value={33} />
                        </div>
                    </div>

                    <div className="border border-gray-300 rounded-md px-4 py-2.5">

                        <div className="flex relative">
                            <div className="shrink-0 self-center mr-4 text-gray-600">
                                <DockIcon size={38} />
                            </div>

                            <div>
                                <div className="text-lg">
                                    Sample.mp4
                                </div>
                                <div className="text-xs text-gray-500 flex">
                                    20Kb of 12 MB ·
                                    <span className="flex items-center ml-2">
                                                    <CircleCheckIcon size={16} className="mr-2 text-green-500" />
                                                    Completed
                                                </span>
                                </div>
                            </div>

                            <div className="text-gray-400 ml-auto  pl-4">
                                <TrashIcon size={18} />
                            </div>
                        </div>

                        <div className="mt-4">
                            <Progress value={100} />
                        </div>
                    </div>

                </div>

                <div className="flex items-center gap-4 mt-4">
                    <Separator className="flex-1" />
                    <span className="text-muted-foreground">or</span>
                    <Separator className="flex-1" />
                </div>

                <div className="mt-4">
                    <div className="grid w-full items-center gap-1.5">
                        <div className="flex">
                            <Label htmlFor="picture">Import from URL Link</Label>

                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <Info size={16} className="ml-1 text-gray-400" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        This is too long to be a real example.
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>

                        </div>
                        <div className="grid grid-cols-1">
                            <Input
                                className="col-start-1 row-start-1  py-1.5 pr-3 pl-10"
                                placeholder="Paste file URL..." />
                            <LinkIcon  className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4" />
                        </div>
                    </div>
                </div>

            </CardContent>
        </Card>
    )
}