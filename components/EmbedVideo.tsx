interface Props {
  url: string
  header?: string
  subtitle?: string
  borderColor?: string
}

export default function EmbedVideo({ header, url, borderColor = "#FFFFFF", subtitle }: Props) {
  return (
    <div className="w-full lg:p-0 max-w-[1350px] lg:mb-8 p-2">
      {header && <h4 className="creator-header text-center my-8">{header}</h4>}
      <div className="w-full">
        <iframe
          className={`lg:border-[10px] border-2 border-[${borderColor}] lg:rounded-[15px] rounded-md aspect-video w-[100%]`}
          src={url}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        {subtitle && <div className="text-white text-[14px] pt-1 pl-1 font-bold">{subtitle}</div>}
      </div>
    </div>
  )
}
