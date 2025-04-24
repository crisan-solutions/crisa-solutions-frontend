import { Box } from '@mui/material'
import { TransferHistory } from './components'

export const PLANIFICATION_ROUTE = 'planification'


export const PlanificationPage = () => {
    return (
        <Box className="!bg-gray-400 h-full py-8 px-2">
            <TransferHistory />
        </Box>
    )
}
