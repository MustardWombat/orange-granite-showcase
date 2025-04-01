
import { useRef, useEffect, useState } from 'react';
import { Github as GithubIcon, ExternalLink, Star, GitFork, Code } from 'lucide-react';

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

const Github = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [commits, setCommits] = useState<GithubCommit[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchCommits = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.github.com/repos/MustardWombat/portfolio/commits');
        
        // If the user doesn't have a real repo, show mock data
        if (!response.ok) {
          // Mock data for demonstration
          setCommits([
            {
              sha: '1',
              commit: {
                message: 'Updated Neural Database schema optimization',
                author: { date: '2024-02-15T12:00:00Z' }
              },
              html_url: '#'
            },
            {
              sha: '2',
              commit: {
                message: 'Fixed robot arm inverse kinematics calculation',
                author: { date: '2024-02-10T14:30:00Z' }
              },
              html_url: '#'
            },
            {
              sha: '3',
              commit: {
                message: 'Added image recognition module to COSMOS',
                author: { date: '2024-02-05T09:15:00Z' }
              },
              html_url: '#'
            }
          ]);
        } else {
          const data = await response.json();
          setCommits(data.slice(0, 5)); // Get latest 5 commits
        }
      } catch (err) {
        console.error('Error fetching GitHub commits:', err);
        setError('Failed to fetch GitHub data');
        // Set mock data on error
        setCommits([
          {
            sha: '1',
            commit: {
              message: 'Updated Neural Database schema optimization',
              author: { date: '2024-02-15T12:00:00Z' }
            },
            html_url: '#'
          },
          {
            sha: '2',
            commit: {
              message: 'Fixed robot arm inverse kinematics calculation',
              author: { date: '2024-02-10T14:30:00Z' }
            },
            html_url: '#'
          },
          {
            sha: '3',
            commit: {
              message: 'Added image recognition module to COSMOS',
              author: { date: '2024-02-05T09:15:00Z' }
            },
            html_url: '#'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchCommits();
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Format date to a more readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <section id="github" className="py-20 relative slide" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">GitHub Contributions</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-2 github-card flex flex-col">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <GithubIcon className="mr-2 text-orange" size={20} />
              Recent Activity
            </h3>
            
            <div className="flex flex-col gap-3 flex-grow">
              <div className="flex justify-between items-center bg-darkgray/50 p-3 rounded-lg">
                <div className="flex items-center">
                  <Star className="text-orange mr-2" size={18} />
                  <span>3+ Projects</span>
                </div>
                <div className="flex items-center">
                  <Code className="text-orange mr-2" size={18} />
                  <span>2 Languages</span>
                </div>
                <div className="flex items-center">
                  <GitFork className="text-orange mr-2" size={18} />
                  <span>Active Contributor</span>
                </div>
              </div>
              
              <p className="text-gray-300 my-2">
                Building my portfolio of projects with a focus on robotics, blockchain technology,
                and mobile application development.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 mt-auto pt-4">
              <a href="https://wewantwilliams.com" className="github-btn flex items-center">
                <ExternalLink size={16} className="mr-2" />
                Visit Portfolio
              </a>
              <a href="https://github.com/MustardWombat" className="github-btn flex items-center">
                <GithubIcon size={16} className="mr-2" />
                My Github
              </a>
            </div>
          </div>
          
          <div className="col-span-3 bg-granite rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Recent Commits</h3>
              
              {loading ? (
                <div className="flex justify-center py-6">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-orange"></div>
                </div>
              ) : error ? (
                <p className="text-red-500 px-4 py-2">{error}</p>
              ) : (
                <ul className="space-y-3">
                  {commits.map((commit) => (
                    <li key={commit.sha} className="bg-darkgray/30 rounded-lg p-3 border-l-2 border-orange">
                      <a 
                        href={commit.html_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block hover:bg-darkgray/50 rounded transition-colors"
                      >
                        <p className="text-gray-300">{commit.commit.message}</p>
                        <p className="text-sm text-orange mt-1">
                          {formatDate(commit.commit.author.date)}
                        </p>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Github;
