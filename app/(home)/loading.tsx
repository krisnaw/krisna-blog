import {Skeleton} from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="max-w-5xl m-auto py-32 min-h-screen">
            <div className="flex items-center mt-10">
                <Skeleton className="w-[100px] h-[20px] rounded-full" />
            </div>
        </div>
    );
}