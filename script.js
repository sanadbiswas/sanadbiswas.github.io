document.getElementById('year').textContent = new Date().getFullYear();

async function loadGitHubStats() {
  try {
    const response = await fetch('https://api.github.com/users/sanadbiswas');
    if (!response.ok) return;
    const data = await response.json();

    const repoCount = document.getElementById('repoCount');
    const followerCount = document.getElementById('followerCount');
    const followingCount = document.getElementById('followingCount');

    if (repoCount) repoCount.textContent = data.public_repos ?? '—';
    if (followerCount) followerCount.textContent = data.followers ?? '—';
    if (followingCount) followingCount.textContent = data.following ?? '—';
  } catch (error) {
    console.warn('GitHub profile stats could not be loaded.', error);
  }
}

loadGitHubStats();
