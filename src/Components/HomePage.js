
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as challengesActions from '..actions/challengesActions';
import ChallengesList from './ChallengesList';

/*
The HomePage component dispatches an action getChallenges, that fetches the
collection of code challenges from our (separate and not discussed here) API.
Then, it uses mapStateToProps to grab the challenges from state and pass them
to the component as part of props.
*/

/*Why would you grab the challenges from the state and pass them as part of the props? */

class HomePage extends React.Component {
  componentDidMount() { //Wtf does this do
    if (this.props.challenges.length === 0) {
      this.props.actions.getChallenges()
    }
  }

  render() {
    return (
      <div>
        <ChallengesList
          challenges={this.props.challenges} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {challenges: state.challenges}
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(challengesActions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)
(HomePage);
