import { DataGrid } from '@mui/x-data-grid';
import styles from './StatusTable.module.scss';

const columns =  [
    { field: 'col1', headerName: 'Loaner', flex:1 },
    { field: 'col2', headerName: 'Staked', flex:1, align:'right', headerAlign:'right'},
  ];

const rows = [
    { id: 1, col1: 'ZEOS', col2: '300 EOS' },
    { id: 2, col1: 'ZEOS', col2: '300 EOS' },
    { id: 3, col1: 'ZEOS', col2: '300 EOS'  },
  ]

export const StatusTable = () =>{
    return(
        <div className={styles.main}>
            <div className={styles.container}>
            <DataGrid
            classes={{
                main:styles.table
            }}
             rows={rows} 
             columns={columns} 
             autoHeight
             hideFooter
             />
             
        </div>
        </div>
    )
} 