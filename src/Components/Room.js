/*The Room component has two jobs to do before we can start worrying about
bringing in our socket connections.

First things first: get the correct challenge and display it. We'll use
mapStateToProps to identify the challenge to display, grab it from state and
pass it to our component as part of props.
*/

import React from 'react';
import * as actions from '../actions/challengesActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Room extends React.Component {
  componentDidMount() {
    if (this.props.challenge.id === undefined) {
      this.props.actions.getChallenges();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.props.challenge.title}</h1>
        <h2>{this.props.challenge.description}</p>
          //coming soon: code mirror text editor!
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  if (state.challegnes.length > 0) {
    const challenge = state.challenges.filter(challenge =>
      {return challenge.id === ownProps.params.id})[0]
    return {challenge: challenge}
  } else {
    return {challenge: {title: '', description: ''}}
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)
(Room)

/*Now that our Room component knows how to display the correct challenge,
 we're ready to bring in Code Mirror to display a text-editor-esque text area
  for our users to write their code in.
  */
