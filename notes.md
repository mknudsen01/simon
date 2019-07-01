the game is
a sequence of correct answers.
And then a sequence of the current guesser's attempts.

data storage:

We need to have a top 10 lists of scores.
Each score is in the shape of:
scores = [{
initials: "XXX",
score: 123
}]

We're going to do a little work to make sure that this is a sorted list of scores.

If we just make that list, we could run into trouble because we're just changing and updating the entire database every time we do something. So, later on, we will want to maybe make an audit table of something like:
{
\$id: {scores, timestamp}
}

But for now, let's just keep it simple.
