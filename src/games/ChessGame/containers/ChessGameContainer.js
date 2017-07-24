import { connect } from 'react-redux'
import { sendClick, joinMatch, leaveMatch, resign } from '../modules/chessGameState'
import ChessGame from '../components/ChessGame'

const mapDispatchToProps = {
  sendClick, joinMatch, leaveMatch, resign
}

const mapStateToProps = (state) => ({
  state: state.chessGameState
})

export default connect(mapStateToProps, mapDispatchToProps)(ChessGame)