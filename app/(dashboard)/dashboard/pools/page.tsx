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


const breadcrumbItems = [{ title: "Pools", link: "/dashboard/pools" }];

async function fetchData() {
    const url = 'https://api.boi.fund/api/pools/';
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


export default async function page() {
    const data = await fetchData()

    return (
        <ScrollArea className="h-full">
            <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
                <BreadCrumb items={breadcrumbItems} />
                <div className="flex items-start justify-between">
                    <Heading title={`Pools`} description="Manage pools on database" />
                </div>
                <TabPool data={data} />
            </div>
        </ScrollArea>
    );
}
