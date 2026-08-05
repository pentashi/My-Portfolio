import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  emoji: string;
  description: string;
  features: string[];
  tags: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  isFlagship?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  emoji,
  description,
  features,
  tags,
  image,
  liveUrl,
  githubUrl,
  isFlagship = false,
}) => {
  const headlineFeature = features[0];
  const supportingFeatures = features.slice(1, 4);

  return (
    <article className={`border border-white/10 bg-[#090909] ${isFlagship ? 'lg:p-10' : 'lg:p-8'} p-6`}>
      <div className={`grid gap-10 ${image ? 'lg:grid-cols-[1.15fr_0.85fr]' : 'lg:grid-cols-1'}`}>
        <div className="space-y-8">
          <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-white/42">
                {isFlagship ? 'Flagship Case Study' : 'Selected Work'}
              </p>
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white md:text-3xl">
                {title} <span className="ml-2">{emoji}</span>
              </h3>
            </div>
          </div>

          <p className="max-w-3xl text-base leading-8 text-white/68 md:text-lg">{description}</p>

          {headlineFeature && (
            <div className="panel-muted p-5">
              <p className="mb-2 text-xs uppercase tracking-[0.28em] text-white/42">Impact Signal</p>
              <p className="text-base leading-7 text-white/84">{headlineFeature}</p>
            </div>
          )}

          <div className="grid gap-4 md:grid-cols-3">
            {supportingFeatures.map((feature, index) => (
              <div key={feature} className="border border-white/10 p-4">
                <p className="mb-3 text-xs uppercase tracking-[0.22em] text-white/35">0{index + 2}</p>
                <p className="text-sm leading-6 text-white/72">{feature}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.28em] text-white/42">Stack</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="rounded-none border-white/15 bg-transparent px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/72"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            {liveUrl && (
              <Button className="rounded-none border border-white/15 bg-white px-5 text-xs uppercase tracking-[0.24em] text-black hover:bg-white/90" asChild>
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  View Live
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}
            {githubUrl && (
              <Button
                variant="outline"
                className="rounded-none border-white/15 bg-transparent px-5 text-xs uppercase tracking-[0.24em] text-white hover:bg-white/5"
                asChild
              >
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  Source
                </a>
              </Button>
            )}
          </div>
        </div>

        {image && (
          <div className="border border-white/10 bg-[#050505] p-4">
            <div className="mb-3 flex items-center justify-between text-[11px] uppercase tracking-[0.24em] text-white/38">
              <span>Reference View</span>
              <span>UI / API Snapshot</span>
            </div>
            <div className="overflow-hidden border border-white/10 bg-black/30">
              <img
                src={image}
                alt={title}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
