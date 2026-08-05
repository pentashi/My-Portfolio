import React from 'react';
import { Button } from "@/components/ui/button";
import { SiGithub, SiLeetcode, SiLinkedin } from 'react-icons/si';

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
    sm: { button: 'h-9 w-9', icon: 'text-sm' },
    md: { button: 'h-10 w-10', icon: 'text-base' },
    lg: { button: 'h-12 w-12', icon: 'text-lg' },
  }[size];

  return (
    <div className="flex items-center gap-3">
      {socialLinks.map((link) => (
        <Button
          key={link.name}
          variant="outline"
          size="icon"
          className={`${buttonSize.button} rounded-none border-white/15 bg-transparent text-white/76 hover:bg-white hover:text-black`}
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
