type Props = {
  embedId: string;
};

export const YoutubeEmbed = ({ embedId }: Props) => {
  return (
    <div className="relative overflow-hidden">
      <iframe
        className="w-full h-96 md:h-[680px]"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};
