import { Input, MenuItem, Paper, Select, SelectChangeEvent, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material"
import { useEffect, useState } from "react"
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import { MovementsData } from "@interfaces/movements.interface";

export const TransferHistory = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page_count] = useState(0);
  const [multiplierFilter, setMultiplierFilter] = useState(0);
  const [transferData] = useState<MovementsData[]>([]);
  const formatDate = (date: string) => {
    if (!date) return ""
    return new Date(date).toLocaleDateString("es", { hour12: true, month: "short", hour: "2-digit", minute: "2-digit", day: "2-digit", year: "numeric" });
  };
  const formatCurrency = (amount: number) => {
    if (!amount) return 0
    return new Intl.NumberFormat("es-VE").format(amount);
  }
  const handleChangePage = (e: unknown, newPage: number) => {
    console.log({ e });

    setPage(newPage);
  };
  const handleChangeRowsPerPage = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };
  const handleMultiplierChange = (event: SelectChangeEvent) => {
    console.log(event);
    
  };

  useEffect(() => {

  }, []);

  return (
    <>
      <div className="flex row gap-2 items-center  pl-8 mx-auto flex-wrap !w-2/3">
        <Input className="w-1/4" placeholder="Fecha de inicio" title="Fecha inicio" type="date" />
        <Input className="w-1/4" placeholder="Fecha fin estimada" title="Fecha fin estimada" type="date" />
        <Select
          className="!flex !bg-white w-1/4"
          value={multiplierFilter.toString()}
          labelId="filter"
          id="multiplierFilter"
          label="Tipo de planificacion"
          onChange={handleMultiplierChange}
          placeholder="Tipo de planificacion"
          >
          <MenuItem value={0}>Revision</MenuItem>
          <MenuItem value={1}>Planificacion</MenuItem>
          <MenuItem value={2}>Vigilancia</MenuItem>
        </Select>
        <Select
          className="!flex !bg-white w-1/4"
          labelId="status"
          id="status"
          label="Estado"
          onChange={handleMultiplierChange}
          placeholder="Estado"
          >
          <MenuItem value={0}>Activo</MenuItem>
          <MenuItem value={1}>Inactivo</MenuItem>
          <MenuItem value={2}>Pausado</MenuItem>
          <MenuItem value={3}>Suspendido</MenuItem>
        </Select>
        <Input className="w-1/3" placeholder="Cliente" type="text" />
      </div>
      <TableContainer className="flex !w-2/3 !justify-center ml-[16vw]" component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="!text-[#779C9D] !font-bold" align="center">Fecha de inicio</TableCell>
              <TableCell className="!text-[#779C9D] !font-bold" align="center">Fecha fin estimada</TableCell>
              <TableCell className="!text-[#779C9D] !font-bold" align="center">Estado</TableCell>
              <TableCell className="!text-[#779C9D] !font-bold" align="center">Tipo</TableCell>
              <TableCell className="!text-[#779C9D] !font-bold" align="center">Cliente</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              transferData.map((data) => (
                <TableRow key={data.id}>
                  <TableCell align="center">
                    <div className="flex !flex-row">
                      {data.multiplier === 1 && (<ArrowCircleUpOutlinedIcon style={{ color: "#779C9D", marginRight: "20px" }} />)}
                      {data.multiplier === -1 && (<ArrowCircleDownOutlinedIcon style={{ color: "#779C9D", marginRight: "20px" }} />)}
                      {data.description || ""}
                    </div>
                  </TableCell>
                  <TableCell align="center">{`# ${data.id}` || ""}</TableCell>
                  <TableCell align="center">{formatDate(data?.updated_at) || ""}</TableCell>
                  <TableCell className="!text-[#085F63] !font-bold" align="center">{`${formatCurrency(data.balance)} Bs` || ""}</TableCell>
                  <TableCell align="center" style={{ color: `${data.multiplier === -1 ? "#F93652" : "#0AB087"}` }}>
                    {`${data.multiplier === 1 ? "+" : "-"} ${formatCurrency(data.amount)}` || ""}
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 20]}
        component={"div"}
        page={page}
        count={page_count}
        rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  )
}
