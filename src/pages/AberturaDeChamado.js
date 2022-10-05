import { Box, Button, Heading, Image, Input, Select, Stack, Text, Textarea } from "@chakra-ui/react"
import InputMask from 'react-input-mask'
import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";
import { useState } from "react";

export const AberturaDeChamado = () => {

    const [cpfCnpj, setCpfCnpj] = useState("");
    const [mask, setMask] = useState("");


    return (
        <Box backgroundImage='/images/bg-chamado.png' backgroundSize='cover' w='100%' h='100vh' display='flex' justifyContent='center' alignItems='center'>
            <Box bg='#FFF' boxShadow='0px 4px 15px 0px #00000020' w='600px' h='800px' borderRadius='16px' overflow='hidden'>
                <Box backgroundImage='/images/bg-form.png' backgroundSize='cover' w='100%' h='160px' backgroundPosition='0px -140px' paddingBottom='30px' display='flex' flexDirection='column' justifyContent='center' paddingLeft='20px'>
                    <Image w='200px' src='/images/logo.png' />
                    <Text paddingLeft='16px' lineHeight='0' color='#FFF'>
                        Soluções <strong>personalizadas</strong> para simplificar a rotina da sua empresa
                    </Text>
                </Box>

                <Box padding='20px'>
                    <Heading as='h1' fontSize='28px' textTransform='uppercase' fontWeight='900'>
                        Abertura de Chamado
                    </Heading>

                    <Box marginTop='12px'>
                        <form>
                            <Stack>
                            <Input required value={cpfCnpj} onChange={(event, type) => { setCpfCnpj(event.target.value); setMask(type === "CPF") }} as={CpfCnpj} w='100%' h='52px' border='1px solid #000' borderRadius='6px' paddingLeft='12px'
                            placeholder="CNPJ/CPF"
                            name="CNPJ/CPF"

                            />
                            <Input required w='100%' h='52px' border='1px solid #000' borderRadius='6px' paddingLeft='12px'
                            placeholder="Nome Completo"
                            name="Nome Completo"
                            />

                            <Input required mask='(99) 9 9999-9999' as={InputMask} w='100%' h='52px' border='1px solid #000' borderRadius='6px' paddingLeft='12px'
                            placeholder="Telefone"
                            name="Telefone"
                            />

                            <Input required w='100%' h='52px' border='1px solid #000' borderRadius='6px' paddingLeft='12px'
                            placeholder="Local e Endereço"
                            name="Local e Endereço"
                            />

                            <Select required name="Modelo da Impressora" w='100%' h='52px' border='1px solid #000' borderRadius='6px' placeholder='Modelo da Impressora' size='lg'>
                                <option disabled></option>
                                <option className="font-black" disabled>BROTHER</option>
                                <option>Brother DCP-8157DN</option>
                                <option>Brother MFC-8952DW</option>
                                <option>Brother HL-5452DN</option>
                                <option>Brother DCP-7065DN</option>
                                <option>Brother MFC-7460DN</option>
                                <option>Brother HL-2270FW</option>
                                <option>Brother DCP-L2540DW</option>
                                <option>Brother HL-2360DW</option>
                                <option>Brother-B7535DW</option>
                                <option>Brother DCP-L5652DN</option>
                                <option>Brother MFC-L6702DW</option>
                                <option>Brother MFC-L6902DW</option>
                                <option>Brother HL-L6202DW</option>
                                <option>Brother MFC-T4500DW</option>
                                <option>Brother DCP-T420W / DCP-T720W / DCP-T820W</option>
                                <option>Brother DCP-T500W / DCP-T700W</option>
                                <option>Brother DCP-T510W</option>
                                <option disabled></option>
                                <option className="font-black" disabled>EPSON</option>
                                <option>Epson M1180</option>
                                <option>Epson M3180</option>
                                <option>Epson WF-C5710</option>
                                <option>Epson WF-C5790</option>
                                <option>Epson WF-M5799</option>
                                <option>Epson WF-M5299</option>
                                <option>Epson L6191</option>
                                <option>Epson L1455</option>
                                <option>Epson L15150</option>
                                <option>Epson L656</option>
                                <option disabled></option>
                                <option className="font-black" disabled>KYOCERA</option>
                                <option>Kyocera M2040dn</option>
                                <option>Kyocera KM-2810</option>
                                <option>Kyocera KM-2820</option>
                                <option>Kyocera M2035dn</option>
                                <option>Kyocera M1035dn</option>
                                <option>Kyocera M3640idn</option>
                                <option>Kyocera M3655idn</option>
                                <option>Kyocera FS4200dn</option>
                                <option disabled></option>
                                <option className="font-black" disabled>RICOH</option>
                                <option>Ricoh M320F</option>
                                <option>Ricoh P311</option>
                                <option>Ricoh IM430F</option>
                                <option disabled></option>
                                <option className="font-black" disabled>XEROX</option>
                                <option>Xerox C7020</option>


                            </Select>

                            <Input required mask='(99) 9 9999-9999' as={InputMask} w='100%' h='52px' border='1px solid #000' borderRadius='6px' paddingLeft='12px'
                            placeholder="Número de Série"
                            name="Número de Série"
                            />

                            <Textarea placeholder="Descrição do Defeito" w='100%' h='120px' border='1px solid #000' borderRadius='6px' paddingLeft='12px' paddingTop='12px'/>
                            </Stack>

                            <Box display='flex' justifyContent='flex-end'>
                            <Button className="ButtonPrimary" color='#FFF' w='120px' h='52px' borderRadius='6px' marginTop='12px' fontSize='18px' fontWeight='600'> 
                                Enviar
                            </Button>
                            </Box>
                        </form>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}