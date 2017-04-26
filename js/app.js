/* * * * * * * * * * * * * * * * * * * * * * *
/ By: Daniel  @kuwala 03/27/15
/ Heading Randamizer: Types a subheading one
/ letter at a time then picks a new heading from
/ a list of headings. Now with blinking cursor!
 * * * * * * * * * * * * * * * * * * * * * * */

var RandomHeading = React.createClass({
  getInitialState: function() {
    return { listOfLikes: ['to make fun things', 'to write juicy code', 'to explore the woods', 'to solder wires',
    'to pet animals', 'to draw doodles'], text: '', charIndex:0, listIndex: 0,
    fsmState: 'draw', waitCounter: 0, waitTicks: 14 };
  },
  componentDidMount: function() {
    this.interval = setInterval(this.update, 150);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  update: function() {
    //console.log("update called");
    switch(this.state.fsmState) {
      case 'start':
        //console.log("fsm start");
        break;
      case 'pick':
        //this.pickRandHeading();
        this.pickNextHeading();
        this.setState({fsmState: 'draw'})
        break;
      case 'draw':
        this.drawText();
        break;
      case 'wait':
        this.waitFunc();
        break;
      case 'erase':
        this.eraseText();
        break;
      default:
    }
    
    this.updateText();
  },
  waitFunc: function() {
    if (this.state.waitCounter < this.state.waitTicks) {
      this.setState({waitCounter: this.state.waitCounter + 1});
    } else {
      this.setState({waitCounter: 0});
      this.setState({fsmState: 'erase'});
    }

  },
  pickNextHeading: function() {
    if(this.state.listIndex < this.state.listOfLikes.length -1) {
      this.setState({listIndex: this.state.listIndex + 1});
    } else {
      this.setState({listIndex: 0});
    }
    
  },
  pickRandHeading: function() {
    var randIndex = Math.floor(Math.random() * this.state.listOfLikes.length );
    this.setState({listIndex: randIndex})
    //this.update();
    this.setState({charIndex: 0});
  },
  drawText: function() {
    var index = this.state.listIndex;
    if (this.state.charIndex < this.state.listOfLikes[index].length) {
      this.setState({charIndex: this.state.charIndex + 1});
    } else {
      // reset the text index and change state to erase
      //this.setState({charIndex: 0});
      this.setState({fsmState: 'wait'});
    }
    //console.log(this.state.charIndex);
    
    
  },
  eraseText: function() {
    /*
    // Erase one letter at a time
    var index = this.state.listIndex;
    if (this.state.charIndex > 0) {
      this.setState({charIndex: this.state.charIndex - 1});
    } else {
      this.setState({fsmState: 'pick'});
    } */
    this.setState({charIndex: 0});
    this.setState({fsmState: 'pick'});
  },
  updateText: function() {
    //update the text string
    var index = this.state.listIndex;
    var heading = this.state.listOfLikes[index];
    var newText = heading.substring(0, this.state.charIndex);
    this.setState({text: newText});
  },
  render: function() {
    return (
      <div>
      <h3 className="cursor">I like {this.state.text}</h3>
      </div>
    );
  }
});

React.render(<RandomHeading  />, randHeading );

