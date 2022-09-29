import { Link } from "react-router-dom"

import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { useCallback, useEffect, useRef } from "react"

const blogContent = [
    {

        "id": 1,
        "imageurl": 'https://uploaddeimagens.com.br/images/004/041/516/full/Bom_funcionamento.png?1664451506',
        "title": '8 Cuidados que você precisa ter para o bom funcionamento de sua impressora',
        "description": 'As impressoras facilitam muito a vida de quem trabalha constantemente com documentos físicos, seja em escritórios, setores públicos ou hospitais.',
        "link": '/blog/bom-funcionamento-de-sua-impressora',
        "data": "29/09/2022",

    },

    {

        "id": 2,
        "imageurl": 'https://uploaddeimagens.com.br/images/004/031/436/full/UFS.png?1663846055',
        "title": 'Como a UFS encontrou documentos perdidos através da digitalização',
        "description": 'A Universidade Federal do Sergipe diminuiu o tempo que levava para buscar arquivos e encontrou trabalhos, documentos e peças perdidas em seu acervo físico.',
        "link": '/blog/como-a-ufs-encontrou-documentos-perdidos-atraves-da-digitaliza%C3%A7%C3%A3o',
        "data": "22/09/2022",

    },

    {

        "id": 3,
        "imageurl": 'https://uploaddeimagens.com.br/images/004/016/366/full/Scanner_escola_2.png?1662745614',
        "title": 'Scanner Brother: 4 vantagens para secretaria escolar',
        "description": 'As mudanças de legislação oportunizam a digitalização dos documentos escolares em instituições de ensino.',
        "link": '/blog/4-vantagens-para-secretaria-escolar',
        "data": "09/09/2022",

    },

    {

        "id": 4,
        "imageurl": 'https://uploaddeimagens.com.br/images/003/975/887/full/capa_artigo%28_M%C3%A9todo_de_Gest%C3%A3o%29.png?1660152340',
        "title": 'Um metódo de gestão empresarial para ganhar tempo',
        "description": 'Conforme a tecnologia avança, diversos documentos tornam-se digitais. Bibliotecas inteiras podem ser encontradas na internet.',
        "link": '/blog/um-metodo-de-gestao-empresarial-para-ganhar-tempo',
        "data": "11/08/2022",

    },

    {

        "id": 5,
        "imageurl": 'https://uploaddeimagens.com.br/images/003/993/154/full/capa_artigo_%28Paperless-Cultura_da_eficiencia%29.png?1661278376',
        "title": 'Paperless: A cultura da eficiência',
        "description": 'Nos últimos anos, diversas empresas depararam-se com a necessidade de se digitalizar.',
        "link": '/blog/paperless-a-cultura-de-eficiencia',
        "data": "15/08/2022",

    },

    {

        "id": 6,
        "imageurl": 'https://uploaddeimagens.com.br/images/003/987/090/full/rotulador.png?1660910184',
        "title": 'Organização empresarial: Maior eficiência com rotuladores',
        "description": 'A organização é importante para eficiência e fluidez de processos em um ambiente profissional.',
        "link": '/blog/organizacao-empresarial-maior-eficiencia-com-rotuladores',
        "data": "19/08/2022",

    },


    
]


export function BlogCarousel() {

    const scrollToTop = () => {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
              });
        }, 200)
    }

    const carousel = useRef(null)
    const slide = useRef(null)
    const margin = 20
    let slideIndex = 1

   
    
    const handlePrevClick = (e) => {
        e.preventDefault()

        if (slideIndex === 1) {
            slideIndex = 1
        } else {
            --slideIndex
        }

        carousel.current.scrollLeft -= slide.current.offsetWidth + margin

        console.log(slideIndex)
    }

    const handleNextClick = (e) => {
        e.preventDefault()

        
            if (slideIndex === blogContent.length - 2) {
                slideIndex = 1
    
                carousel.current.scrollLeft -= carousel.current.offsetWidth + margin
            } else {
            
                ++ slideIndex
                carousel.current.scrollLeft += slide.current.offsetWidth + margin
            }

            console.log(carousel.current.offsetWidth)
        
        
        console.log(slideIndex)
 
    }


    return (
        <div className="max-w-[1138px] mx-auto">
        <div className="justify-end gap-1 mb-3 mt-10 hidden sm:flex">
            <span onClick={handlePrevClick} className="cursor-pointer bg-[#FF8800] p-1 rounded-md">
                <AiOutlineArrowLeft size={20} color="#FFF"/>
            </span>
            <span onClick={handleNextClick} className="cursor-pointer bg-[#FF8800] p-1 rounded-md">
                <AiOutlineArrowRight size={20} color="#FFF"/>
            </span>
        </div>
        <div ref={carousel} className="blog-carousel carousel flex overflow-x-auto duration-100 scroll-smooth gap-5 sm:gap-5 lg:gap-5 w-full mb-10">
        {blogContent.map((blogcard) => (
            <Link ref={slide} onClick={scrollToTop} key={blogcard.id} className='flex-none group w-[70.0%] sm:w-[32.8%] h-[320px] sm:h-[340px] lg:h-[430px] bg-white shadow-lg rounded-lg overflow-hidden' to={blogcard.link}>
            <div className="w-full h-full relative">
                <div className="w-full sm:h-[160px] lg:h-[220px]">
                    <img className="group-hover:scale-110 duration-300" src={blogcard.imageurl} alt=''/>
                </div>

            <div className="px-5 relative bottom-3">
                <span className="text-xs flex-inline bg-[#FF8800] text-white font-semibold px-2 py-1 rounded-full">
                    {blogcard.data}
                </span>
            </div>

            <div className="px-5 mt-2 h-[75px]">
                <h2 className="font-medium text-lg">
                    {blogcard.title}
                </h2>
            </div>

            <div className="px-5 mt-5">
                <p className="text-[#343434] font-thin text-ellipsis description-carousel">
                    {blogcard.description}
                </p>
            </div>
            </div>

            
            </Link>
        ))}
        </div>
        </div>
    )
}