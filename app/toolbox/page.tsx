import Image from "next/image";
import { ShadowBox } from "app/components/ShadowBox";
import { BorderCard } from "app/components/BorderCard";
import { SectionTitlePill } from "app/components/SectionTitlePill";
import { NewsletterSignUp } from "app/components/NewsletterSignUp";
import { PageTitle } from "app/components/PageTitle";
import { hardwareData, softwareData } from "app/data/toolbox";

export default function ToolboxPage() {
  return (
    <div className="space-y-[80px] mt-[100px]">
      <PageTitle title="Hardware and software I use on a daily basis." />

      {/* Applications */}
      <SectionTitlePill title="Applications" />
      {/* List */}
      <div className="grid grid-cols-8 grid-rows-2 gap-6 place-items-center">
        {softwareData.map((item) => (
          <a
            key={item.title}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            <ShadowBox width={120} height={120} label={item.title}>
              <Image
                className="w-10 h-10 group-hover:w-11 group-hover:h-11 transition-all"
                alt={item.title}
                src={item.imgSrc}
                width={40}
                height={40}
              />
            </ShadowBox>
          </a>
        ))}
      </div>
      {/* Hardware */}
      <SectionTitlePill title="Hardware" />

      <div className="grid grid-cols-3 grid-rows-2 gap-2">
        {hardwareData.map((item) => (
          <BorderCard key={item.title}>
            <div className="flex flex-col space-y-3">
              <p className="text-base leading-5 text-text-primary font-semibold">
                {item.title}
              </p>
              <p className="text-gray-500 text-xs leading-4">
                {item.description}
              </p>
            </div>
            <a
              className="text-purple-primary/50 text-right hover:text-purple-primary text-sm"
              href={item.link}
            >
              Learn more
            </a>
          </BorderCard>
        ))}
      </div>

      {/* Newsletter */}
      <NewsletterSignUp />
    </div>
  );
}
