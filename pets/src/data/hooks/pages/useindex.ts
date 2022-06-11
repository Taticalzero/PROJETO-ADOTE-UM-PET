import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { Pet } from "../../@types/Pet";
import { ApiService } from "../../services/ApiService";

export function useIndex() {
    const [listPets, setListaPets] = useState<Pet[]>([]),
          [petSelect, setPetSelect] = useState<Pet | null>(null),
          [email, setEmail] = useState(''),
          [valor, setValor] = useState(''),
          [mensagem, setMensagem] = useState('');
    
    useEffect(() => {
        ApiService.get('/pets')
            .then((resposta) =>{
                setListaPets(resposta.data);
            })
    }, [])

    useEffect(() => {
        if(petSelect === null){
            limparForm();
        }
    }, [petSelect])

    function adotar(){
        if(petSelect !== null){
            if(validarDadosAdocao()){
                ApiService.post('/adocoes', {
                    pet_id: petSelect.id,
                    email,
                    valor
                })
                    .then(() => {
                        setPetSelect(null);
                        setMensagem('Sucesso, Você adotou um Pet !');
                        //limparForm();
                    })
                    .catch((error: AxiosError) => {
                        setMensagem(error.response?.data.message);
                    })
            } else {
                setMensagem('Preencha todos os campos corretamente !')
            }
        }
    }
    function validarDadosAdocao(){
        return email.length > 0 && valor.length > 0;
    }
    function limparForm(){
        setEmail('');
        setValor('');
    }
    return{
        listPets,
        petSelect,
        setPetSelect,
        email,
        setEmail,
        valor,
        setValor,
        mensagem,
        setMensagem,
        adotar
    };
}