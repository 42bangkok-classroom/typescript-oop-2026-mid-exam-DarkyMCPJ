const comment = "TypeScript is a strongly typed programming language"

function shortenComment(comment: string): string {
  // Write your code below
  if (comment.length < 11 && comment.length > 4) {
    return comment;
  } else {
    return comment.slice(0, 10) + "...";
  }
}