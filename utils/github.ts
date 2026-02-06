import React from 'react';

export const GITHUB_REPOS = [
  'https://github.com/PavaniKotipalli29/Nexus-UI',
  'https://github.com/srivallirachuri/Nexus-UI.git'
];

/**
 * Opens both GitHub repositories in new tabs.
 * Note: Browser popup blockers might prevent the second tab from opening.
 */
export const openGitHubRepos = (e?: React.MouseEvent | React.KeyboardEvent) => {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  
  GITHUB_REPOS.forEach(repo => {
    window.open(repo, '_blank', 'noopener,noreferrer');
  });
};
