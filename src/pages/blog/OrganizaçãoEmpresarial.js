import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { BlogCarousel } from '../../components/BlogCarousel'
import Footer from '../../components/Footer'
import {ReactComponent as Logo} from '../../images/logocomabe.svg'

export function OrganizaoEmpresarial() {

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
            <title>Blog - Organização empresarial: Maior eficiência com rotuladores</title>
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
                        Organização empresarial: Maior eficiência com rotuladores
                    </h1>
                </div>

                <div className='mt-8'>
                    <div className='flex justify-between flex-col md:flex-row'>
                        <div className='md:w-[45%]'>
                            <img src='https://uploaddeimagens.com.br/images/003/987/090/full/rotulador.png?1660910184' alt=''/>
                        </div>

                        <div className='md:w-[52%] flex flex-col gap-5 mt-10 md:mt-0'>
                            <p className='blog-p'>
                                A organização é importante para eficiência e fluidez de processos em um ambiente profissional.
                            </p>

                            <p className='blog-p'>
                                Ordenar e catalogar documentos, materiais e cabeamentos manualmente pode ser uma tarefa desgastante.
                            </p>

                            <p className='blog-p'>
                                Muitas horas são utilizadas para identificar e estruturar o local de trabalho.
                            </p>
                        </div>
                    </div>

                    <div className='mt-10'>
                        <div className='flex flex-col gap-5'>
                        <p className='blog-p'>
                            Rotuladores aceleram e profissionalizam diversos processos em escritórios, sendo extremamente úteis para organizar diversos setores.
                        </p>

                        <h2 className='blog-semititle'>
                            Organização de escritórios
                        </h2>

                        <p className='blog-p'>
                            Ter documentos, materiais, estantes e gavetas devidamente identificados colabora para o funcionamento correto da empresa em todos os setores.
                        </p>

                        <p className='blog-p'>
                            A atividade de catalogar o escritório manualmente exige tempo, com preparo, impressão e corte de etiquetas.
                        </p>

                        <p className='blog-p'>
                            Por sua versatilidade, rotuladores podem identificar diversos materiais de forma rápida e eficiente.
                        </p>

                        <h2 className='blog-semititle'>
                            4 Benefícios dos rotuladores para a organização empresarial
                        </h2>

                        <p className='blog-p'>
                            <strong>1. Padronização:</strong> Com rotuladores, é mais simples seguir normas técnicas e utilizar símbolos e fontes diferentes para padronizar equipamentos
                        </p>

                        <p className='blog-p'>
                            <strong>2. Agilidade:</strong> As impressões são feitas de modo instantâneo com o equipamento.
                        </p>

                        <p className='blog-p'>
                            <strong>3. Durabilidade:</strong> Existem fitas específicas para cada necessidade, como fitas laminadas, que apresentam uma elevada durabilidade.
                        </p>

                        <p className='blog-p'>
                            <strong>4. Versatilidade:</strong> Rotuladores aceitam diversas cores e tipos de fita, podendo ser utilizados em qualquer necessidade empresarial de identificação.
                        </p>

                        <h2 className='blog-semititle'>
                            Cabeamento Estruturado:
                        </h2>

                        <p className='blog-p'>
                            Atualizações tecnológicas surgem a todo instante, facilitando a transmissão de dados, comunicação e operação de diversas empresas.
                        </p>

                        <p className='blog-p'>
                            Entretanto, com este avanço, torna-se cada vez mais necessário catalogar as estruturas que compõem estas aplicações, como cabos e fios. 
                        </p>

                        <p className='blog-p'>
                            Um sistema de cabeamento organizado de maneira eficiente torna a manutenção e a rotina de uma empresa muito mais eficiente.
                        </p>

                        <p className='blog-p'>
                            O cabeamento de um escritório pode ser organizado segundo normas técnicas de forma rápida e eficiente utilizando rotuladores para indicar a ordem e função de cada cabo.
                        </p>

                        <h2 className='blog-semititle'>
                            Rotuladores para acelerar a organização empresarial
                        </h2>

                        <p className='blog-p'>
                            Rotuladores são recomendados para que sua empresa tenha mais organização e eficiência em seus processos.
                        </p>

                        <p className='blog-p'>
                            Com facilidade de impressão, durabilidade e padronização de seus processos, rotuladores são ideais para identificar, catalogar e ordenar documentos, materiais e equipamentos.
                        </p>

                        <p className='blog-p'>
                            A Comabe possui uma linha de rotuladores Brother, para aumentar a organização empresarial do seu negócio. 
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