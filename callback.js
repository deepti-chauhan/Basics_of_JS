function voteDone() {
  console.log('VOTE DONE')
}

function voteNotAllowed() {
  console.log('VOTE NOT ALLOWED')
}

function voteIfEligible(age, vote, noVote) {
  if (age > 18) {
    vote()
  } else {
    noVote()
  }
}

voteIfEligible(8, voteDone, voteNotAllowed)
voteIfEligible(20, voteDone, voteNotAllowed)
