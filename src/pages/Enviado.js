import { Box, Button, Heading, Image, Input, Select, Stack, Text, Textarea } from "@chakra-ui/react"
import { useState } from "react";
import { WhatsappButton } from "../components/WhatsappButton";
import { BsCheckCircleFill } from 'react-icons/bs'
import { Link } from "react-router-dom";

export const Enviado = () => {


    return (
        <Box backgroundImage='/images/bg-chamado.png' backgroundSize='cover' w='100%' h='100vh' display='flex' justifyContent='center' alignItems='center'>
            <Box bg='#FFF' boxShadow='0px 4px 15px 0px #00000020' w={{sm: '360px', md: '1000px'}} h={{sm: '600px', 'lg':'500px'}} borderRadius='16px' overflow='auto'>
                <Box display='flex' justifyContent='center' marginTop='80px'>
                <BsCheckCircleFill size={160} color='#519C2B'/>
                </Box>
                <Heading textAlign='center' marginTop='36px'>
                    Sua abertura de chamado foi enviado com êxito!
                </Heading>
                <Text textAlign='center' marginTop='12px' fontSize='18px'>
                    Responderemos o mais breve possível.
                </Text>
                <Box display='flex' justifyContent='center' alignItems='center' marginTop='20px' gap='20px'>
                <Link to='/'>
                    <Text color='blue.500' textDecoration='underline'  fontSize='18px'>
                    Voltar ao site
                    </Text>
                </Link>
                <Button to='/abertura-de-chamado' as={Link} bg='transparent linear-gradient(90deg, #0F5197 0%, #0088FF 100%) 0% 0% no-repeat padding-box' bgSize='100%' transition='300ms' color='#FFF' _hover={{bg: '', bgSize: '200%'}}>
                    ABRIR NOVO CHAMADO
                </Button>
                </Box>
            </Box>
            <WhatsappButton number="555426212300"/>
        </Box>
    )
}