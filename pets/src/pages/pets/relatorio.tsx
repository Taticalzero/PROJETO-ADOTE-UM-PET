import { NextPage } from "next";
import Titulo from "../../ui/components/Titulo/Titulo";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { useRelatorio } from "../../data/hooks/pages/pets/useRelatorio";


const Relatorio: NextPage = () => {
    const { listaRelatorio } = useRelatorio();
    return (
        <>
            <Titulo
                titulo={'Relatorio de Adoção'}
                subtitulo={'Veja a lista de pets adotados'}
            />
            <TableContainer
                component={Paper}
                sx={{ maxWidth: 830, mx: 'auto', p: { xs: 3, md: 5 } }}

            >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Pet</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell align={'right'}>Valor Doado</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listaRelatorio.map((relatorio) => (
                            <TableRow key={relatorio.id}>
                                <TableCell>{relatorio.pet.nome}</TableCell>
                                <TableCell>{relatorio.email}</TableCell>
                                <TableCell align={"right"}>{relatorio.valor}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Relatorio;