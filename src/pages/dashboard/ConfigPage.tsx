import { Box } from "@mui/material"
import { ChangePassword } from "./components";

export const USER_ROUTE = 'usuario';

export const ConfigPage = () => {
  return (
    <Box className="!bg-gray-400 h-full py-8 px-2">
        <ChangePassword/>
    </Box>
  )
}
