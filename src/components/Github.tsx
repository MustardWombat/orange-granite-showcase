import { useEffect, useState } from 'react';
import { Github as GithubIcon, ExternalLink, Star, GitFork, Code, Terminal } from 'lucide-react';
import { Skeleton } from './ui/skeleton';

interface GithubCommit {
  sha: string;
  commit: {
    message: string;
    author: {
      date: string;
    };
  };
  html_url: string;
}

interface GithubRepo {
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

const Github = () => {
  const [commits, setCommits] = useState<GithubCommit[]>([]);
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const reposResponse = await fetch('https://api.github.com/users/MustardWombat/repos?sort=updated&per_page=3');
        
        if (!reposResponse.ok) {
          throw new Error('GitHub API rate limit may have been exceeded. Try again later.');
        }
        
        const reposData = await reposResponse.json();
        setRepos(reposData);
        
        if (reposData.length > 0) {
          const commitsResponse = await fetch(`https://api.github.com/repos/MustardWombat/${reposData[0].name}/commits?per_page=3`);
          
          if (commitsResponse.ok) {
            const commitsData = await commitsResponse.json();
            setCommits(commitsData);
          } else {
            console.log('Could not fetch commits, but repos were loaded');
          }
        }
      } catch (err) {
        console.error('Error fetching GitHub data:', err);
        setError('Unable to fetch GitHub data. GitHub API rate limit may have been exceeded.');
        
        setCommits([
          {
            sha: '1',
            commit: {
              message: 'Updated Neural Database schema optimization',
              author: { date: '2024-02-15T12:00:00Z' }
            },
            html_url: 'https://github.com/MustardWombat'
          },
          {
            sha: '2',
            commit: {
              message: 'Fixed robot arm inverse kinematics calculation',
              author: { date: '2024-02-10T14:30:00Z' }
            },
            html_url: 'https://github.com/MustardWombat'
          },
          {
            sha: '3',
            commit: {
              message: 'Added image recognition module to COSMOS',
              author: { date: '2024-02-05T09:15:00Z' }
            },
            html_url: 'https://github.com/MustardWombat'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getLanguageColor = (language: string | null) => {
    const colors: Record<string, string> = {
      JavaScript: 'bg-yellow-400',
      TypeScript: 'bg-blue-500',
      Python: 'bg-green-500',
      Java: 'bg-orange-500',
      'C++': 'bg-pink-500',
      C: 'bg-gray-500',
      'C#': 'bg-purple-500',
      PHP: 'bg-indigo-500',
      Ruby: 'bg-red-500',
      Go: 'bg-blue-300',
      Rust: 'bg-orange-600',
      Swift: 'bg-orange-300',
      Kotlin: 'bg-purple-300',
      Dart: 'bg-blue-400',
    };
    
    return colors[language || ''] || 'bg-gray-400';
  };

  return (
    <section id="github" className="py-20 section-animate">
      <div className="section-heading mb-16">
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
          <GithubIcon className="text-orange" />
          GitHub Contributions
        </h2>
        <div className="h-1 w-20 bg-orange"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="col-span-2 bg-granite border border-gray-700 rounded-lg p-6 hover:border-orange/50 transition-all duration-300">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Code className="text-orange" />
            Coding Activity
          </h3>
          
          <div className="mb-6 grid grid-cols-7 gap-1">
            {error ? (
              <div className="col-span-7 text-gray-500 text-sm text-center">
                Unable to load GitHub contribution data
              </div>
            ) : (
              Array.from({ length: 35 }).map((_, index) => (
                <div 
                  key={index} 
                  className="h-4 rounded bg-darkgray"
                ></div>
              ))
            )}
          </div>
          
          <div className="flex justify-between items-center bg-darkgray/50 p-3 rounded-lg mb-6">
            <div className="flex items-center gap-2">
              <Star className="text-orange" size={18} />
              <span>{loading ? <Skeleton className="h-4 w-16" /> : `${repos.length}+ Projects`}</span>
            </div>
            <div className="flex items-center gap-2">
              <Code className="text-orange" size={18} />
              <span>
                {loading ? (
                  <Skeleton className="h-4 w-16" />
                ) : (
                  `${new Set(repos.map(repo => repo.language).filter(Boolean)).size} Languages`
                )}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <GitFork className="text-orange" size={18} />
              <span>Active Contributor</span>
            </div>
          </div>
          
          {error && (
            <div className="text-orange-300 mb-4 p-3 border border-orange-300/30 rounded-lg bg-orange-900/20">
              {error}
            </div>
          )}
          
          <p className="text-gray-300 mb-6">
            Building my portfolio of projects with a focus on robotics, blockchain technology,
            and mobile application development.
          </p>
          
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="tech-btn secondary flex items-center gap-2">
              <ExternalLink size={16} />
              Portfolio
            </a>
            <a href="https://github.com/MustardWombat" className="tech-btn primary flex items-center gap-2">
              <GithubIcon size={16} />
              GitHub
            </a>
          </div>
        </div>
        
        <div className="col-span-3 bg-granite border border-gray-700 rounded-lg hover:border-orange/50 transition-all duration-300">
          <div className="p-6 border-b border-gray-700">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Terminal className="text-orange" />
              {commits.length ? 'Recent Commits' : 'Top Repositories'}
            </h3>
          </div>
          
          {loading ? (
            <div className="p-4 space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-darkgray/30 rounded-lg p-4 border-l-2 border-orange">
                  <Skeleton className="h-5 w-full mb-2" />
                  <Skeleton className="h-4 w-1/3" />
                </div>
              ))}
            </div>
          ) : (
            <div className="p-4">
              {commits.length > 0 ? (
                commits.map((commit) => (
                  <a 
                    key={commit.sha}
                    href={commit.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mb-3 last:mb-0"
                  >
                    <div className="bg-darkgray/30 rounded-lg p-4 border-l-2 border-orange hover:bg-darkgray/50 transition-colors">
                      <div className="flex justify-between items-start">
                        <p className="text-gray-300 font-mono">{commit.commit.message}</p>
                        <span className="text-xs text-orange ml-4 whitespace-nowrap">
                          {formatDate(commit.commit.author.date)}
                        </span>
                      </div>
                      <div className="mt-2 flex items-center gap-2 text-gray-500 text-sm">
                        <span className="font-mono">#{commit.sha.substring(0, 7)}</span>
                      </div>
                    </div>
                  </a>
                ))
              ) : (
                repos.map((repo) => (
                  <a 
                    key={repo.name}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mb-3 last:mb-0"
                  >
                    <div className="bg-darkgray/30 rounded-lg p-4 border-l-2 border-orange hover:bg-darkgray/50 transition-colors">
                      <div className="flex justify-between items-start">
                        <p className="text-gray-300 font-mono font-bold">{repo.name}</p>
                        <div className="flex items-center gap-2">
                          <span className="flex items-center text-xs">
                            <Star size={14} className="text-orange mr-1" />
                            {repo.stargazers_count}
                          </span>
                          <span className="flex items-center text-xs">
                            <GitFork size={14} className="text-orange mr-1" />
                            {repo.forks_count}
                          </span>
                        </div>
                      </div>
                      {repo.description && (
                        <p className="text-gray-400 text-sm mt-2">{repo.description}</p>
                      )}
                      {repo.language && (
                        <div className="mt-2 flex items-center gap-2">
                          <span className={`inline-block w-3 h-3 rounded-full ${getLanguageColor(repo.language)}`}></span>
                          <span className="text-gray-500 text-sm">{repo.language}</span>
                        </div>
                      )}
                    </div>
                  </a>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Github;
