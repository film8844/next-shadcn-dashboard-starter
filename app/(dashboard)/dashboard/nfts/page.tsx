'use client'
import BreadCrumb from "@/components/breadcrumb";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Heading } from "@/components/ui/heading";
import axios from 'axios'; // Import Axios
import { useEffect, useState } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";



const breadcrumbItems = [{ title: "NFTs", link: "/dashboard/nfts" }];
export default function page() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.boi.fund/api/nfts/', {
                    headers: {
                        'api-key': 'test',
                    },
                });
                setData(response.data);
                console.log(response.data);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <ScrollArea className="h-full">
            <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
                <BreadCrumb items={breadcrumbItems} />
                <div className="flex items-start justify-between">
                    <Heading title={`NFTs (${data.length})`} description="Manage NFTs on database" />
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button>Add a new NFT</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Create New NFT</DialogTitle>
                                <DialogDescription>
                                    create a new NFT with address on smart contract.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="address" className="text-right">
                                        Address
                                    </Label>
                                    <Input id="address" placeholder="0x6B2b2999d3800dCf2d99E99d6dE0a602De051dAe" className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="start_value" className="text-right">
                                        Start Value
                                    </Label>
                                    <Input id="start_value" placeholder="0.001" className="col-span-3" />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button type="submit">Save changes</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
                <Tabs defaultValue="grid" className="space-y-4">
                    <TabsList>
                        <TabsTrigger value="table">Table</TabsTrigger>
                        <TabsTrigger value="grid" >
                            Grid
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="table" className="space-y-4">
                        Table
                        {data.map((d) => (
                            <div>
                                NFT Address: {d.nft_address}
                            </div>
                        ))}
                    </TabsContent>
                    <TabsContent value="grid" className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                            {data.map((d) => (
                                <Card className="overflow-hidden">
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">
                                            NFT ID : {d.id}
                                        </CardTitle>
                                        {/* <Badge className="capitalize"></Badge> */}
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">{d.start_value}ETH</div>
                                        <p className="text-xs text-muted-foreground">
                                            {/* +20.1% from last month */}
                                            {/* {d.pool_address} */}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </ScrollArea>
    );
}
