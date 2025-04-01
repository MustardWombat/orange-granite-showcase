
import { useEffect, useState } from 'react';
import { Github as GithubIcon, ExternalLink, Star, GitFork, Code, Terminal } from 'lucide-react';

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
  const [commits, setCommits] = useState<GithubCommit[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchCommits = async () => {
      try {
        setLoading(true);
        
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
        
      } catch (err) {
        console.error('Error fetching GitHub commits:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCommits();
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
            {Array.from({ length: 35 }).map((_, index) => (
              <div 
                key={index} 
                className={`h-4 rounded ${
                  Math.random() > 0.7 
                    ? 'bg-orange' 
                    : Math.random() > 0.5 
                      ? 'bg-orange/50' 
                      : Math.random() > 0.3 
                        ? 'bg-orange/30' 
                        : 'bg-darkgray'
                }`}
              ></div>
            ))}
          </div>
          
          <div className="flex justify-between items-center bg-darkgray/50 p-3 rounded-lg mb-6">
            <div className="flex items-center gap-2">
              <Star className="text-orange" size={18} />
              <span>3+ Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <Code className="text-orange" size={18} />
              <span>2 Languages</span>
            </div>
            <div className="flex items-center gap-2">
              <GitFork className="text-orange" size={18} />
              <span>Active Contributor</span>
            </div>
          </div>
          
          <p className="text-gray-300 mb-6">
            Building my portfolio of projects with a focus on robotics, blockchain technology,
            and mobile application development.
          </p>
          
          <div className="flex flex-wrap gap-3">
            <a href="#" className="tech-btn secondary flex items-center gap-2">
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
              Recent Commits
            </h3>
          </div>
          
          {loading ? (
            <div className="flex justify-center py-10">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-orange"></div>
            </div>
          ) : (
            <div className="p-4">
              {commits.map((commit, index) => (
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
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Github;
