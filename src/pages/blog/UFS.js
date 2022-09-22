import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { BlogCarousel } from '../../components/BlogCarousel'
import Footer from '../../components/Footer'
import {ReactComponent as Logo} from '../../images/logocomabe.svg'

export function UFS() {

    const scrollToTop = () => {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
              });
        }, 200)
    }

    
    return (
        <div className="bg-[#F6F6F6] w-full">
            <Helmet>
            <title>Blog - Como a UFS encontrou documentos perdidos através da digitalização</title>
            <meta name="description" content="A organização é importante para eficiência e fluidez de processos em um ambiente profissional." />
            <meta name="keywords" content='organização empresarial, fluxo documental, outsourcing, documentos digitais, rotuladores, eficiencia com rotuladores, organização de escritorios' />
            </Helmet>

            <div className='max-w-[1138px] mx-auto'>
            <div className='flex py-10'>
                <div className='flex-1'>
                    <Link to={'/'}><Logo className='w-[100px] lg:w-[110px] xl:w-[120px] 2xl:w-auto sm:w-auto'/></Link>
                </div>


            </div>
            </div>
            <div className='w-full flex justify-center'>
            <div className="w-[1138px] bg-white p-10 rounded-md shadow-lg mb-10">
                <div>
                    <h1 className='blog-title'>
                        Como a UFS encontrou documentos perdidos através da digitalização
                    </h1>
                </div>

                <div className='mt-8'>
                    <div className='flex justify-between flex-col md:flex-row'>
                        <div className='md:w-[45%]'>
                            <img src='https://uploaddeimagens.com.br/images/004/031/436/full/UFS.png?1663846055' alt=''/>
                        </div>

                        <div className='md:w-[52%] flex flex-col gap-5 mt-10 md:mt-0'>
                            <p className='blog-p'>
                                A Universidade Federal do Sergipe diminuiu o tempo que levava para buscar arquivos e encontrou trabalhos, documentos e peças perdidas em seu acervo físico.
                            </p>

                            <p className='blog-p'>
                                A instituição pôde oferecer mais qualidade na pesquisa acadêmica, organização empresarial e eficiência em tempo de trabalho através de uma solução:
                            </p>

                            <p className='blog-p'>
                                A digitalização de documentos.
                            </p>
                        </div>
                    </div>

                    <div className='mt-10'>
                        <div className='flex flex-col gap-5'>

                        <h2 className='blog-semititle'>
                            Cultura digital no ensino
                        </h2>

                        <p className='blog-p'>
                            O que aconteceu na universidade é um grande exemplo dos benefícios gerados pela adoção da cultura digital em instituições de ensino.
                        </p>

                        <p className='blog-p'>
                            Com a constante produção de conteúdo, chegada de novos clientes e necessidade de gerir despesas mensalmente, o montante de papéis acumula-se.
                        </p>

                        <p className='blog-p'>
                            A desorganização pode rapidamente aumentar o tempo de localização de arquivos, fazer trabalhos importantes serem perdidos e reduzir a performance dos administradores, estudantes e pesquisadores.
                        </p>

                        <h2 className='blog-semititle'>
                            Soluções eficientes
                        </h2>

                        <p className='blog-p'>
                            Neste cenário, a digitalização surge como uma oportunidade de solução eficaz para instituições de ensino
                        </p>

                        <p className='blog-p'>
                            Para auxiliar a padronizar este processo, o Governo lançou a Portaria Nº 613/2022, que apresenta procedimentos a serem seguidos para a digitalização de pesquisas acadêmicas.
                        </p>

                        <p className='blog-p'>
                            A gestão de fluxos documentais eletrônica soluciona a desordem gerada por arquivos físicos, organizando-os em um banco de dados de forma estruturada e clara.
                        </p>

                        <p className='blog-p'>
                            O encontro de pesquisas é outra parte fundamental, pois permite que estudantes tenham mais referências e possibilidades na realização de trabalhos e pesquisas.
                        </p>

                        <p className='blog-p'>
                            O upgrade tecnológico ainda pode trazer para universidades posicionamento no ranking de educação do país, por proporcionar aos alunos as melhores ferramentas de aprendizado.
                        </p>

                        <h2 className='blog-semititle'>
                            Mudanças simples
                        </h2>

                        <p className='blog-p'>
                            Implementar o processo não é difícil e envolve menos trabalho do que se pode esperar.
                        </p>

                        <p className='blog-p'>
                            Isto porque existem empresas especializadas no processo de gestão documental eletrônica, que entregam soluções eficientes.
                        </p>

                        <p className='blog-p'>
                            Com o equipamento correto, o processo de digitalização e descarte de arquivos físicos é rápido e simples.
                        </p>

                        <p className='blog-p'>
                            Softwares de gestão digital de documentos tornam a busca e manuseio de documentos fácil e acessível para qualquer necessidade.
                        </p>

                        <p className='blog-p'>
                            A segurança é outro ponto importante, que deve ser levado a sério em boas soluções, garantindo o sigilo de arquivos importantes.
                        </p>

                        <h2 className='blog-semititle'>
                            Conheça as vantagens da digitalização
                        </h2>

                        <p className='blog-p'>
                            Você pode conhecer mais sobre a digitalização de documentos através do <Link className='underline text-blue-400' onClick={scrollToTop} to='/digitaliza%C3%A7%C3%A3o'>e-book gratuito</Link> entregue a você pela Comabe.
                        </p>

                        <p className='blog-p'>
                            Além disso, oferecemos o <Link className='underline text-blue-400' onClick={scrollToTop} to='/business-scan'>Business scan</Link>, uma solução completa no setor de digitalização de arquivos para sua universidade realizar a transição para o digital de forma rápida e estruturada.
                        </p>

                        <p className='blog-p'>
                            Tem dúvidas? Entre em contato com a Comabe e saiba como a digitalização pode ajudar! 
                        </p>

                        </div>
                    </div>
                </div>
            </div>
            </div>

            <div>
            <BlogCarousel />
            </div>
            <Footer />
        </div>
    )
}