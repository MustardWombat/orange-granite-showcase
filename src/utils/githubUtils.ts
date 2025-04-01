
import { request } from 'graphql-request';

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export interface GithubContribution {
  date: string;
  count: number;
}

export const fetchGithubContributions = async (): Promise<GithubContribution[]> => {
  if (!GITHUB_TOKEN) {
    throw new Error('GitHub token not configured');
  }

  const query = `
    query {
      user(login: "MustardWombat") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response: any = await request({
      url: 'https://api.github.com/graphql',
      document: query,
      requestHeaders: {
        Authorization: `Bearer ${GITHUB_TOKEN}`
      }
    });

    const contributionDays = response.user.contributionsCollection.contributionCalendar.weeks
      .flatMap((week: any) => week.contributionDays)
      .slice(-35);  // Last 35 days

    return contributionDays.map((day: any) => ({
      date: day.date,
      count: day.contributionCount
    }));
  } catch (error) {
    console.error('Error fetching GitHub contributions:', error);
    throw error;
  }
};
