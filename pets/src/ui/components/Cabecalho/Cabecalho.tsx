import{
    CabecalhoContainer,
    Logo
} from './Cabecalho.style';

export default function Cabecalho() {
    return(
        <CabecalhoContainer>
            <Logo src='/imagens/logo.png'  alt='Adote um Pet' />
        </CabecalhoContainer>
    )
}