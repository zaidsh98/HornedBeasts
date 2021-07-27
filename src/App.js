import React from 'react';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import Data from './assets/data.json';
import SelectedBeast from './components/SelectedBeast';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: '',
      imageUrl: '',
      description: '',
      modalState: false,
    };
  }


  handler = (title, imageUrl, description, modalState) => {
      this.setState({
        title: title,
        imageUrl: imageUrl,
        description: description,
        modalState: modalState,
      });
  };

  handelModalShow = modalState =>{
      this.setState({
        modalState: modalState
      });
  }


  render(){
    return(
      <>
        <SelectedBeast 
          title={this.state.title}
          imageUrl={this.state.imageUrl}
          description={this.state.description}
          showModal={this.state.modalState}
          hideModal={this.handelModalShow}

        />
        <Header />
        <Main 
          beastList={Data}
          handler={this.handler}/>
        <Footer />
      </>
    );
  }
}

export default App;