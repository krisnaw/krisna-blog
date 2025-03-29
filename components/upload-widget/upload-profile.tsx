import {Card, CardContent, CardDescription, CardFooter, CardHeader} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import {Button} from "@/components/ui/button";
import {CloudUploadIcon, XIcon} from "lucide-react";

export function UploadProfile() {
    return (
        <Card className="w-[400px]">
            <CardHeader>
                <CardDescription>
                    <div className="flex items-center">
                        <div className="text-gray-500 text-base">
                            Add profile image
                        </div>
                        <div className="ml-auto pl-3">
                            <Button size="icon" variant="ghost">
                                <XIcon size={18}/>
                            </Button>
                        </div>
                    </div>
                </CardDescription>
            </CardHeader>
            <CardContent>

                <div className="flex items-center justify-center">
                    <div
                        className="border-2 border-gray-300 border-dashed rounded-full w-48 h-48 p-8 flex flex-col items-center justify-center text-center">
                        <CloudUploadIcon className="text-gray-400" />
                        <div className="mt-2">
                            <p className="text-sm text-gray-400">Drag and drop your images here</p>
                        </div>
                    </div>
                </div>


                <div className="flex items-center gap-4 mt-4">
                    <Separator className="flex-1" />
                    <span className="text-muted-foreground">or</span>
                    <Separator className="flex-1" />
                </div>

                <div className="mt-4">
                    <Button className="w-full" variant="secondary" size="lg">Upload a photo</Button>
                </div>
            </CardContent>
            <CardFooter className="grid grid-cols-2 gap-4 border-t border-gray-300">
                <Button className="w-full" variant="outline">Cancel</Button>
                <Button className="w-full" variant="default">Apply changes</Button>
            </CardFooter>
        </Card>
    )
}