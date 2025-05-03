import React from 'react';
import { Button } from "@/components/ui/button";
import { SiGithub, SiLinkedin, SiLeetcode } from 'react-icons/si';

interface SocialLinksProps {
  size?: 'sm' | 'md' | 'lg';
}

const SocialLinks: React.FC<SocialLinksProps> = ({ size = 'md' }) => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/pentashi',
      icon: <SiGithub />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/achapi-pentashi',
      icon: <SiLinkedin />,
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/vnGwGTsjUy/',
      icon: <SiLeetcode />,
    },
  ];

  const buttonSize = {
    sm: { button: 'w-8 h-8', icon: 'h-4 w-4 text-lg' },
    md: { button: 'w-10 h-10', icon: 'h-5 w-5 text-xl' },
    lg: { button: 'w-12 h-12', icon: 'h-6 w-6 text-2xl' },
  }[size];

  return (
    <div className="flex items-center gap-3">
      {socialLinks.map((link) => (
        <Button
          key={link.name}
          variant="outline"
          size="icon"
          className={`${buttonSize.button} rounded-full border-white/20 hover:bg-white/10 hover:border-white/40`}
          asChild
        >
          <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
            <span className={buttonSize.icon}>{link.icon}</span>
          </a>
        </Button>
      ))}
    </div>
  );
};

export default SocialLinks;
