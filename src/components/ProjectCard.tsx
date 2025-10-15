import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';

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
  isReverseLayout
}) => {
  return (
    <Card className="bg-secondary border-none overflow-hidden mb-12 animate-scale-in">
      <div className={`grid grid-cols-1 ${isReverseLayout ? 'lg:grid-cols-[1fr_1.5fr]' : 'lg:grid-cols-[1.5fr_1fr]'} gap-6 min-h-[500px]`}>

        {/* Text Section */}
        <div className={`order-2 ${isReverseLayout ? 'lg:order-1' : 'lg:order-2'} flex flex-col justify-center`}>
          <CardHeader className="flex-shrink-0 text-center">
            <CardTitle className="text-2xl font-bold flex items-center justify-center gap-2">
              {title} <span className="text-2xl">{emoji}</span>
            </CardTitle>
          </CardHeader>

          {/* Scrollable content */}
          <CardContent className="flex flex-col overflow-y-auto max-h-[350px] text-center">
            <CardDescription className="text-lg text-gray-400 mb-4">{description}</CardDescription>
            <h4 className="font-medium mb-2">Key Features:</h4>
            <ul className="space-y-2 mb-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start justify-center">
                  <span className="text-primary mr-2">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap justify-center gap-2">
              {tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="border-primary/50 text-gray-300">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>

          <CardFooter className="flex-shrink-0 justify-center gap-4 mt-4">
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary hover:bg-primary/80 cta-hover">
                  Live Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            )}
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-white/20 hover:bg-white/5">
                  GitHub Repo
                </Button>
              </a>
            )}
          </CardFooter>
        </div>

        {/* Image Section */}
        <div className={`order-1 ${isReverseLayout ? 'lg:order-2' : 'lg:order-1'} p-6 flex items-center justify-center`}>
          <div className="glass-card rounded-lg overflow-hidden w-full h-full flex items-center justify-center">
            {image ? (
              <img
                src={image}
                alt={title}
                className="w-full h-full object-contain hover-scale transition-all duration-300"
              />
            ) : (
              <div className="h-60 w-full flex items-center justify-center bg-black/30">
                <span className="text-6xl">{emoji}</span>
              </div>
            )}
          </div>
        </div>

      </div>
    </Card>
  );
};

export default ProjectCard;
