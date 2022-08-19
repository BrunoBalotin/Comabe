import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { BlogCarousel } from '../../components/BlogCarousel'
import Footer from '../../components/Footer'
import {ReactComponent as Logo} from '../../images/logocomabe.svg'

export function Paperless() {

    
    return (
        <div className="bg-[#F6F6F6] w-full">
            <Helmet>
            <title>Blog - Paperless: A cultura da eficiência</title>
            <meta name="description" content="Conforme a tecnologia avança, diversos documentos tornam-se digitais. Bibliotecas inteiras podem ser encontradas na internet." />
            <meta name="keywords" content='gestão empresarial, fluxo documental, outsourcing, documentos digitais' />
            </Helmet>
            <div className='max-w-[1138px] mx-auto'>
            <div className='flex py-10'>
                <div className='flex-1'>
                    <Link to={'/'}><Logo className='w-[100px] lg:w-[110px] xl:w-[120px] 2xl:w-auto sm:w-auto'/></Link>
                </div>

               {/*  <div>
                    <Link to='/'>
                    Ver outros artigos
                    </Link>
                </div>

                */}


            </div>
            </div>
            <div className='w-full flex justify-center'>
            <div className="w-[1138px] bg-white p-10 rounded-md shadow-lg mb-10">
                <div>
                    <h1 className='blog-title'>
                        Paperless: A cultura da eficiência
                    </h1>
                </div>

                <div className='mt-8'>
                    <div className='flex justify-between flex-col md:flex-row'>
                        <div className='md:w-[45%]'>
                            <img src='https://live.staticflickr.com/65535/52296114086_01e80c3a74_b.jpg' alt=''/>
                        </div>

                        <div className='md:w-[52%] flex flex-col gap-5'>
                            <p className='blog-p'>
                                Nos últimos anos, diversas empresas depararam-se com a necessidade de se digitalizar.
                            </p>

                            <p className='blog-p'>
                                O próprio governo brasileiro passou a resolver processos de maneira digital, buscando soluções modernas, como aplicativos e processos virtuais.
                            </p>

                            <p className='blog-p'>
                                A documentação física, que sempre foi burocrática e demorada, tem se tornado cada vez mais simples, por exemplo, com a abertura de contas em bancos.
                            </p>

                            
                        </div>
                    </div>

                    <div className='mt-10'>
                        <div className='flex flex-col gap-5'>
                        <p className='blog-p'>
                            A digitalização é importante. 
                        </p>


                        <p className='blog-p'>
                            O decreto <strong>Nº 10.278</strong>, DE 18 DE MARÇO DE 2020, estabelece procedimentos padrões para a digitalização de documentos e regulamentação das disposições da Lei nº <strong>13.874/2019</strong> e da Lei nº <strong>12.682/2012</strong>.
                        </p>

                        <p className='blog-p'>
                            Esta transição indica um coisa:
                        </p>

                        <p className='blog-p'>
                            <strong>Digitalizar é modernizar e tornar-se eficiente.</strong>
                        </p>

                        <p>
                            Muitas empresas têm abraçado a cultura Paperless, o uso de menos papéis físicos, com documentos em um banco de dados exclusivo do negócio.
                        </p>

                        <p>
                            Esta mudança oferece diversos benefícios às instituições, tais como:
                        </p>

                        <p className='blog-p'>
                            1. <strong>Facilidade de seleção: </strong> Os documentos ficam organizados de maneira lógica, de forma que em 15 segundos, qualquer arquivo possa ser encontrado.
                        </p>

                        <p className='blog-p'>
                            2. <strong>Impressão em qualquer lugar: </strong> documentos digitalizados podem ser impressos por pessoas autorizadas em qualquer lugar com um computador e uma impressora.
                        </p>

                        <p className='blog-p'>
                            3. <strong>Economia de espaço: </strong> Sem a necessidade de uma sala específica para documentos, a empresa possui um ambiente otimizado.
                        </p>

                        <p className='blog-p'>
                            4. <strong>Eficiência de impressões: </strong> Folhas ainda serão necessárias, entretanto, apenas material de utilidade física será impresso, gerando mais aproveitamento.
                        </p>

                        <p className='blog-p'>
                        A Digitalização é um processo que exige um método definido e organizado. Para isto, empresas especializadas, como a Comabe, possuem soluções de gestão para fluxos documentais automatizados, digitalização estruturada de documentos de RH, contratos, notas fiscais e despesas. 
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