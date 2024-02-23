import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";

export function StatCard({ title, data, caption, badge }) {

    return (
        <Card className="overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                    {title}
                </CardTitle>
                {badge ? (<Badge className="capitalize">{badge}</Badge>):(<></>)}
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{data}</div>
                <p className="text-xs text-muted-foreground">
                    {caption}
                </p>
            </CardContent>
        </Card>
    )
}