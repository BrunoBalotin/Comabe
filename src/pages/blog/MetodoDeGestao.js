import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { BlogCarousel } from '../../components/BlogCarousel'
import Footer from '../../components/Footer'
import {ReactComponent as Logo} from '../../images/logocomabe.svg'

export function MetodoDeGestao() {

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
            <title>Blog - Um método de gestão empresarial para ganhar tempo</title>
            <meta name="description" content="Conforme a tecnologia avança, diversos documentos tornam-se digitais. Bibliotecas inteiras podem ser encontradas na internet." />
            <meta name="keywords" content='gestão empresarial, fluxo documental, outsourcing, documentos digitais' />
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
                        Um método de gestão empresarial para ganhar tempo
                    </h1>
                </div>

                <div className='mt-8'>
                    <div className='flex justify-between flex-col md:flex-row'>
                        <div className='md:w-[45%]'>
                            <img src='https://uploaddeimagens.com.br/images/003/975/887/full/capa_artigo%28_M%C3%A9todo_de_Gest%C3%A3o%29.png?1660152340' alt=''/>
                        </div>

                        <div className='md:w-[52%] flex flex-col gap-5 mt-10 md:mt-0'>
                            <p className='blog-p'>
                                Conforme a tecnologia avança, diversos documentos tornam-se digitais. Bibliotecas inteiras podem ser encontradas na internet.
                            </p>

                            <p className='blog-p'>
                                Apesar disto, a impressão ainda é necessária em diversas empresas, onde documentos físicos desempenham um papel fundamental, como hospitais, escritórios de advocacia e no varejo.
                            </p>

                            <p className='blog-p'>
                                O tempo investido nestas atividades, com a escolha dos equipamentos corretos, o gasto com manutenção e a constante atenção aos estoques de suprimentos podem ser incômodos.
                            </p>
                        </div>
                    </div>

                    <div className='mt-10'>
                        <div className='flex flex-col gap-5'>
                        <p className='blog-p'>
                            Diante desta necessidade, muitas empresas optam pelo outsourcing: <strong>contratar empresas especializadas para alugar impressoras e comprar suprimentos.</strong>
                        </p>

                        <p className='blog-p'>
                            Esta prática traz diversos benefícios para a contratante, pois:
                        </p>

                        <strong className='blog-p'>
                            1. Permite que tecnologias de última geração sejam alocadas dentro da instituição, sem o custo elevado destes equipamentos. 
                        </strong>

                        <strong className='blog-p'>
                            2. Aumenta a produtividade da empresa.
                        </strong>

                        <strong className='blog-p'>
                            3. A organização responsável pelo outsourcing calcula o gasto de folhas e cartuchos, oferecendo suprimentos   periodicamente.
                        </strong>

                        <strong className='blog-p'>
                            4. A manutenção pode ser solicitada a qualquer momento e é realizada por um técnico especializado sem custo adicional. 
                        </strong>

                        <p className='blog-p'>
                            Com o outsourcing, as impressões deixam de ser uma tarefa complexa e a equipe pode concentrar-se nos objetivos mais importantes.
                        </p>

                        <p className='blog-p'>
                            É pelo <strong>desejo de empresas mais eficientes</strong> que a Comabe realiza o outsourcing de impressão de última geração, com as melhores marcas do mercado e melhores soluções na gestão do fluxo documental
                        </p>

                        <p className='blog-p'>
                            Entre em contato com um de nossos consultores  e descubra como otimizar os processos da sua empresa com economia e segurança .
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