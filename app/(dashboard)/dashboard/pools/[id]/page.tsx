/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
import BreadCrumb from "@/components/breadcrumb";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heading } from "@/components/ui/heading";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"
import Month_API from "@/components/pools/API/monthly_api";
import { TabPool } from "./tab";
import internal from "stream";
import { StatCard } from "@/components/stat_card";
import { Skeleton } from "@/components/ui/skeleton";
import { Overview } from "@/components/overview";
import { RecentSales } from "@/components/recent-sales";



async function fetchData(id) {
    const url = 'https://api.boi.fund/api/pools/' + id + '/';
    const options = {
        method: 'GET',
        headers: {
            'api-key': 'test'
        }
    };
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result);
        return result; // Or handle your data as needed
    } catch (error) {
        console.error('There was an error!', error);
    }
}

export default async function Page({ params }: { params: { id: int } }) {
    const data = await fetchData(params.id)

    const breadcrumbItems = [
        { title: "Pools", link: "/dashboard/pools" },
        { title: data.pool_address, link: "/dashboard/user/" + data.pool_address },
    ];

    return (
        <ScrollArea className="h-full">
            <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
                <BreadCrumb items={breadcrumbItems} />
                <div className="flex items-start justify-between">
                    <Heading title={`Pools ` + data.id} description={`Address : ` + data.pool_address} />
                    <Badge className="capitalize">{data.status}</Badge>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <StatCard title='Value' data={(data.profit * 100).toFixed(2) + '%'} caption='' badge='Now' />
                    <StatCard title='AUM' data={(data.AUM).toFixed(2)} caption='ETH' badge='Now' />
                    <StatCard title='NFTs' data={(data.nfts.length)} caption='Token' badge='Now' />
                    <StatCard title='Daily' data={(data.daily * 100).toFixed(2) + '%'} caption='from last day'  />
                    <StatCard title='Weekly' data={(data.week * 100).toFixed(2) + '%'} caption='from last week'  />
                    <StatCard title='Monthly' data={(data.month * 100).toFixed(2) + '%'} caption='from last month'  />
                    {/* <Skeleton className="w-[100px] h-[20px] rounded-full" /> */}
                </div>
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
                    <Card className="col-span-4">
                        <CardHeader>
                            <CardTitle>Overview</CardTitle>
                        </CardHeader>
                        <CardContent className="pl-2">
                            <Overview />
                        </CardContent>
                    </Card>
                    <Card className="col-span-4 md:col-span-3">
                        <CardHeader>
                            <CardTitle>Recent Sales</CardTitle>
                            <CardDescription>
                                You made 265 sales this month.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <RecentSales />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </ScrollArea>
    );
}
