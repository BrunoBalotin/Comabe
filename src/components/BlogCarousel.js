import { Link } from "react-router-dom"

import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { useCallback, useEffect, useRef } from "react"

const blogContent = [
    {

        "id": 1,
        "imageurl": 'https://uploaddeimagens.com.br/images/003/975/887/full/capa_artigo%28_M%C3%A9todo_de_Gest%C3%A3o%29.png?1660152340',
        "title": 'Um metódo de gestão empresarial para ganhar tempo',
        "description": 'Conforme a tecnologia avança, diversos documentos tornam-se digitais. Bibliotecas inteiras podem ser encontradas na internet.',
        "link": '/blog/um-metodo-de-gestao-empresarial-para-ganhar-tempo',
        "data": "11/08/2022",

    },

    {

        "id": 2,
        "imageurl": 'https://live.staticflickr.com/65535/52296114086_01e80c3a74_b.jpg',
        "title": 'Paperless: A cultura da eficiência',
        "description": 'Nos últimos anos, diversas empresas depararam-se com a necessidade de se digitalizar.',
        "link": '/blog/paperless-a-cultura-de-eficiencia',
        "data": "15/08/2022",

    },

    {

        "id": 3,
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
      

        

        
        
        
        console.log(slideIndex)
 
    }


    return (
        <div className="max-w-[1138px] mx-auto">
        <div className="flex justify-end gap-1 mb-3 mt-10">
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
                    <img className="group-hover:scale-110 duration-300 h-full" src={blogcard.imageurl} alt=''/>
                </div>

            <div className="px-5 relative bottom-3">
                <span className="text-xs flex-inline bg-[#FF8800] text-white font-semibold px-2 py-1 rounded-full">
                    {blogcard.data}
                </span>
            </div>

            <div className="px-5 mt-2 h-[50px]">
                <h2 className="font-medium text-lg">
                    {blogcard.title}
                </h2>
            </div>

            <div className="px-5 mt-5">
                <p className="text-[#343434] font-thin ">
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