/*
TODO (Header.jsx):
Create the entire Header component.

Requirements:
- Show the site title and a one-sentence description.
- Show summary numbers: totalPosts, totalLikes, totalDislikes.
*/

export default function Header({ totalPosts, totalLikes, totalDislikes }) {
  // TODO: Replace return null with your JSX

  return (
    <header>
      <h1>Posts Dashboard</h1>
      <p>With {totalPosts} total posts, you have a combined number of {totalLikes} likes
        and {totalDislikes} dislikes.</p>
    </header>
  );
}
