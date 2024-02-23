import { Icons } from "@/components/icons";
import { Heading } from "@/components/ui/heading";



export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
    <div className="flex-1 space-y-4 p-4 h-100 md:p-8 pt-6">
        <div className="flex items-center justify-center">
            <Icons.spinner className="h-4 w-4 animate-spin" />
            {/* <Heading title={<Icons.spinner className="h-4 w-4 animate-spin" />} description="Manage pools on database" /> */}
        </div>
    </div>)
}