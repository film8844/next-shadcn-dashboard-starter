'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"
import Month_API from "@/components/pools/API/monthly_api";
import { PoolsTable } from "./pooltable";
import Link from 'next/link'
import { StatCard } from "@/components/stat_card";

export function TabPool({ data }) {
    return (
        <Tabs defaultValue="grid" className="space-y-4">
            <TabsList>
                <TabsTrigger value="table">Table</TabsTrigger>
                <TabsTrigger value="grid" >
                    Grid
                </TabsTrigger>
            </TabsList>
            <TabsContent value="table" className="space-y-4">
                <PoolsTable pools={data} />
                {/* {data.map((d) => (
                    <div>
                        Pool Address: {d.pool_address}
                    </div>
                ))} */}
            </TabsContent>
            <TabsContent value="grid" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {data.map((d) => (
                        // eslint-disable-next-line react/jsx-key
                        <Link className="hover:shadow-2xl" href={`/dashboard/pools/`+d.id}>
                            <StatCard title={`Pool ID : `+d.id} data={d.profit * 100+`%`} caption={(<Month_API poolid={d.id} ></Month_API>) + `from last month`} badge={d.status} />
                            
                        </Link>

                    ))}
                </div>
            </TabsContent>
        </Tabs>
    )
}