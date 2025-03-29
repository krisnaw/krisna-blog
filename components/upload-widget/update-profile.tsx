import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {UserCircleIcon} from "lucide-react";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";

export function UpdateProfile() {
    return (
        <Card className="w-[600px]">
            <CardHeader className="border-b border-gray-300">

                <CardTitle>
                    Add writer
                </CardTitle>
                <CardDescription>
                    Select and upload the files of your choice
                </CardDescription>

            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-3 divide-x-2 divide-dashed divide-gray-300">

                    <div className="flex flex-col items-center justify-center text-center pr-4">
                        <UserCircleIcon size={64} className="text-gray-400" />
                        <div className="flex flex-col">
                            <div className="text-lg font-semibold mt-4">
                                Upload image
                            </div>
                            <div className="text-xs text-gray-500">
                                PNG, JPG, GIF up to 10MB
                            </div>
                            <div className="mt-4">
                                <Button variant="outline" size="sm">
                                    Add image
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-2 pl-8">
                        <div className="space-y-6">
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="email">Author name</Label>
                                <Input type="email" id="email" placeholder="Email" />
                            </div>

                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="email">Title</Label>
                                <Input type="email" id="email" placeholder="Email" />
                            </div>
                        </div>

                        <div className="flex justify-end mt-6 space-x-4">
                            <Button variant="outline">Cancel</Button>
                            <Button variant="default">Save changes</Button>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}