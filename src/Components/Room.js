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

//Code mirror
import Codemirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/mode/javascript/javascript.js'



class Room extends React.Component {
  constructor(props) {
    super(props)
    this.state = {code: ''}
  }

  componentDidMount() {
    if (this.props.challenge.id === undefined) {
      this.props.actions.getChallenges();
    }
  }

  updateCodeInState(newText) {
    this.setState({code: newText})
  }
  render() {
    const options = {
      lineNumbers: true,
      mode: 'javascript',
      theme: 'monokai'
    }
    return (
      <div>
        <h1>{this.props.challenge.title}</h1>
        <p>{this.props.challenge.description}</p>
        <Codemirror
          value={"this.state.code"}
          onChange={this.updateCodeInState.bind(this)} //
          options={options} />
        </div>
      )
    }
  }

          // 1)
          //this makes our Codemirror component configurable
          // we can make a language designation w/ options.mode or theme designation
          // w/ options.theme

          // In order to dynamically render text as the user types,
          // we need to tell Codemirror how and when to change its value prop.

          // 2)
          /*We set our Room component's state in the constructor function
          and defined a function, updateCodeInState to use as the onChange
          callback function for our  Codemirror component.

Codemirror will call updateCodeInState whenever there is a change to the
 code mirror text area, passing the function an argument of the text
 contained in that text area.

updateCodeInState creates a new copy of Room's state, causing our
component to re-render, passing that new value of this.state.code
into the Codemirror component under the prop of value.

Now that we have that working from the point of view of our single
user, let's integrate Socket.io to enable all clients viewing the
page to see and generate new text for our code mirror text editor,
in real-time.
*/
/*So, we need our Room component to be able to keep track of whatever gets
passed to Codemirror as value and to be able to change whatever gets passed
to Codemirror as value in response to the user's typing action.

******If you're thinking that it sounds like Room needs to keep track of the "code"
text as part of its own internal state, you're right!
*/

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
