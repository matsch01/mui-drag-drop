import * as React from 'react';
import {
    DataGridPremium, GridColDef,
    GridRowModel,
    GridRowOrderChangeParams,
} from '@mui/x-data-grid-premium';

const columnsWithStyleColumn: GridColDef[] = [
    { headerName: 'Column 1', type: 'string', width: 100, field: 'value1', align: 'left', cellClassName: () => 'GridCell-Invalid' },
    { headerName: 'Column 2', type: 'string', width: 100, field: 'value2', align: 'right' },
];

const data: GridRowModel[] = [
    { id: 'row.1', value1: 'Joe', value2: '1' },
    { id: 'row.2', value1: 'Matt', value2: '2' },
    { id: 'row.3', value1: 'Sam', value2: '3' }
];

function updateRowPosition(
    initialIndex: number,
    newIndex: number,
    rows: Array<GridRowModel>,
): Promise<any> {
    return new Promise((resolve) => {
        setTimeout(
            () => {
                const rowsClone = [...rows];
                const row = rowsClone.splice(initialIndex, 1)[0];
                rowsClone.splice(newIndex, 0, row);
                resolve(rowsClone);
            },
            // Math.random() * 500 + 100,
        ); // simulate network latency
    });
}

export default function RowOrderingGrid() {

    const [rows, setRows] = React.useState(data);

    React.useEffect(() => {
        setRows(data);
    }, []);

    const handleRowOrderChange = async (params: GridRowOrderChangeParams) => {

        const newRows = await updateRowPosition(
            params.oldIndex,
            params.targetIndex,
            rows,
        );

        setRows(newRows);
    };

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGridPremium
                columns={columnsWithStyleColumn}
                rows={data}
                rowReordering
                onRowOrderChange={handleRowOrderChange}
            />
        </div>
    );
}
