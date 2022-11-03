import * as api from '../api.js'
import { useState } from 'react'
import { FaAngleUp, FaAngleDown} from 'react-icons/fa'

const CommentVotingButtons = ({votes, id}) => {
    const [commentVotes, setCommentVotes] = useState(votes)
    const [upVoted, setUpVoted] = useState(false)
    const [downVoted, setDownVoted] = useState(false)
    const [votingFailed, setVotingFailed] = useState(false)

    const upVote = () => {
        if (downVoted && !upVoted) setDownVoted(false)
        if (!upVoted) {
            api.addCommentVote(id, { inc_votes: 1 }).catch(err => {
                console.log({ 'error from upvote: ': { err } })
                setCommentVotes(commentVotes - 1)
                setVotingFailed(true)
                setUpVoted(false)
            })
            setCommentVotes(prevcommentVotes => prevcommentVotes + 1)
        }
        if (!downVoted) setUpVoted(true)
    }
    const downVote = () => {
        if (upVoted && !downVoted) setUpVoted(false)
        if (!downVoted) {
            api.addCommentVote(id, { inc_votes: -1 }).catch(err => {
                console.log({ 'error from downvote: ': { err } })
                setCommentVotes(commentVotes - 1)
                setVotingFailed(true)
                setDownVoted(false)
            })
            setCommentVotes(prevCommentVotes => prevCommentVotes - 1)
        }
        if (!upVoted) setDownVoted(true)
    }
    return <div className='comment-votes'>
    <FaAngleUp onClick={upVote} className={`upVote ${upVoted? 'grey-out' : ''}`} />
    <div >{votingFailed? 'unable to vote': commentVotes}</div>
    <FaAngleDown onClick={downVote} className={`downVote ${downVoted? 'grey-out' : ''}`} />
</div>


}
export default CommentVotingButtons