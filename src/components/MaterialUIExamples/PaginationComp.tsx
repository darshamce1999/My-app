import { Link, Pagination, PaginationItem } from "@mui/material"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { TablePagination } from '@mui/material';
import { useState } from "react";


export const PaginationComp = () => {

    return <Pagination count={10} boundaryCount={2} color="primary" shape="rounded" 
                showFirstButton={true}
                showLastButton={true}
                variant="outlined"
                onChange = {(event, page)=>{
                    console.log(event)
                    console.log(page)
                }}
                renderItem={(item) => (
                    // console.log(item)
                    <PaginationItem {...item} component={Link} 
                    slots={{first:ArrowBackIcon, next: AddCircleIcon}}
                    />
                )}
            />
}

export const TablePaginationComp = () => { 
    const [page,setPage] = useState(0)
    const [rowsPerPage,setRowsPerPage] = useState(10)

    return <TablePagination count={500} page={page} rowsPerPage={rowsPerPage} 
        onPageChange={(event,page)=> {
            setPage(page)
        }} 
        onRowsPerPageChange={(event)=>{
            setRowsPerPage(parseInt(event.target.value))
            setPage(0)
        }}
        rowsPerPageOptions={[10,25,100,250]}

        labelRowsPerPage={<p>Number of rows per page</p>}
        showFirstButton={true}
        showLastButton={true}
        />
}

