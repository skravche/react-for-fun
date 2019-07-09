import React, { Component } from 'react';

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: 'One doesn`t simply',
      bottomText: 'trust google translate',
      randomMeme: 'http://i.imgflip.com/1bij.jpg',
      memsImgs: [],
    };
  }

  componentDidMount() {
    fetch('https://api.imgflip.com/get_memes')
      .then(resp => resp.json())
      .then(resp => {
        const { memes } = resp.data;
        this.setState({ memsImgs: memes });
        // console.log(memes[0]);
      });
  }

  handleChange = event => {
    const { name, value } = event.target;
    // console.log(name, value);
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault(); // to save previous state
    const randNum = Math.floor(Math.random() * this.state.memsImgs.length);
    const randomNumMeme = this.state.memsImgs[randNum].url;
    this.setState({ randomMeme: randomNumMeme });
  };

  render() {
    return (
      <div>
        <form className="meme-form">
          <input
            type="text"
            placeholder="Top text fun"
            name="topText"
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Bottom text fun"
            name="bottomText"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit} type="submit">
            Push Me
          </button>
        </form>
        <div className="meme">
          <img
            onClick={this.handleSubmit}
            src={this.state.randomMeme}
            alt=" "
          />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom"> {this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;

// import React, { Component } from 'react';
// class MemeGenerator extends Component {
//   constructor() {
//     super();
//     this.state = {
//       topText: '',
//       bottomText: '',
//       randomImg: 'http://i.imgflip.com/1bij.jpg',
//       allMemesImgs: [],
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }
//   componentDidMount() {
//     fetch('https://api.imgflip.com/get_memes').then(response =>
//       response.json().then(response => {
//         const { memes } = response.data;
//         // console.log(memes[0]);
//         this.setState({ allMemesImgs: memes });
//       })
//     );
//   }

//   handleChange = event => {
//     const { name, value } = event.target; //try =this.state;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     const randNum = Math.floor(Math.random() * this.state.allMemesImgs.length);

//     const randMemeImg = this.state.allMemesImgs[randNum].url;
//     this.setState({ randomImg: randMemeImg });
//     console.log(randMemeImg);
//   };

//   render() {
//     console.log(this.state.randomImg);

//     return (
//       <div>
//         <form className="meme-form" onSubmit={this.handleSubmit}>
//           <input
//             type="text"
//             name="topText"
//             placeholder="Top text"
//             onChange={this.handleChange}
//             value={this.state.topText}
//           />
//           <input
//             type="text"
//             placeholder="Bottom text"
//             name="bottomText"
//             onChange={this.handleChange}
//             value={this.state.bottomText}
//           />
//           <button type="submit">Push Me</button>
//         </form>
//         <div className="meme">
//           <img className="meme-pic" alt=" " src={this.state.randomImg} />
//           <h2 className="top">{this.state.topText}</h2>
//           <h2 className="bottom">{this.state.bottomText}</h2>
//         </div>
//       </div>
//     );
//   }
// }

// export default MemeGenerator;
