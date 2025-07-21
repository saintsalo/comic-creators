"use client"
import { EmblaOptionsType } from "embla-carousel"
import { DotButton, useDotButton } from "@/components/EmblaCarouselDotButton"
import { PrevButton, NextButton, usePrevNextButtons } from "@/components/EmblaCarouselArrowButtons"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"

type PropType = {
  slides: Slide[]
  options?: EmblaOptionsType
}

type Slide = {
  name: string
  path: string
}

const EmblaCarousel: React.FC<PropType> = props => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi)

  return (
    <section className="embla p-4">
      <div
        className="embla__viewport lg:border-[10px] border-2 border-[#0C888E] lg:rounded-[15px] rounded-md aspect-video w-[100%]"
        ref={emblaRef}
      >
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <img src={slide.path} alt={slide.name} className="w-full h-full object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls px-4">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
