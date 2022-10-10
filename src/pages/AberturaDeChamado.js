import { Box, Button, Heading, Image, Input, Select, Skeleton, Stack, Text, Textarea } from "@chakra-ui/react"
import InputMask from 'react-input-mask'
import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";
import { useState } from "react";
import { WhatsappButton } from "../components/WhatsappButton";

export const AberturaDeChamado = () => {

    const [cpfCnpj, setCpfCnpj] = useState("");
    const [mask, setMask] = useState("");

    const [isLoading, setIsLoading] = useState(true)

    const handleSubmit = () => {
        setIsLoading(false)
    }


    return (
        <Box backgroundImage='/images/bg-chamado.png' backgroundSize='cover' w='100%' h='100vh' display='flex' justifyContent='center' alignItems='center'>
            <Box bg='#FFF' boxShadow='0px 4px 15px 0px #00000020' w={{sm: '360px', md: '600px'}} h={{sm: '600px', lg: 'auto', '2xl':'800px'}} borderRadius='16px' overflow='auto'>
                <Box backgroundImage='/images/bg-form.png' backgroundSize='cover' w='100%' h={{sm: '90px', lg: '120px', '2xl': '160px'}} backgroundPosition={{md: '0px -140px'}} paddingBottom={{md: '30px'}} display='flex' flexDirection='column' justifyContent='center' paddingLeft='20px'>
                    <Image w={{sm: '100px', md: '200px'}} src='/images/logo.png' />
                    <Text paddingLeft={{sm: '8px', md: '16px'}} lineHeight={{sm: '1', md: '0'}} color='#FFF'>
                        Soluções <strong>personalizadas</strong> para simplificar a rotina da sua empresa
                    </Text>
                </Box>

                <Box padding='20px'>
                    <Heading as='h1' fontSize={{sm: '20px', md: '28px'}} textTransform='uppercase' fontWeight='900'>
                        Abertura de Chamado
                    </Heading>

                    <Box marginTop='12px'>
                        <form onSubmit={handleSubmit} action="https://submit-form.com/yjUTgExK">
                            <input type="hidden" name="_email.template.title" value="Formulário - Abertura de Chamado" />
                            <input type="hidden" name="_email.template.footer" value="false" />
                            <input type="hidden" name="_email.from" value="https://grupocomabe.com.br/abertura-de-chamado" />
                            <input type="hidden" name="_email.subject" value="Formulário - Abertura de Chamado" />
                            <input type="hidden" name="_redirect" value={`https://grupocomabe.com.br/enviado`} />

                            <Stack>
                            <Input required value={cpfCnpj} onChange={(event, type) => { setCpfCnpj(event.target.value); setMask(type === "CPF") }} as={CpfCnpj} w='100%' h={{sm: '36px', xl: '40px', '2xl':'52px'}} border='1px solid #000' borderRadius='6px' paddingLeft='12px'
                            placeholder="CNPJ/CPF"
                            name="CNPJ/CPF"

                            />
                            <Input required w='100%' h={{sm: '36px', xl: '40px', '2xl':'52px'}} border='1px solid #000' borderRadius='6px' paddingLeft='12px'
                            placeholder="Nome Completo"
                            name="Nome Completo"
                            />

                            <Input required mask='(99) 9 9999-9999' as={InputMask} w='100%' h={{sm: '36px', xl: '40px', '2xl':'52px'}} border='1px solid #000' borderRadius='6px' paddingLeft='12px'
                            placeholder="Telefone"
                            name="Telefone"
                            />

                            <Input required w='100%' h={{sm: '36px', xl: '40px', '2xl':'52px'}} border='1px solid #000' borderRadius='6px' paddingLeft='12px'
                            placeholder="Local e Endereço"
                            name="Local e Endereço"
                            />

                            <Select required name="Modelo da Impressora" w='100%' h={{sm: '36px', xl: '40px', '2xl':'52px'}} border='1px solid #000' borderRadius='6px' placeholder='Modelo da Impressora' size='lg'>
                                <option disabled></option>
                                <option className="font-black" disabled>BROTHER</option>
                                <option value='Brother DCP-8157DN'>Brother DCP-8157DN</option>
                                <option value='Brother MFC-8952DW'>Brother MFC-8952DW</option>
                                <option value='Brother HL-5452DN'>Brother HL-5452DN</option>
                                <option value='Brother DCP-7065DN'>Brother DCP-7065DN</option>
                                <option value='Brother MFC-7460DN'>Brother MFC-7460DN</option>
                                <option value='Brother HL-2270FW'>Brother HL-2270FW</option>
                                <option value='Brother DCP-L2540DW'>Brother DCP-L2540DW</option>
                                <option value='Brother HL-2360DW'>Brother HL-2360DW</option>
                                <option value='Brother-B7535DW'>Brother-B7535DW</option>
                                <option value='Brother DCP-L5652DN'>Brother DCP-L5652DN</option>
                                <option value='Brother MFC-L6702DW'>Brother MFC-L6702DW</option>
                                <option value='Brother MFC-L6902DW'>Brother MFC-L6902DW</option>
                                <option value='Brother HL-L6202DW'>Brother HL-L6202DW</option>
                                <option value='Brother MFC-T4500DW'>Brother MFC-T4500DW</option>
                                <option value='Brother DCP-T420W / DCP-T720W / DCP-T820W'>Brother DCP-T420W / DCP-T720W / DCP-T820W</option>
                                <option value='Brother DCP-T500W / DCP-T700W'>Brother DCP-T500W / DCP-T700W</option>
                                <option value='Brother DCP-T510W'>Brother DCP-T510W</option>
                                <option disabled></option>
                                <option className="font-black" disabled>EPSON</option>
                                <option value='Epson M1180'>Epson M1180</option>
                                <option value='Epson M3180'>Epson M3180</option>
                                <option value='Epson WF-C5710'>Epson WF-C5710</option>
                                <option value='Epson WF-C5790'>Epson WF-C5790</option>
                                <option value='Epson WF-M5799'>Epson WF-M5799</option>
                                <option value='Epson WF-M5299'>Epson WF-M5299</option>
                                <option value='Epson L6191'>Epson L6191</option>
                                <option value='Epson L1455'>Epson L1455</option>
                                <option value='Epson L15150'>Epson L15150</option>
                                <option value='Epson L656'>Epson L656</option>
                                <option disabled></option>
                                <option className="font-black" disabled>KYOCERA</option>
                                <option value='Kyocera M2040dn'>Kyocera M2040dn</option>
                                <option value='Kyocera KM-2810'>Kyocera KM-2810</option>
                                <option value='Kyocera KM-2820'>Kyocera KM-2820</option>
                                <option value='Kyocera M2035dn'>Kyocera M2035dn</option>
                                <option value='Kyocera M1035dn'>Kyocera M1035dn</option>
                                <option value='Kyocera M3640idn'>Kyocera M3640idn</option>
                                <option value='Kyocera M3655idn'>Kyocera M3655idn</option>
                                <option value='Kyocera FS4200dn'>Kyocera FS4200dn</option>
                                <option disabled></option>
                                <option className="font-black" disabled>RICOH</option>
                                <option value='Ricoh M320F'>Ricoh M320F</option>
                                <option value='Ricoh P311'>Ricoh P311</option>
                                <option value='Ricoh IM430F'>Ricoh IM430F</option>
                                <option disabled></option>
                                <option className="font-black" disabled>XEROX</option>
                                <option value='Xerox C7020'>Xerox C7020</option>


                            </Select>

                            <Input required w='100%' h={{sm: '36px', xl: '40px', '2xl':'52px'}} border='1px solid #000' borderRadius='6px' paddingLeft='12px'
                            placeholder="Número de Série"
                            name="Número de Série"
                            />

                            <Textarea required name='Descrição do problema' placeholder="Descrição do Defeito" w='100%' h={{sm: '100px', xl: '80px', '2xl':'120px'}} border='1px solid #000' borderRadius='6px' paddingLeft='12px' paddingTop='12px'/>
                            </Stack>

                            <Box display='flex' justifyContent='flex-end' alignItems='flex-end' gap='20px'>
                            <Text display={isLoading? 'none' : 'block'}>
                                Enviando...
                            </Text>
                            <Skeleton isLoaded={isLoading} marginTop='6px'>
                            <Button type='submit' className="ButtonPrimary" color='#FFF' w='120px' h={{sm: '36px', xl: '40px', '2xl':'52px'}} borderRadius='6px' marginTop='12px' fontSize='18px' fontWeight='600'> 
                                Enviar
                            </Button>
                            </Skeleton>
                            </Box>
                        </form>
                    </Box>
                </Box>
            </Box>
            <WhatsappButton number="555426212300"/>
        </Box>
    )
}