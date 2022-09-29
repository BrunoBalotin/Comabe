import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { BlogCarousel } from '../../components/BlogCarousel'
import Footer from '../../components/Footer'
import {ReactComponent as Logo} from '../../images/logocomabe.svg'

export function OitoCuidados() {

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
            <title>Blog - 8 Cuidados que você precisa ter para o bom funcionamento de sua impressora</title>
            <meta name="description" content="As impressoras facilitam muito a vida de quem trabalha constantemente com documentos físicos, seja em escritórios, setores públicos ou hospitais." />
            <meta name="keywords" content='organização empresarial, impressoras, fluxo documental, outsourcing, documentos digitais, rotuladores, eficiencia com rotuladores, organização de escritorios' />
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
                        8 Cuidados que você precisa ter para o bom funcionamento de sua impressora
                    </h1>
                </div>

                <div className='mt-8'>
                    <div className='flex justify-between flex-col md:flex-row'>
                        <div className='md:w-[45%]'>
                            <img src='https://uploaddeimagens.com.br/images/004/041/516/full/Bom_funcionamento.png?1664451506' alt=''/>
                        </div>

                        <div className='md:w-[52%] flex flex-col gap-5 mt-10 md:mt-0'>
                            <p className='blog-p'>
                                As impressoras facilitam muito a vida de quem trabalha constantemente com documentos físicos, seja em escritórios, setores públicos ou hospitais.
                            </p>

                            <p className='blog-p'>
                                Como muitas vezes é necessário imprimir uma quantidade muito grande de papéis, separamos 8 dicas sobre cuidados que você precisa ter com sua impressora para garantir o melhor funcionamento, acompanhe!
                            </p>

                        </div>
                    </div>

                    <div className='mt-10'>
                        <div className='flex flex-col gap-5'>

                        <h2 className='blog-semititle'>
                            1. Cuidado ao ligar e desligar constantemente
                        </h2>

                        <p className='blog-p'>
                            Sempre que você liga sua máquina, os componentes internos do equipamento são alinhados internamente.
                        </p>

                        <p className='blog-p'>
                            Ao ligar e desligar constantemente o equipamento, você acaba danificando-os devido a repetição do processo.
                        </p>

                        <p className='blog-p'>
                            O ideal é deixar sua impressora ligada durante o dia e desligá-la quando encerrar o expediente ou tiver a certeza de que não precisará mais imprimir arquivos no dia.
                        </p>

                        <h2 className='blog-semititle'>
                            2. Imprima com frequência
                        </h2>

                        <p className='blog-p'>
                            Deixar sua impressora desligada por muito tempo pode prejudicar o motor. Quando você inicia a máquina, garante seu bom funcionamento.
                        </p>

                        <p className='blog-p'>
                            Todas as vezes que ela inicia, uma checagem de inicialização é feita, garantindo que o software está funcionando bem.
                        </p>

                        <p className='blog-p'>
                            Realizar uma impressão única garante o bom estado da impressora por mais tempo, evita ressecamento de tinta do cartucho e possíveis queimas de toners.
                        </p>

                        <h2 className='blog-semititle'>
                            3. Não realize limpezas internas
                        </h2>

                        <p className='blog-p'>
                            Fabricantes não recomendam que você realize limpezas internas, pois isto pode prejudicar os componentes de sua impressora.
                        </p>

                        <p className='blog-p'>
                        O ideal é procurar um serviço de manutenção especializada, que realizará os procedimentos mais seguros para seu equipamento durar muito mais. Em impressoras que utilizam o sistema de jato de tinta, quase todas as marcas e modelos possuem softwares de limpeza interna, que garantem o seu bom funcionamento.
                        </p>

                        <p className='blog-p'>
                            Já com Toners, sua manutenção é manual, porém simples, sendo necessário apenas mantê-lo em uma área ventilada e retirar o pó do suprimento. 
                        </p>

                        <h2 className='blog-semititle'>
                            4. Não deixe mais papel que o necessário na bandeja 
                        </h2>

                        <p className='blog-p'>
                            Um dos principais causadores de danos em impressoras é o chamado “atolamento” de papel que ocorre devido a quantia de folhas na bandeja.
                        </p>

                        <p className='blog-p'>
                            Devido à umidade, as folhas deixadas na máquina podem unir-se, gerando o atolamento.
                        </p>

                        <p className='blog-p'>
                            Para evitar que isto aconteça, sempre deixe apenas as folhas que você irá utilizar para a impressão, mantendo as restantes embaladas e protegidas de preferência em um desumidificador, que pode ser adquirido com a Comabe.
                        </p>

                        <h2 className='blog-semititle'>
                            5. Realize manutenções periódicas 
                        </h2>

                        <p className='blog-p'>
                            Para que seu equipamento tenha um bom funcionamento e longa vida útil, enviá-lo para empresas especializadas de manutenção é indispensável.
                        </p>

                        <p className='blog-p'>
                            Componentes são trocados e peças mantidas em perfeito estado de uso, evitando eventuais problemas de uso. 
                        </p>

                        <p className='blog-p'>
                            Para não se preocupar com a realização de manutenções, você ainda pode investir no outsourcing, onde conta com impressoras alugadas e não se preocupa com suprimentos ou revisões periódicas.
                        </p>

                        <h2 className='blog-semititle'>
                            6. Não troque ou recarregue tinta sozinho
                        </h2>

                        <p className='blog-p'>
                            Você sabia que existem materiais específicos para a troca de tinta?
                        </p>

                        <p className='blog-p'>
                            Ao recarregar seu cartucho ou jato de tinta em empresas especializadas, você garante o funcionamento correto de seu cartucho ou toner, sem riscos de danificá-lo.
                        </p>

                        <p className='blog-p'>
                            Outra grande opção é o já mencionado serviço de outsourcing, onde você não precisa se preocupar com seu estoque de suprimentos.
                        </p>

                        <h2 className='blog-semititle'>
                            7. Não tente retirar papel preso na impressora
                        </h2>

                        <p className='blog-p'>
                            É comum tentar tirar folhas presas no processo de impressão com as mãos ou com pinças, sem nenhum cuidado prévio. 
                        </p>

                        <p className='blog-p'>
                            Não faça isto. Você pode acabar danificando as engrenagens e o sistema de tracionamento responsável pelo deslocamento do papel.
                        </p>

                        <p className='blog-p'>
                            Para realizar o processo de maneira eficiente, remova o toner ou cartucho e puxe as folhas devagar. Caso não saia, contate um suporte técnico profissional.
                        </p>

                        <h2 className='blog-semititle'>
                            8. Cuidado ao transportar o equipamento
                        </h2>

                        <p className='blog-p'>
                            Você precisa ter extremo cuidado quando movimentar sua impressora devido aos seus componentes.
                        </p>

                        <p className='blog-p'>
                            Isto porque a tinta do equipamento, seja jato de tinta ou toner, pode facilmente vazar quando transportado em posições erradas, como de lado.
                        </p>

                        <p className='blog-p'>
                            Sempre que realizar movimentações, mantenha a máquina para cima.
                        </p>

                        <h2 className='blog-semititle'>
                            Dica Extra: Mais cuidado e menos trabalho com Outsourcing
                        </h2>

                        <p className='blog-p'>
                            Uma das maneiras mais eficientes de ter sua impressora sempre em melhor estado é contar com um serviço de Outsourcing.
                        </p>

                        <p className='blog-p'>
                            Através dele, você utiliza os melhores equipamentos do mercado, possui controle e abastecimento de suprimentos, tem suporte em caso de falhas e ainda reduz gastos com impressões.
                        </p>

                        <p className='blog-p'>
                            Para mais informações sobre o outsourcing, você pode conferir a <Link to='/solu%C3%A7%C3%B5es'>página sobre outsourcing</Link> da Comabe e tirar dúvidas sobre o assunto. 
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