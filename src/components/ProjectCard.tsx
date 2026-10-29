import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  emoji: string;
  description: string;
  features: string[];
  tags: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  isReverseLayout?: boolean;
  index?: number;
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
  isReverseLayout,
  index = 0
}) => {
  const animations = ['animate-slide-in-left', 'animate-slide-in-right', 'animate-slide-up'];
  const animation = animations[index % animations.length];

  return (
    <div className={`group relative ${animation}`}>
      <div className="glass-card rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
        <div className={`grid grid-cols-1 ${isReverseLayout ? 'lg:grid-cols-[1fr_1.3fr]' : 'lg:grid-cols-[1.3fr_1fr]'} gap-0 min-h-[450px]`}>

          {/* Image Section */}
          <div className={`order-1 ${isReverseLayout ? 'lg:order-2' : 'lg:order-1'} relative overflow-hidden bg-black/40`}>
            {image ? (
              <div className="relative w-full h-full min-h-[300px]">
                <img
                  src={image}
                  alt={`Screenshot of ${title}`}
                  loading="lazy"
                  decoding="async"
                  width={1280}
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
            ) : (
              <div className="w-full h-full min-h-[300px] flex items-center justify-center bg-gradient-to-br from-primary/10 to-cyan-500/10">
                <span className="text-8xl opacity-50">{emoji}</span>
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className={`order-2 ${isReverseLayout ? 'lg:order-1' : 'lg:order-2'} p-8 flex flex-col justify-between`}>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{emoji}</span>
                <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                  {title}
                </h3>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>

              {features.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Key Features</h4>
                  <ul className="space-y-2">
                    {features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-400 text-sm">
                        <span className="text-primary mt-1 flex-shrink-0">→</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-6">
                {tags.map((tag, idx) => (
                  <Badge 
                    key={idx} 
                    variant="outline" 
                    className="border-primary/30 text-gray-300 bg-primary/5 hover:bg-primary/10 transition-colors duration-300"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-4 border-t border-border">
              {liveUrl && (
                <a 
                  href={liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button className="w-full bg-primary hover:bg-primary/90 cta-hover shadow-lg shadow-primary/25">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </a>
              )}
              {githubUrl && (
                <a 
                  href={githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button variant="outline" className="w-full border-white/20 hover:bg-white/5 hover:border-white/30 transition-all duration-300">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </a>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
