import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"


export function PoolsTable({pools}) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Address</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Profit</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {pools.map((pool) => (
                    <TableRow >
                        <TableCell className="font-medium">{pool.id}</TableCell>
                        <TableCell>{pool.pool_address}</TableCell>
                        <TableCell><Badge className="capitalize">{pool.status}</Badge></TableCell>
                        <TableCell className="text-right">{pool.profit* 100}%</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}
