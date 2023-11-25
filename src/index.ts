const API_URL = 'https://jsonplaceholder.typicode.com/posts';

interface PostsT {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function getPosts(): Promise<PostsT[]> {
  return await fetch(API_URL)
    .then((response) => response.json())
    .then((result) => result)
    .catch(() => new Error('Something went wrong'));
}

async function generatePosts(): Promise<void> {
  const postsContainer = document.getElementById('posts__container');
  const posts = await getPosts();

  if (postsContainer) {
    postsContainer.innerHTML = posts
      .map(
        (post) =>
          `<article class="posts__article">
            <h5>${post.title}</h5>
            <p>${post.body}</p>
           </article>`
      )
      .join('\n');
  }
}

generatePosts();
